import * as T from './vendor/three.module.min.js';
import {detailTextures} from './detail-textures.js?v=7';
const pixel=new Uint8Array([150,150,150,255]);
const fallback=new T.DataTexture(pixel,1,1,T.RGBAFormat);fallback.needsUpdate=true;
const atlasUniform={value:fallback},readyUniform={value:0},wetUniform={value:0};
const kinds={plaster:0,wood:1,roof:2,stone:3,grass:4,leaf:5,fabric:6,snow:7,petal:8,bark:9,leafDetail:10};
const category={
 plaster:new Set(['#f0dfba','#edd7ac','#e7d7b2','#e4d5b2','#ead8b3','#e1cfa7','#e9d9b5','#f0e5c8','#e5d4ac','#e2d6b2','#e4daba','#dfc895']),
 wood:new Set(['#785e4c','#927652','#735b48','#645346','#866948','#a17050','#9e8967','#a68b66','#8b775c','#9c845e','#a57a55','#8b7759','#baa47a','#a77d52','#8f785b','#a98a62','#8e7957','#9b855e','#b99a6d','#a68a64','#8b7658','#c5a675','#967b56','#a58c63','#b89a6a','#89745a','#a58c65','#ba985b','#b6a17b','#bda783','#b19a70','#a28a67']),
 roof:new Set(['#b96953','#8f9b8d','#73928a','#638c89','#b68161','#688e88','#759a8c','#70948b','#668e87','#628b89','#789b8e','#b76c50','#b68161','#bf8061']),
 stone:new Set(['#b7aa91','#bcaa8a','#d8d2b7','#c5b69b','#c0b59b','#c5ba9c','#d0c5a7','#d9caa9','#baaa90','#c5af7f','#bdbb9a','#b7ac8e','#c8b89a','#b9a484','#d4c3aa','#ad8e79','#dfd0a5','#daca9f']),
 fabric:new Set(['#f1e5c9','#e9dcb8','#e8dac0','#a6bec1','#e8dac0','#f0e5ca','#c4ad77','#799ba8','#89a9ba','#c5a265','#b9a18c']),
};
const metals=new Set(['#dab464','#d2b069','#d7b463','#d6b85c','#d3b161','#d8b968','#d2b16f','#caa665','#e1c784']);
export function finishMaterial(mat,kind){
 if(mat.userData.surface)return mat;
 if(!kind)for(const [name,colors] of Object.entries(category))if(colors.has('#'+mat.color.getHexString())){kind=name;break}
 if(!kind){if(metals.has('#'+mat.color.getHexString())){mat.metalness=.56;mat.roughness=.32}return mat}
 mat.userData.surface=kind;mat.defines={...mat.defines,SURFACE_KIND:kinds[kind]};
 mat.customProgramCacheKey=()=>`painted-surface-v7-${kind}`;
 mat.onBeforeCompile=shader=>{
  shader.uniforms.uPaintAtlas=atlasUniform;shader.uniforms.uPaintReady=readyUniform;shader.uniforms.uWet=wetUniform;shader.uniforms.uBotanical=detailTextures.botanical;shader.uniforms.uBotanicalReady=detailTextures.botanicalReady;shader.uniforms.uDetailTime=detailTextures.time;shader.uniforms.uDetailWind=detailTextures.wind;
  shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>\nvarying vec3 vPaintPosition; varying vec3 vPaintNormal; varying vec2 vFineUV;uniform float uDetailTime;uniform float uDetailWind;`)
   .replace('#include <begin_vertex>',`#include <begin_vertex>
   vFineUV=uv;
   #if SURFACE_KIND == 10
    float leafSeed=position.x*2.;
    #ifdef USE_INSTANCING
     leafSeed+=instanceMatrix[3].x*9.+instanceMatrix[3].z*5.;
    #endif
    transformed.z+=sin(uDetailTime*2.1+leafSeed)*uv.y*uv.y*(.008+uDetailWind*.04);
   #endif
   `)
   .replace('#include <project_vertex>',`#include <project_vertex>
   vec4 paintLocal=vec4(transformed,1.);
   #ifdef USE_INSTANCING
    paintLocal=instanceMatrix*paintLocal;
   #endif
   vPaintPosition=(modelMatrix*paintLocal).xyz;vPaintNormal=normalize(inverseTransformDirection(transformedNormal,viewMatrix));`);
  shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
 varying vec3 vPaintPosition;varying vec3 vPaintNormal;varying vec2 vFineUV;uniform sampler2D uPaintAtlas;uniform float uPaintReady;uniform float uWet;uniform sampler2D uBotanical;uniform float uBotanicalReady;
 float paintHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float paintNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(paintHash(i),paintHash(i+vec3(1,0,0)),f.x),mix(paintHash(i+vec3(0,1,0)),paintHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(paintHash(i+vec3(0,0,1)),paintHash(i+vec3(1,0,1)),f.x),mix(paintHash(i+vec3(0,1,1)),paintHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 float paintAtlas(vec2 uv){
  // Mirror repeats and inset the samples so adjacent atlas quadrants never bleed.
  vec2 f=1.-abs(mod(uv,2.)-1.);vec2 origin=vec2(0.,.5);
  #if SURFACE_KIND == 1
   origin=vec2(.5,.5);
  #elif SURFACE_KIND == 2
   origin=vec2(0.,0.);
  #elif SURFACE_KIND == 3
   origin=vec2(.5,0.);
  #endif
  vec3 texel=texture2D(uPaintAtlas,origin+.009+f*.482).rgb;return dot(texel,vec3(.2126,.7152,.0722));
 }
 float botanicalHeight(vec2 uv,vec2 corner){vec2 f=1.-abs(mod(uv,2.)-1.);vec3 c=texture2D(uBotanical,corner+.005+f*.49).rgb;return clamp(dot(c,vec3(.2126,.7152,.0722))*2.15+.19,0.,1.);}
 float paintHeight(vec3 p){
  #if SURFACE_KIND < 4
   vec3 w=pow(abs(normalize(vPaintNormal)),vec3(6.));w/=max(w.x+w.y+w.z,.001);vec3 q=p;
   #if SURFACE_KIND == 1
    q*=vec3(1.3,.6,1.3);
   #elif SURFACE_KIND == 2
    q*=2.6;
   #elif SURFACE_KIND == 3
    q*=1.6;
   #else
    q*=1.2;
   #endif
   float texel=paintAtlas(q.zy)*w.x+paintAtlas(q.xz)*w.y+paintAtlas(q.xy)*w.z;
   return mix(.48+paintNoise(p*17.)*.17,texel,uPaintReady);
  #elif SURFACE_KIND == 4
   float blades=botanicalHeight(p.xz*.78,vec2(0.,.5));return mix(paintNoise(p*2.)*.63+paintNoise(p*27.)*.37,blades*.8+paintNoise(p*1.2)*.2,uBotanicalReady);
  #elif SURFACE_KIND == 5
   return mix(paintNoise(p*13.)*.65+paintNoise(p*39.)*.35,.37+botanicalHeight(p.xy*5.+p.z*.61,vec2(.5,.5))*.34,uBotanicalReady);
  #elif SURFACE_KIND == 6
   vec2 threads=vFineUV*185.;vec2 threadAA=fwidth(threads);return .53+.1*cos(threads.x*6.28)*cos(threads.y*6.28)*exp(-dot(threadAA,threadAA)*3.);
  #elif SURFACE_KIND == 7
   return .6+paintNoise(p*95.)*.14;
  #elif SURFACE_KIND == 8
   return mix(.5,botanicalHeight(vFineUV,vec2(0.,0.)),uBotanicalReady);
  #elif SURFACE_KIND == 9
   return mix(.5,botanicalHeight(vec2(vFineUV.x*1.3,vFineUV.y*.8),vec2(.5,0.)),uBotanicalReady);
  #else
   return mix(.5,botanicalHeight(vFineUV,vec2(.5,.5)),uBotanicalReady);
  #endif
 }
 `).replace('#include <map_fragment>',`#include <map_fragment>
 float paintH=paintHeight(vPaintPosition);
 #if SURFACE_KIND == 0
  diffuseColor.rgb*=mix(.78,1.13,paintH);diffuseColor.rgb*=.93+.07*smoothstep(.1,.55,vPaintPosition.y);
 #elif SURFACE_KIND == 1
  diffuseColor.rgb*=mix(.72,1.16,paintH);
 #elif SURFACE_KIND == 2
  diffuseColor.rgb*=mix(.76,1.14,paintH);
 #elif SURFACE_KIND == 3
  diffuseColor.rgb*=mix(.77,1.12,paintH);
 #elif SURFACE_KIND == 4
  float mottling=paintNoise(vPaintPosition*1.5);diffuseColor.rgb*=mix(.82,1.12,paintH);diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(1.09,1.02,.86),mottling*.3);
 #elif SURFACE_KIND == 5
  diffuseColor.rgb*=mix(.77,1.12,paintH);diffuseColor.rgb+=vec3(.022,.026,.005)*pow(max(vPaintNormal.y,0.),2.);
 #elif SURFACE_KIND == 8
  diffuseColor.rgb*=mix(.76,1.2,paintH);diffuseColor.rgb+=vec3(.035,.02,.018)*(1.-abs(dot(normalize(vPaintNormal),normalize(cameraPosition-vPaintPosition))));
 #elif SURFACE_KIND == 9
  diffuseColor.rgb*=mix(.71,1.15,paintH);
 #elif SURFACE_KIND == 10
  diffuseColor.rgb*=mix(.72,1.12,paintH);diffuseColor.rgb+=vec3(.016,.023,.006)*(1.-abs(dot(normalize(vPaintNormal),normalize(cameraPosition-vPaintPosition))));
 #else
  diffuseColor.rgb*=mix(.88,1.08,paintH);
 #endif
 #if SURFACE_KIND < 5 || SURFACE_KIND == 9
  diffuseColor.rgb*=1.-uWet*.08;
 #endif
 `).replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
 roughnessFactor=clamp(roughnessFactor+(paintH-.55)*.13-uWet*${['fabric','petal','snow'].includes(kind)?'0.':'.16'},.22,1.);
 `).replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
 vec3 paintDx=dFdx(-vViewPosition),paintDy=dFdy(-vViewPosition);
 vec3 paintR1=cross(paintDy,normal),paintR2=cross(normal,paintDx);float paintDet=dot(paintDx,paintR1);
 float paintStrength=.006;
 #if SURFACE_KIND == 2 || SURFACE_KIND == 3
 paintStrength=.009;
 #elif SURFACE_KIND == 4
 paintStrength=.006;
 #elif SURFACE_KIND == 7
 paintStrength=.0015;
 #elif SURFACE_KIND == 8 || SURFACE_KIND == 10
 paintStrength=.002;
 #elif SURFACE_KIND == 9
 paintStrength=.008;
 #endif
 vec3 paintGradient=sign(paintDet)*(dFdx(paintH)*paintR1+dFdy(paintH)*paintR2);
 normal=normalize(max(abs(paintDet),.00000001)*normal-paintGradient*paintStrength);
 `);
  mat.userData.shader=shader;
 };
 return mat;
}
export async function loadArtTextures(renderer){
 const atlas=await new T.TextureLoader().loadAsync(new URL('./assets/handpaint-atlas.png',import.meta.url).href);
 atlas.colorSpace=T.NoColorSpace;atlas.generateMipmaps=true;atlas.minFilter=T.LinearMipmapLinearFilter;atlas.magFilter=T.LinearFilter;atlas.anisotropy=Math.min(16,renderer.capabilities.getMaxAnisotropy());atlas.wrapS=T.ClampToEdgeWrapping;atlas.wrapT=T.ClampToEdgeWrapping;atlasUniform.value=atlas;readyUniform.value=1;return atlas;
}
export function updateSurfaceWeather(weather){wetUniform.value=weather==='rain'?1:0}
export function softParticles(color,size,opacity=1,glow=false){
 const u={uColor:{value:new T.Color(color)},uOpacity:{value:opacity},uSize:{value:size*Math.min(globalThis.devicePixelRatio||1,2)}};
 const m=new T.ShaderMaterial({uniforms:u,transparent:true,depthWrite:false,blending:glow?T.AdditiveBlending:T.NormalBlending,vertexShader:'uniform float uSize;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=uSize;}',fragmentShader:'uniform vec3 uColor;uniform float uOpacity;void main(){float r=length(gl_PointCoord-.5);float a=1.-smoothstep(.06,.5,r);gl_FragColor=vec4(uColor,a*uOpacity);\n#include <colorspace_fragment>\n}'});
 m.color=u.uColor.value;Object.defineProperty(m,'opacity',{get:()=>u.uOpacity.value,set:v=>u.uOpacity.value=v,configurable:true});return m;
}
