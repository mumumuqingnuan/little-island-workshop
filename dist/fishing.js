import * as T from './vendor/three.module.min.js';
import {material,box,sphere,cylinder,beam,group,mesh,compact,disposeModel} from './models.js?v=8';
import {resident,animateResident,poseFishing} from './residents.js?v=8';

// These are game encounter settings, not a real fishing forecast.
export const fishSpecies=[
 {id:'sardine',name:'沙丁鱼',rarity:'常见',spots:['pier','beach'],weight:20,size:[12,25],price:18,difficulty:.2,color:'#9dbbc3',shape:'slim'},
 {id:'mackerel',name:'鲭鱼',rarity:'常见',spots:['pier','rocks'],weight:16,size:[25,44],price:30,difficulty:.33,color:'#78a3ad',shape:'slim'},
 {id:'horse',name:'竹荚鱼',rarity:'常见',spots:['pier','beach'],weight:18,size:[16,34],price:24,difficulty:.27,color:'#b6c3b1',shape:'slim'},
 {id:'mullet',name:'鲻鱼',rarity:'常见',spots:['pier','beach'],weight:14,size:[23,51],price:32,difficulty:.33,color:'#9bada6'},
 {id:'whiting',name:'沙梭鱼',rarity:'常见',spots:['beach'],weight:20,size:[13,29],price:26,difficulty:.25,color:'#c5bf9e',shape:'slim'},
 {id:'bass',name:'海鲈鱼',rarity:'少见',spots:['pier','rocks'],weight:11,size:[35,78],price:68,difficulty:.54,color:'#99b4b3',weather:'rain'},
 {id:'blackbream',name:'黑鲷',rarity:'少见',spots:['pier','rocks'],weight:10,size:[22,48],price:58,difficulty:.47,color:'#7a9199',shape:'round'},
 {id:'redbream',name:'真鲷',rarity:'稀有',spots:['rocks','pier'],weight:5,size:[28,65],price:115,difficulty:.64,color:'#d19c9c',shape:'round',season:'spring'},
 {id:'goldbream',name:'黄鳍鲷',rarity:'少见',spots:['beach','rocks'],weight:9,size:[19,43],price:55,difficulty:.42,color:'#c0b88b',shape:'round',season:'summer'},
 {id:'flounder',name:'牙鲆',rarity:'少见',spots:['beach'],weight:9,size:[28,60],price:72,difficulty:.5,color:'#acaa8c',shape:'flat'},
 {id:'puffer',name:'河豚',rarity:'少见',spots:['beach','rocks'],weight:9,size:[12,31],price:46,difficulty:.38,color:'#b7b48b',shape:'puffer'},
 {id:'grouper',name:'石斑鱼',rarity:'稀有',spots:['rocks'],weight:6,size:[32,76],price:125,difficulty:.68,color:'#a89c84',shape:'spotted'},
 {id:'hairtail',name:'带鱼',rarity:'稀有',spots:['pier'],weight:5,size:[60,120],price:105,difficulty:.62,color:'#bfd0cf',shape:'ribbon',night:true},
 {id:'flying',name:'飞鱼',rarity:'稀有',spots:['pier','rocks'],weight:4,size:[19,36],price:100,difficulty:.57,color:'#91b8c5',shape:'flying',season:'summer'},
 {id:'cod',name:'鳕鱼',rarity:'稀有',spots:['rocks'],weight:4,size:[36,84],price:135,difficulty:.68,color:'#b3bdac',shape:'spotted',season:'winter'},
 {id:'tuna',name:'金枪鱼',rarity:'珍稀',spots:['pier'],weight:1,size:[74,146],price:260,difficulty:.83,color:'#7998ab',shape:'tuna'}
];
export const fishingSpots={pier:{name:'海风码头',x:2,z:17.7,angle:0},beach:{name:'月牙沙滩',x:-9.8,z:14.65,angle:0},rocks:{name:'白浪礁岸',x:13.99,z:11.46,angle:.3}};
export function chooseFish(spot,climate,rng=Math.random){
 const eligible=fishSpecies.filter(f=>f.spots.includes(spot)),weights=eligible.map(f=>f.weight*(f.night?(climate.hour>=19||climate.hour<5?3:.25):1)*(f.weather===climate.weather?1.8:1)*(f.season===climate.season?2:1));let n=rng()*weights.reduce((a,b)=>a+b,0);for(let i=0;i<eligible.length;i++){n-=weights[i];if(n<0)return eligible[i];}return eligible.at(-1);
}
export class FishingGame{
 constructor(rng=Math.random){this.rng=rng;this.phase='idle';this.spot='pier';this.elapsed=0;this.held=false;this.collection=new Map();this.catch=null;this.message='抛下鱼钩，听一会儿海浪。';}
 open(spot){this.cancel();this.spot=spot;}
 cancel(){this.phase='idle';this.held=false;this.catch=null;this.message='抛下鱼钩，听一会儿海浪。';}
 cast(climate){if(!['idle','escaped','caught'].includes(this.phase)||this.catch)return false;this.fish=chooseFish(this.spot,climate,this.rng);this.phase='casting';this.elapsed=0;this.wait=2.2+this.rng()*3.2;this.held=false;this.message='鱼线划过海面……';return true;}
 press(){if(this.phase==='bite'){this.phase='reel';this.elapsed=0;this.tension=.35;this.progress=.04;this.danger=0;this.slack=0;this.held=true;this.message='按住收线，松开缓一缓；别让张力进入红区。';return true;}if(this.phase==='reel'){this.held=true;return true;}return false;}
 release(){this.held=false;}
 escape(message){this.phase='escaped';this.held=false;this.message=message;this.catch=null;}
 update(dt){
  if(!['casting','waiting','bite','reel'].includes(this.phase))return;this.elapsed+=dt;
  if(this.phase==='casting'&&this.elapsed>=.85){this.phase='waiting';this.elapsed=0;this.message='浮漂轻轻晃动，等鱼咬钩……';}
  else if(this.phase==='waiting'&&this.elapsed>=this.wait){this.phase='bite';this.elapsed=0;this.message='咬钩了！现在提竿！';}
  else if(this.phase==='bite'&&this.elapsed>3.5)this.escape('提竿晚了一点，鱼游走了。再抛一次吧。');
  else if(this.phase==='reel'){
   const d=this.fish.difficulty,pull=.06+d*.075+Math.sin(this.elapsed*2.4+d*6)*.04;
   this.tension=T.MathUtils.clamp(this.tension+dt*(this.held?.22+pull:-.4+pull),0,1);
   this.progress=T.MathUtils.clamp(this.progress+dt*(this.held&&this.tension>.12&&this.tension<.92?.17-d*.038:-.012),0,1);
   this.danger=this.tension>.93?this.danger+dt:Math.max(0,this.danger-dt*2);this.slack=this.tension<.04?this.slack+dt:0;
   if(this.danger>1.25)this.escape('鱼线绷得太紧了，鱼挣脱了。下次记得松开一下。');
   else if(this.slack>3.5)this.escape('鱼线松得太久，鱼脱钩了。');
   else if(this.elapsed>60)this.escape('这条鱼很有耐心，先歇一会儿再来吧。');
   else if(this.progress>=1){
    const size=Math.round(this.fish.size[0]+this.rng()*(this.fish.size[1]-this.fish.size[0]));this.catch={fish:this.fish,size,value:Math.round(this.fish.price*(.8+size/this.fish.size[1]*.5))};
    const old=this.collection.get(this.fish.id)||{count:0,best:0};this.collection.set(this.fish.id,{count:old.count+1,best:Math.max(old.best,size)});this.phase='caught';this.held=false;this.message=`钓到了${this.fish.name}！${size} 厘米 · ${this.fish.rarity}`;
   }
  }
 }
 settle(sell=false){if(!this.catch)return 0;const coins=sell?this.catch.value:0;this.catch=null;this.phase='idle';this.message=sell?`鱼获换到了 ${coins} 金币。`:'鱼儿回到海里，鱼获手册已经记下了这次相遇。';return coins;}
}
export function makeFish(parent,fish){
 const g=group(parent),shape=fish.shape,slim=['slim','ribbon','tuna'].includes(shape),sx=shape==='ribbon'?1.1:shape==='puffer'?.36:.65,sy=shape==='flat'?.075:slim?.17:shape==='puffer'?.33:.31,sz=shape==='flat'?.39:shape==='puffer'?.29:.2;
 sphere(g,0,0,0,sx,sy,sz,fish.color);sphere(g,-sx*.33,-sy*.32,sz*.28,sx*.66,sy*.52,sz*.74,'#dce0c9');
 const tail=mesh(g,new T.ConeGeometry(sy*1.25,.4,3),material(fish.color),sx+.12,0,0);tail.rotation.z=-Math.PI/2;tail.scale.z=.22;
 const fin=mesh(g,new T.ConeGeometry(.18,.26,3),material('#a9b8ac'),.1,sy*.9,0);fin.scale.z=.17;fin.rotation.z=-.4;
 for(const side of [-1,1]){sphere(g,-sx*.61,sy*.27,side*sz*.77,.047,.051,.029,'#e3dfc6');sphere(g,-sx*.63,sy*.27,side*(sz*.77+.025),.024,.031,.01,'#384c51');const f=mesh(g,new T.ConeGeometry(shape==='flying'?.5:.16,.35,3),material('#b7c4b5'),0,-sy*.15,side*sz);f.rotation.x=side*Math.PI/2;f.rotation.z=-.5;f.scale.z=.18;}
 if(['spotted','puffer'].includes(shape))for(let i=0;i<18;i++){const x=(i%6-2.5)*sx*.23,y=(Math.floor(i/6)-1)*sy*.4;for(const side of [-1,1])sphere(g,x,y,side*sz*.94,.024,.025,.01,'#78857a');}
 else for(let i=0;i<6;i++){const x=-sx*.25+i*sx*.16;beam(g,[x,sy*.7,sz*.55],[x+.055,-sy*.15,sz*.91],.007,'#819c9e');}
 compact(g);return g;
}
export function createFishingRig(parent){
 const root=group(parent);root.visible=false;const pole=group(root,0,.75,.3);beam(pole,[0,0,0],[0,1.28,2.4],.019,'#987c55');cylinder(pole,0,-.11,0,.029,.031,.45,'#706350',10);
 const float=group(root);sphere(float,0,0,0,.063,.12,.063,'#cc876e');sphere(float,0,.075,0,.064,.046,.063,'#eadac0');
 const lineGeo=new T.BufferGeometry();lineGeo.setAttribute('position',new T.BufferAttribute(new Float32Array(9),3));const line=new T.Line(lineGeo,new T.LineBasicMaterial({color:'#e7e5cc',transparent:true,opacity:.85}));root.add(line);line.frustumCulled=false;
 const rings=[];for(let i=0;i<3;i++){const r=new T.Mesh(new T.RingGeometry(.17,.184,40),new T.MeshBasicMaterial({color:'#e1efdf',transparent:true,opacity:.4,side:T.DoubleSide,depthWrite:false}));r.rotation.x=-Math.PI/2;root.add(r);rings.push(r);}
 const player=resident(root,{name:'旅行中的你',female:true,color:'#bd9578',hair:'#6d5348'});player.position.set(-.13,0,0);player.rotation.y=0;poseFishing(player);
 return {root,pole,float,line,rings,player,specimen:null,specimenId:null};
}
export function animateFishingRig(rig,game,time){
 if(!rig.root.visible)return;animateResident(rig.player,time,false,.25);poseFishing(rig.player,time);const spot=fishingSpots[game.spot];rig.root.position.set(spot.x,.12,spot.z);rig.root.rotation.y=spot.angle;
 const active=['casting','waiting','bite','reel'].includes(game.phase);rig.float.visible=active;rig.line.visible=active;rig.rings.forEach(r=>r.visible=active);rig.pole.rotation.x=game.phase==='reel'?-.13+Math.sin(time*9)*.04:game.phase==='casting'?Math.sin(game.elapsed/.85*Math.PI)*.5:0;
 const z=game.phase==='casting'?1.2+game.elapsed/.85*2.1:game.phase==='reel'?3.3-game.progress*1.5:3.3,y=game.phase==='bite'?-1.22:-1.12+Math.sin(time*2.4)*.04;
 rig.float.position.set(.05+Math.sin(time*3)*.027,y,z);rig.pole.updateMatrix();const tip=new T.Vector3(0,1.28,2.4).applyMatrix4(rig.pole.matrix),a=rig.line.geometry.attributes.position.array;a.set([...tip.toArray(),.025,.4,2.95,...rig.float.position.toArray()]);rig.line.geometry.attributes.position.needsUpdate=true;
 rig.rings.forEach((r,i)=>{const f=(time*.6+i*.33)%1;r.position.set(.05,-1.18,z);r.scale.setScalar(1+f*3);r.material.opacity=(1-f)*.35;});
 if(game.catch){if(rig.specimenId!==game.catch.fish.id){if(rig.specimen){rig.specimen.removeFromParent();disposeModel(rig.specimen);}rig.specimen=makeFish(rig.root,game.catch.fish);rig.specimenId=game.catch.fish.id;}rig.specimen.visible=true;rig.specimen.position.set(0,1.7+Math.sin(time*2)*.06,1);rig.specimen.rotation.y=time*.55;rig.specimen.rotation.z=Math.sin(time*3)*.1;}
 else if(rig.specimen)rig.specimen.visible=false;
}
