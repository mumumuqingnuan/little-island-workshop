import * as T from './vendor/three.module.min.js';
import {seasonal,group,sphere,beam,compact} from './models.js?v=7';

function fernGeometry(){
 const pos=[],uv=[],idx=[];
 for(let i=1;i<=8;i++)for(const s of [-1,1]){
  const t=i/9,y=Math.sin(t*Math.PI*.72)*.49,z=t*.59,w=(1-t*.78)*.23,base=pos.length/3;
  pos.push(0,y,z,s*w*.48,y+.018,z-.023,s*w,y+.023,z+.075,s*w*.5,y+.039,z+.095);uv.push(.5,0,0,.42,.5,1,1,.42);idx.push(base,base+1,base+2,base,base+2,base+3);
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;
}
export function gardenDetails(parent){
 const root=group(parent);root.userData.seasonalFoliage=true;
 const patches=[[-6.8,9.4],[-5.15,10.85],[-3.5,11.25],[-10.9,10.5],[-12.8,5.4],[14,5.5],[13,-8.2],[5.4,12.4],[-14.8,2.3],[3.5,-12.4]],ferns=new T.InstancedMesh(fernGeometry(),seasonal.leafDetail,patches.length*8),dummy=new T.Object3D();
 patches.forEach(([x,z],j)=>{for(let i=0;i<8;i++){const s=.65+(i%3)*.16;dummy.position.set(x+Math.sin(j*4)*.05,.085,z);dummy.rotation.set(0,i*Math.PI/4+j,0);dummy.scale.set(s,s,s);dummy.updateMatrix();ferns.setMatrixAt(j*8+i,dummy.matrix);}});ferns.castShadow=ferns.receiveShadow=true;root.add(ferns);
 const blooms=[];
 for(const [j,[x,z]] of [[-10.65,8.3],[-7.7,7.9],[6.25,8.2],[10.8,7.2],[8.9,.0],[-12.3,-6.2],[-4.7,11.2]].entries()){
  const patch=group(root,x,.08,z);patch.userData.phase=j*1.7;
  for(let i=0;i<5;i++){
   const a=i*2.399,xx=Math.cos(a)*.27,zz=Math.sin(a)*.23,h=.35+(i%3)*.1;beam(patch,[xx,0,zz],[xx+.035,h,zz],.012,seasonal.bark);
   for(const s of [-1,1]){const leaf=sphere(patch,xx+s*.075,h*.57,zz,.1,.019,.044,seasonal.leafDetail);leaf.rotation.z=s*.43;leaf.rotation.y=a;}
   // Overlapping whorls create a rose silhouette with individually lit petals.
   for(let layer=0;layer<3;layer++){const r=.112-layer*.027,flower=sphere(patch,xx+.035,h+layer*.027,zz,r,.026,r,seasonal.flower);flower.rotation.y=layer*.47+a;}
  }
  compact(patch);blooms.push(patch);
 }
 return {root,ferns,blooms};
}
export function animateGarden(detail,time,wind,season,weather){detail.root.visible=season!=='winter'&&weather!=='snow';detail.blooms.forEach(g=>{g.rotation.z=Math.sin(time*1.6+g.userData.phase)*wind*.033;g.rotation.x=Math.cos(time*1.3+g.userData.phase)*wind*.024;});}
