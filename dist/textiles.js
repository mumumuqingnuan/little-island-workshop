import * as T from './vendor/three.module.min.js';
import {detailTextures} from './detail-textures.js?v=7';
const cache=new Map(),variantIndex={floral:0,gingham:1,stars:2,damask:3,linen:4};
export function textileMaterial(variant='floral'){
 if(cache.has(variant))return cache.get(variant);
 const m=new T.MeshPhysicalMaterial({color:'#fff9eb',roughness:.94,metalness:0,sheen:.55,sheenColor:'#f1e6d3',sheenRoughness:.85,side:T.DoubleSide});m.userData.textile=variant;
 m.customProgramCacheKey=()=>`woven-v6-${variant}`;
 m.onBeforeCompile=shader=>{
  shader.uniforms.uTextileAtlas=detailTextures.textile;shader.uniforms.uTextileReady=detailTextures.textileReady;shader.defines={...shader.defines};
  shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec2 vTextileUV;').replace('#include <begin_vertex>','#include <begin_vertex>\nvTextileUV=uv;');
  shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
 varying vec2 vTextileUV;uniform sampler2D uTextileAtlas;uniform float uTextileReady;
 float textileWeave(vec2 uv){vec2 q=uv*220.;vec2 aa=fwidth(q);vec2 thread=cos(q*6.28318)*exp(-aa*aa*3.);return thread.x*.54+thread.y*.46;}
 `).replace('#include <map_fragment>',`#include <map_fragment>
 vec2 textileUV=vTextileUV;vec2 atlasOrigin=vec2(${variantIndex[variant]%2===0?'0.':'.5'},${variantIndex[variant]<2?'.5':'0.'});
 vec2 tileUV=1.-abs(mod(textileUV,2.)-1.);vec3 printColor=texture2D(uTextileAtlas,atlasOrigin+.005+tileUV*.49).rgb;
 float weave=textileWeave(textileUV);float weaveHeight=weave*.06;
 ${variant==='linen'?'printColor=vec3(.78,.77,.64);':'printColor=mix(vec3(.79,.76,.64),printColor,uTextileReady);'}
 diffuseColor.rgb=printColor*(.98+weave*.038);
 // Fine stitches follow the puffy diamond quilting, filtered as the camera moves away.
 ${variant!=='linen'?`vec2 diamond=vec2(textileUV.x+textileUV.y,textileUV.x-textileUV.y)*5.;vec2 edge=abs(fract(diamond-.5)-.5);vec2 width=max(fwidth(diamond),vec2(.003));float stitch=1.-smoothstep(.007,.015+min(width.x,width.y),min(edge.x,edge.y));float stitchFade=1.-smoothstep(.05,.18,max(width.x,width.y));diffuseColor.rgb*=1.-stitch*stitchFade*.1;weaveHeight-=stitch*stitchFade*.012;`:''}
 `).replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
 vec3 tdX=dFdx(-vViewPosition),tdY=dFdy(-vViewPosition);vec3 tr1=cross(tdY,normal),tr2=cross(normal,tdX);float det=dot(tdX,tr1);vec3 grad=sign(det)*(dFdx(weaveHeight)*tr1+dFdy(weaveHeight)*tr2);normal=normalize(abs(det)*normal-grad*.0018);
 `);
  m.userData.shader=shader;
 };
 cache.set(variant,m);return m;
}
function quiltGeometry(width){
 const nu=44,nv=36,positions=[],uvs=[],indices=[];
 for(let j=0;j<=nv;j++)for(let i=0;i<=nu;i++){
  const u=i/nu,v=j/nv,x=(u-.5)*(width+.14),z=-.35+v*1.43;
  const side=T.MathUtils.smoothstep(Math.abs(u-.5),.4,.5),foot=T.MathUtils.smoothstep(v,.86,1),seam=Math.cos((u+v)*Math.PI*10)*Math.cos((u-v)*Math.PI*10);
  const y=.631+.012*seam+.012*Math.sin(u*19+v*5)+.01*Math.cos(v*19)-side*.195-foot*.19;
  positions.push(x,y,z);uvs.push(u,1-v);
 }
 for(let j=0;j<nv;j++)for(let i=0;i<nu;i++){const a=j*(nu+1)+i,b=a+nu+1;indices.push(a,b,a+1,b,b+1,a+1);}
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));geo.setIndex(indices);geo.computeVertexNormals();return geo;
}
function stitchedPillow(parent,x,y,z,width,depth,variant,angle=0){
 const geo=new T.SphereGeometry(1,28,18),a=geo.attributes.position;
 // A gently squared cushion, with a soft domed centre.
 for(let i=0;i<a.count;i++){const px=a.getX(i),py=a.getY(i),pz=a.getZ(i);a.setXYZ(i,Math.sign(px)*Math.pow(Math.abs(px),.63)*width*.5,py*.115,Math.sign(pz)*Math.pow(Math.abs(pz),.63)*depth*.5);}geo.computeVertexNormals();
 const root=new T.Group();root.position.set(x,y,z);root.rotation.x=angle;parent.add(root);const pillow=new T.Mesh(geo,textileMaterial(variant));pillow.castShadow=pillow.receiveShadow=true;root.add(pillow);
 const pts=[];for(let i=0;i<=64;i++){const a=i/64*Math.PI*2;pts.push(new T.Vector3(Math.sign(Math.cos(a))*Math.pow(Math.abs(Math.cos(a)),.65)*width*.49,0,Math.sign(Math.sin(a))*Math.pow(Math.abs(Math.sin(a)),.65)*depth*.49));}
 const seam=new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts),64,.0035,4,false),new T.MeshStandardMaterial({color:'#ddcfad',roughness:1}));root.add(seam);return root;
}
export function dressBed(parent,width,variant){
 const blanket=new T.Mesh(quiltGeometry(width),textileMaterial(variant));blanket.castShadow=blanket.receiveShadow=true;parent.add(blanket);
 for(const x of width<1.4?[0]:[-.43,.43])stitchedPillow(parent,x,.59,-.65,width<1.4?.88:.75,.44,variant==='damask'?'damask':'linen');
 // Folded top edge catches a restrained highlight, instead of a rigid box edge.
 const pts=[];for(let i=0;i<=30;i++){const x=(i/30-.5)*width;pts.push(new T.Vector3(x,.653+Math.cos(i*.65)*.007,-.335));}
 const hem=new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts),48,.008,5,false),new T.MeshStandardMaterial({color:variant==='stars'?'#d0d0b8':'#e0d3b4',roughness:.96}));hem.castShadow=true;parent.add(hem);
 return blanket;
}
export function dressCushion(parent,x,y,z,variant='gingham'){return stitchedPillow(parent,x,y,z,.53,.48,variant,.63);}
