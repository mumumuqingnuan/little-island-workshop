import * as T from './vendor/three.module.min.js';
import {seasonal,material} from './models.js?v=8';
import {softParticles} from './surfaces.js?v=8';
import {places} from './town.js?v=8';
import {gardenDetails,animateGarden} from './garden-details.js?v=8';
const shadowMat=new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;void main(){float d=length((vUv-.5)*2.);float a=exp(-d*d*4.)*.27*(1.-smoothstep(.65,1.,d));gl_FragColor=vec4(.18,.25,.23,a);}'});
const plane=new T.PlaneGeometry(1,1);
export function contact(root,x,y,z,w,d){const m=new T.Mesh(plane,shadowMat);m.rotation.x=-Math.PI/2;m.position.set(x,y,z);m.scale.set(w,d,1);root.add(m);return m}
export function finishBuilding(model,type,level){
 contact(model,0,.035,0,type==='garden'?2.15:2.1+level*.17,1.9+level*.1);
 if(type==='house'){
  const positions=new Float32Array(15*3),geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(positions,3));const points=new T.Points(geo,softParticles('#d9d6c8',13,.16));points.frustumCulled=false;points.position.set(-.43,2.43+(level>=3?.56:0),-.38);points.userData.smoke=positions;model.add(points);
 }
}
export function animateBuildingFine(model,time,wind){model.traverse(o=>{if(o.userData.smoke){const p=o.userData.smoke;for(let i=0;i<15;i++){const age=(time*.2+i/15)%1;p[i*3]=Math.sin(i*2.4+age*3)*.065+age*(.1+wind*.37);p[i*3+1]=age*.85;p[i*3+2]=Math.cos(i*1.7+age*3)*.065+age*.09}o.geometry.attributes.position.needsUpdate=true}})}
export function addFinesse(scene,island,slots){
 const root=new T.Group();scene.add(root);let seed=19171;function rnd(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}
 const bladeGeo=new T.PlaneGeometry(.034,.24,1,4);bladeGeo.translate(0,.12,0);const bp=bladeGeo.attributes.position;for(let i=0;i<bp.count;i++){const f=bp.getY(i)/.24;bp.setX(i,bp.getX(i)*(1-f*.96));bp.setZ(i,f*f*.025);}bladeGeo.computeVertexNormals();const grassMat=new T.MeshStandardMaterial({color:'#89a869',side:T.DoubleSide,roughness:.9});
 const windUniform={value:.5},timeUniform={value:0};
 grassMat.onBeforeCompile=shader=>{shader.uniforms.uBladeWind=windUniform;shader.uniforms.uBladeTime=timeUniform;shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nuniform float uBladeTime;uniform float uBladeWind;varying float vBlade;').replace('#include <begin_vertex>',`#include <begin_vertex>
 vBlade=position.y/.24;float bladeSeed=0.;
 #ifdef USE_INSTANCING
 bladeSeed=instanceMatrix[3].x*3.+instanceMatrix[3].z;
 #endif
 transformed.x+=sin(uBladeTime*2.1+bladeSeed)*vBlade*vBlade*(.01+uBladeWind*.055);
 `);shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying float vBlade;').replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.rgb*=mix(.7,1.1,vBlade);')};
 const grass=new T.InstancedMesh(bladeGeo,grassMat,6800),dummy=new T.Object3D(),tint=new T.Color();let count=0;
 const routes=[[[-13,-6],[11,-6],[11,0],[9.1,2.7],[6,3.5]],[[0,-9],[0,-4]],[[-7.5,-8],[-7.5,-6]],[[-10.5,-6],[-10.5,-2.6],[-8.1,-1],[-8.1,5],[-9.2,8.3]],[[-8.1,3.8],[-10.8,3.8]],[[5.8,.7],[8.6,.7],[10,0],[12.5,3.4],[12.5,4.5],[8.4,8.8]],[[-13,6],[-10,9],[-6,10.2],[-2,9],[2,10.7],[2,13.8]],[[-8.1,5],[-10,9]],[[-2,9],[0,6.1]],[[8.4,8.8],[5.5,9.8],[2,10.7]]];
 function nearPath(x,z){for(const route of routes)for(let i=1;i<route.length;i++){const a=route[i-1],b=route[i],dx=b[0]-a[0],dz=b[1]-a[1],t=T.MathUtils.clamp(((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz),0,1);if(Math.hypot(x-a[0]-dx*t,z-a[1]-dz*t)<.75)return true;}return false;}
 for(let attempt=0;attempt<90000&&count<6800;attempt++){
  const x=(rnd()-.5)*35.7,z=(rnd()-.5)*28.2;if(x*x/319+z*z/199>1)continue;
  if(Math.abs(x)<6.2&&Math.abs(z)<5.4&&(Math.abs(x)<.85||Math.abs(z)<.95))continue;
  if(nearPath(x,z)||places.some(p=>!['road','fishing'].includes(p.kind)&&Math.abs(x-p.x)<(p.kind==='market'?3.35:2.6)&&Math.abs(z-p.z)<3.3))continue;
  if((x+8.7)**2/7+(z-12)**2/2<1)continue;
  if(slots.some(([xx,zz])=>Math.abs(x-xx)<1.55&&Math.abs(z-zz)<1.6))continue;
  if((x-4.23)**2/4+(z+2.62)**2/2.2<1||(x<-3.6&&z>1.4)||(Math.abs(x)<1.6&&z>4.1))continue;
  const scale=.6+rnd()*.75;dummy.position.set(x,.07,z);dummy.rotation.y=rnd()*Math.PI;dummy.scale.set(scale,scale,scale);dummy.updateMatrix();grass.setMatrixAt(count,dummy.matrix);tint.setScalar(.9+rnd()*.24);grass.setColorAt(count,tint);count++;
 }
 grass.count=count;grass.userData.fullCount=count;grass.receiveShadow=true;grass.castShadow=false;root.add(grass);
 for(const g of island.userData.dynamic.children)contact(root,g.position.x,.055,g.position.z,1.5*g.scale.x,1.35*g.scale.x);
 // Small ripples follow the swimming ducks, with a quieter second layer in the pond.
 const ripples=[];for(let i=0;i<7;i++){const r=new T.Mesh(new T.RingGeometry(.47,.485,40),new T.MeshBasicMaterial({color:'#e0ede1',transparent:true,opacity:.3,side:T.DoubleSide,depthWrite:false}));r.rotation.x=-Math.PI/2;r.position.set(4.8,.124,-2.57);root.add(r);ripples.push(r)}
 const butterflies=[];
 for(let i=0;i<2;i++){
  const b=new T.Group(),wings=[];const body=new T.Mesh(new T.SphereGeometry(.025,10,7),material('#645745'));body.scale.y=2.1;b.add(body);
  for(const side of [-1,1]){const g=new T.Group();b.add(g);for(const [y,sx,sy] of [[.052,.09,.1],[-.045,.075,.067]]){const m=new T.Mesh(new T.SphereGeometry(1,12,8),material(i?'#b9c9dc':'#e7bb76',{side:T.DoubleSide}));m.position.set(side*sx*.85,y,0);m.scale.set(sx,sy,.013);g.add(m);for(let j=0;j<3;j++){const dot=new T.Mesh(new T.SphereGeometry(.012,8,5),material(i?'#6c8dac':'#9e754f'));dot.position.set(side*sx*(.55+j*.24),y+(j-1)*.027,.016);g.add(dot)}}wings.push(g)}
  b.userData.wings=wings;root.add(b);butterflies.push(b);
 }
 const garden=gardenDetails(root);return {root,grass,grassMat,windUniform,timeUniform,ripples,butterflies,garden};
}
export function animateFinesse(detail,time,wind,night,season,weather,actors){
 animateGarden(detail.garden,time,wind,season,weather);detail.grass.visible=season!=='winter'&&weather!=='snow';detail.grassMat.color.copy(seasonal.grass.color);detail.windUniform.value=wind;detail.timeUniform.value=time;
 const duck=actors.find(a=>a.userData.actor?.name==='白鸭');
 for(let i=0;i<detail.ripples.length;i++){const r=detail.ripples[i],f=(time*.18+i*.17)%1,s=.2+f*.9;r.position.set((duck?.position.x??4.8)-i*.018,.124,(duck?.position.z??-2.57)-i*.015);r.scale.set(s,s*.73,1);r.material.opacity=(1-f)*.29;r.visible=season!=='winter'}
 detail.butterflies.forEach((b,i)=>{b.visible=night<.5&&season!=='winter'&&!['rain','snow'].includes(weather);b.position.set(-3.32+Math.sin(time*.72+i*2)*.6,1.05+Math.sin(time*.9+i)*.22,2.64+Math.cos(time*.6+i)*.6);b.rotation.y=Math.sin(time*.5+i);b.userData.wings.forEach((w,j)=>w.rotation.y=Math.sin(time*14+i)*.95*(j===0?-1:1))});
}
