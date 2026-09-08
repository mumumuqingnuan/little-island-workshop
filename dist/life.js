import * as T from './vendor/three.module.min.js';
import {material,seasonal,compact} from './models.js?v=8';
import {softParticles} from './surfaces.js?v=8';
import {resident,animateResident,poseFishing} from './residents.js?v=8';
const cube=new T.BoxGeometry(1,1,1),ball=new T.SphereGeometry(1,10,7);
function mesh(p,g,c,x=0,y=0,z=0,sx=1,sy=1,sz=1){const m=new T.Mesh(g,typeof c==='string'?material(c):c);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;m.receiveShadow=true;p.add(m);return m}
function box(p,x,y,z,w,h,d,c){return mesh(p,cube,c,x,y+h*.5,z,w,h,d)}
function orb(p,x,y,z,xs,ys,zs,c){return mesh(p,ball,c,x,y,z,xs,ys,zs)}
function rod(p,a,b,r,c){const dir=new T.Vector3(...b).sub(new T.Vector3(...a)),m=mesh(p,new T.CylinderGeometry(r,r,dir.length(),7),c);m.position.copy(new T.Vector3(...a).addScaledVector(dir,.5));m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),dir.normalize());return m}
function group(p,x=0,y=0,z=0){const g=new T.Group();g.position.set(x,y,z);p.add(g);return g}
function cloth(p,x,y,z,w,h,color){const g=new T.PlaneGeometry(w,h,5,8);g.translate(0,-h/2,0);const mat=material(color,{side:T.DoubleSide});const m=mesh(p,g,mat,x,y,z);m.userData.cloth={base:g.attributes.position.array.slice(),height:h,seed:x*7+y*2};return m}
function lantern(p,x,y,z){const g=group(p,x,y,z);box(g,0,0,0,.055,.86,.055,'#676e60');orb(g,0,.98,0,.14,.2,.14,seasonal.glass);const top=mesh(g,new T.ConeGeometry(.21,.17,4),'#786f57',0,1.22,0);top.rotation.y=Math.PI/4;const l=new T.PointLight('#ffc886',0,3.3,2);l.position.y=1.04;g.add(l);g.userData.nightLight=l;return g}
function willow(p,x,z,size=1){
 const g=group(p,x,.08,z);g.scale.setScalar(size);rod(g,[0,0,0],[.13,2.13,.03],.095,seasonal.bark);rod(g,[.1,1.58,0],[-.57,2.34,.13],.05,seasonal.bark);rod(g,[.11,1.7,0],[.56,2.24,-.1],.05,seasonal.bark);
 const crown=orb(g,0,2.23,0,.88,.39,.8,seasonal.leaves);crown.userData.willowCrown=true;
 for(let i=0;i<13;i++){
  const a=i*Math.PI*2/13,branch=group(g,Math.cos(a)*.68,2.26+Math.sin(a*3)*.15,Math.sin(a)*.59);branch.userData.willow={phase:a*3,length:1.5};branch.rotation.y=-a;
  const points=[];for(let j=0;j<=9;j++)points.push(new T.Vector3(Math.sin(j*.2)*.17,-j*.18,Math.sin(j*.3)*.1));
  mesh(branch,new T.TubeGeometry(new T.CatmullRomCurve3(points),12,.013,4,false),'#91a06a');
  for(let j=1;j<10;j++)for(const side of [-1,1]){const leaf=orb(branch,Math.sin(j*.2)*.17+side*.085,-j*.18+.02,Math.sin(j*.3)*.1,.058,.17,.025,seasonal.leaves);leaf.rotation.z=side*.4;leaf.rotation.y=j*.4}
  compact(branch);
 }
 return g;
}
export function dressBuilding(model,type){
 if(type!=='house')return;
 // Protruding bay window, two cloth curtains, a swinging bell and its paper streamer.
 const bay=group(model,-.45,.55,.76);box(bay,0,0,0,.49,.48,.24,'#d6bb91');box(bay,0,.06,.13,.4,.35,.026,seasonal.glass);box(bay,0,.03,.17,.48,.04,.17,'#eadcba');box(bay,0,.44,.04,.55,.06,.33,'#a58c65');
 cloth(bay,-.11,.46,.18,.17,.43,'#f1e5c9');cloth(bay,.11,.46,.18,.17,.43,'#e9dcb8');
 const bell=group(model,.8,1.19,.86);bell.userData.chime=true;rod(bell,[0,0,0],[0,-.19,0],.011,'#977f50');mesh(bell,new T.SphereGeometry(.095,10,6,0,Math.PI*2,0,Math.PI/2),material('#a8c5bd',{metalness:.2,roughness:.45}),0,-.24,0);rod(bell,[0,-.22,0],[0,-.42,0],.009,'#907f5c');cloth(bell,0,-.4,0,.09,.27,'#c4ad77');
}
function stall(p,x,z,color,kind){
 const g=group(p,x,.09,z);box(g,0,0,0,1.3,.62,.72,'#a68a64');for(const s of [-1,1])for(const q of [-1,1])box(g,s*.64,.6,q*.37,.055,.92,.055,'#8b7658');
 for(let i=0;i<8;i++){const m=box(g,-.76+i*.21,1.5,0,.21,.06,1.12,i%2?'#f0e5ca':color);m.rotation.x=.09;cloth(g,-.76+i*.21,1.52,.58,.21,.22,i%2?'#f0e5ca':color)}
 box(g,0,.59,.44,1.5,.1,.31,'#c5a675');
 for(let i=0;i<9;i++){const x=(i%3-1)*.34,z=(Math.floor(i/3)-1)*.16;if(kind==='fruit'){orb(g,x,.78,z,.12,.1,.1,i%3?'#d9ae62':'#b46f5a');orb(g,x,.89,z,.03,.04,.025,'#7e9156')}else{mesh(g,new T.CylinderGeometry(.11,.09,.23,8),'#bfa886',x,.8,z);for(let j=0;j<3;j++)orb(g,x+Math.sin(j*2)*.08,1.02,z+Math.cos(j*2)*.06,.07,.1,.07,seasonal.flower)}}
 compact(g);return g;
}
function human(p,name,color,role='walk'){
 const g=resident(p,{name,color,role,female:role==='merchant'||role==='astronomer',child:role==='child',hair:role==='astronomer'?'#705761':'#675448'});g.userData.actor={name,role,kind:'human',reactUntil:0};return g;
}
function cat(p){
 const g=group(p);g.userData.actor={name:'三花猫',role:'cat',kind:'animal',reactUntil:0};
 orb(g,0,.3,0,.2,.22,.39,'#efe8d5');orb(g,-.09,.44,-.03,.16,.08,.2,'#bd8154');orb(g,.13,.37,-.15,.1,.12,.12,'#65564a');
 const head=group(g,0,.45,.32);orb(head,0,0,0,.22,.22,.18,'#f0e7d0');orb(head,-.1,.08,.07,.12,.14,.11,'#c58e5c');
 for(const s of [-1,1]){const ear=mesh(head,new T.ConeGeometry(.1,.22,3),s>0?'#5f554c':'#bd885c',s*.15,.2,0);ear.rotation.z=-s*.16;orb(head,s*.08,.03,.158,.037,.05,.018,'#689177');orb(head,s*.08,.03,.175,.01,.03,.009,'#26372e');}
 orb(head,0,-.06,.18,.025,.018,.02,'#b77b77');
 const legs=[];for(const x of [-.12,.12])for(const z of [-.22,.22]){const leg=group(g,x,.22,z);box(leg,0,-.16,0,.09,.17,.1,'#eee4d0');legs.push(leg)}
 const tail=group(g,0,.36,-.29);const curve=new T.CatmullRomCurve3([new T.Vector3(0,0,0),new T.Vector3(0,.23,-.2),new T.Vector3(.1,.5,-.23),new T.Vector3(.16,.58,-.12)]);mesh(tail,new T.TubeGeometry(curve,10,.046,7,false),'#af7d54');g.userData.tail=tail;g.userData.legs=legs;g.scale.setScalar(1.13);return g;
}
function duck(p,baby=false){const g=group(p);g.userData.actor={name:baby?'小鸭子':'白鸭',role:'duck',kind:'animal',reactUntil:0};orb(g,0,.17,0,.2,.18,.32,baby?'#e4c577':'#f0e9d4');orb(g,0,.4,.17,.14,.17,.14,baby?'#e4c577':'#f0e9d4');box(g,0,.32,.32,.15,.06,.17,'#c78d50');for(const s of [-1,1])orb(g,s*.098,.43,.26,.018,.022,.012,'#4b5241');const wing=orb(g,.18,.22,0,.055,.13,.23,baby?'#dcc075':'#dddcc8');g.userData.wing=wing;if(baby)g.scale.setScalar(.67);return g}
function turtle(p){const g=group(p);g.userData.actor={name:'池塘小龟',role:'turtle',kind:'animal',reactUntil:0};orb(g,0,.2,0,.27,.21,.36,'#82936b');for(const s of [-1,1])for(const z of [-.21,.21])orb(g,s*.23,.08,z,.14,.07,.09,'#a5ac7d');const head=group(g,0,.12,.38);orb(head,0,0,0,.11,.1,.17,'#aab481');for(const s of [-1,1])orb(head,s*.065,.03,.12,.018,.025,.012,'#364b35');g.userData.head=head;for(let j=0;j<3;j++)box(g,0,.38-j*.015,(j-1)*.17,.15,.018,.035,'#acb086');return g}
function bird(p,i){const g=group(p);orb(g,0,0,0,.06,.055,.18,'#f4efdb');const wings=[];for(const s of [-1,1]){const wing=group(g,s*.045,.02,0);const sh=new T.Shape();sh.moveTo(0,0);sh.lineTo(s*.43,-.08);sh.lineTo(s*.25,.12);sh.closePath();const geo=new T.ShapeGeometry(sh);geo.rotateX(-Math.PI/2);mesh(wing,geo,material('#e4e7da',{side:T.DoubleSide}));wings.push(wing)}g.userData.wings=wings;g.userData.seed=i;return g}

export function createLife(scene){
 const root=new T.Group();scene.add(root);const scenery=group(root),actors=[],birds=[],willows=[];
 willows.push(willow(scenery,5.7,-1.1,1.22),willow(scenery,2.15,-4.55,1.12));
 stall(scenery,-5.5,2.15,'#bf9274','fruit');stall(scenery,-4.05,4.14,'#8dabb0','flowers');
 for(const [x,z] of [[-6.23,1.6],[-3.43,4.35]])box(scenery,x,.1,z,.06,2.2,.06,'#967b56');
 const bunting=group(scenery,-6.23,2.14,1.6);bunting.rotation.y=-.77;
 rod(bunting,[0,0,0],[3.9,0,0],.014,'#917955');for(let i=0;i<11;i++){const sh=new T.Shape();sh.moveTo(-.12,0);sh.lineTo(.12,0);sh.lineTo(0,-.32);sh.closePath();const m=mesh(bunting,new T.ShapeGeometry(sh),material(['#bb8777','#e3c37f','#8aa5a7'][i%3],{side:T.DoubleSide}),.2+i*.35,-Math.sin(i/10*Math.PI)*.13,0);m.userData.pennant=i}
 // Laundry adds broad, unmistakable cloth movement beside the market.
 const laundry=group(scenery,-5.6,.08,3.6);laundry.rotation.y=.4;for(const x of [-.55,.55])box(laundry,x,0,0,.035,1.45,.035,'#a58c63');rod(laundry,[-.56,1.38,0],[.56,1.38,0],.012,'#8c825c');cloth(laundry,-.22,1.36,0,.43,.7,'#e8dac0');cloth(laundry,.26,1.36,0,.36,.55,'#a6bec1');
 // A raised lookout, a telescope, picnic blanket and warm lamps.
 const lookout=group(scenery,.3,.1,5);mesh(lookout,new T.CylinderGeometry(1.03,1.2,.25,24),'#c5ba9c',0,.125,0);for(let i=0;i<4;i++)box(lookout,0,.01+i*.045,-1.08-i*.08,.74,.05,.22,'#d0c5a7');
 const telescope=group(lookout,.2,.26,.17);for(let i=0;i<3;i++){const a=i*Math.PI/1.5;rod(telescope,[0,.65,0],[Math.cos(a)*.38,0,Math.sin(a)*.38],.034,'#8d8262')}rod(telescope,[-.24,.71,-.19],[.34,1.05,.35],.115,'#b59f6e');orb(telescope,.36,1.06,.37,.12,.12,.03,'#78949d');
 box(scenery,1.5,.1,4.7,.8,.025,.72,'#b9a18c');for(let i=0;i<4;i++)box(scenery,1.5,.13,4.43+i*.16,.8,.008,.04,'#ece0c0');orb(scenery,1.63,.29,4.62,.17,.17,.14,'#ad8b61');
 for(const [x,z] of [[-5,1.1],[-3.24,4.5],[-.7,5.1],[1.4,5.4],[4.9,-.45]])lantern(scenery,x,.08,z);
 const pier=group(scenery,4.9,.12,-3.78);for(let j=0;j<7;j++)box(pier,0,0,-.45+j*.14,.7,.055,.12,'#b89a6a');
 const merchant=human(root,'卖水果的阿姨','#a78570','merchant');merchant.position.set(-5.57,.09,2.89);merchant.rotation.y=.35;actors.push(merchant);
 const walker=human(root,'散步的小镇居民','#879bb1','walk');actors.push(walker);
 const kid=human(root,'追猫的小朋友','#c0a075','child');actors.push(kid);
 const fisher=human(root,'柳岸钓客','#85a18e','fish');fisher.position.set(4.9,.17,-3.79);fisher.rotation.y=0;const fishingRod=group(fisher,.16,.74,.29);rod(fishingRod,[0,0,0],[0,.64,1.4],.013,'#8d7454');rod(fishingRod,[0,.64,1.4],[0,-.55,1.7],.004,'#cad1bf');actors.push(fisher);
 const astronomer=human(root,'观星的人','#9b8eaf','astronomer');astronomer.position.set(-.24,.37,4.83);astronomer.rotation.y=.9;actors.push(astronomer);
 const c=cat(root);actors.push(c);const mama=duck(root),baby=duck(root,true),t=turtle(root);actors.push(mama,baby,t);t.position.set(5.43,.11,-2.1);
 for(let i=0;i<5;i++)birds.push(bird(root,i));
 const fireflyPositions=new Float32Array(50*3),fg=new T.BufferGeometry();fg.setAttribute('position',new T.BufferAttribute(fireflyPositions,3));const fireflies=new T.Points(fg,softParticles('#e5df98',5,0,true));root.add(fireflies);fireflies.frustumCulled=false;
 const moving=[];root.traverse(o=>{if(o.userData.cloth||o.userData.willow||o.userData.chime||o.userData.pennant!==undefined)moving.push(o)});
 return {root,actors,birds,moving,willows,fireflies,fireflyPositions};
}
export function animateCloth(root,time,wind){
 root.traverse(o=>{
  if(o.userData.cloth){const d=o.userData.cloth,a=o.geometry.attributes.position.array;for(let i=0;i<a.length;i+=3){const f=-d.base[i+1]/d.height;a[i]=d.base[i]+Math.sin(time*2.2+d.seed+f*3)*wind*.055*f;a[i+2]=d.base[i+2]+Math.sin(time*3+d.seed+f*4)*(.018+wind*.17)*f}o.geometry.attributes.position.needsUpdate=true;o.geometry.computeVertexNormals()}
  if(o.userData.chime)o.rotation.z=Math.sin(time*3.7)*(.035+wind*.35);
  if(o.userData.willow){const a=o.userData.willow.phase;o.rotation.z=.08+Math.sin(time*1.7+a)*(.05+wind*.19);o.rotation.x=Math.cos(time*1.5+a*.5)*(.04+wind*.17)}
  if(o.userData.pennant!==undefined){o.rotation.x=Math.sin(time*4+o.userData.pennant*.5)*(.15+wind*.75);o.rotation.z=Math.cos(time*3.5+o.userData.pennant)*.12}
 });
}
export function animateLife(life,time,wind,night,weather){
 animateCloth(life.root,time,wind);const a=life.actors;
 const walker=a[1],kid=a[2],cat=a[5],mother=a[6],baby=a[7],turtle=a[8];
 walker.position.set(Math.sin(time*.13)*4.3,.08,1.03);walker.rotation.y=Math.cos(time*.13)>0?Math.PI/2:-Math.PI/2;
 cat.position.set(-2.2+Math.sin(time*.26)*1.5,.12,1.08+Math.sin(time*.39)*.4);cat.rotation.y=Math.atan2(Math.cos(time*.26)*.39,Math.cos(time*.39)*.156);cat.userData.tail.rotation.z=Math.sin(time*2)*.27;
 kid.position.set(cat.position.x-.75,.08,cat.position.z+.16);kid.rotation.y=cat.rotation.y;
 const swim=time*.27;mother.position.set(4.75+Math.sin(swim)*.63,.15+Math.sin(time*2)*.02,-2.58+Math.cos(swim)*.47);mother.rotation.y=Math.atan2(Math.cos(swim)*.63,-Math.sin(swim)*.47);baby.position.set(4.75+Math.sin(swim-.65)*.63,.15,-2.58+Math.cos(swim-.65)*.47);baby.rotation.y=Math.atan2(Math.cos(swim-.65)*.63,-Math.sin(swim-.65)*.47);
 turtle.rotation.y=-.2+Math.sin(time*.15)*.3;turtle.position.y=.11+Math.sin(time*.7)*.008;
 for(let i=0;i<a.length;i++){const actor=a[i],role=actor.userData.actor.role,react=actor.userData.actor.reactUntil>time,walking=['walk','child','cat'].includes(role);if(actor.userData.character){animateResident(actor,time,walking,wind);if(role==='fish'&&!react)poseFishing(actor,time);continue;}if(actor.userData.legs)actor.userData.legs.forEach((leg,j)=>leg.rotation.x=walking?Math.sin(time*(role==='cat'?8:5)+j*Math.PI)*.4:0);if(actor.userData.arms)actor.userData.arms.forEach((arm,j)=>{arm.rotation.x=walking?Math.sin(time*5+j*Math.PI)*.35:Math.sin(time*1.3+i)*.06;if(react&&j===0){arm.rotation.z=-1.7;arm.rotation.x=Math.sin(time*9)*.4}else arm.rotation.z=0});if(react&&role==='cat')actor.position.y+=Math.abs(Math.sin(time*6))*.2;if(actor.userData.wing)actor.userData.wing.rotation.z=react?Math.sin(time*10)*.55:0;if(role==='turtle'&&actor.userData.head)actor.userData.head.position.z=.38+(react?.07+Math.sin(time*3)*.025:0);}
 for(let i=0;i<life.birds.length;i++){const b=life.birds[i],t=time*.24+i*.6;b.position.set(Math.sin(t)*5.2,3.8+Math.sin(t*.6+i)*.4,Math.cos(t)*3.8);b.rotation.y=Math.atan2(Math.cos(t)*5.2,-Math.sin(t)*3.8);b.userData.wings.forEach((w,j)=>w.rotation.z=Math.sin(time*7+i)*(j===0?-1:1)*.55);b.visible=night<.8&&weather!=='rain'}
 life.root.traverse(o=>{if(o.userData.nightLight)o.userData.nightLight.intensity=night*2.5});
 life.fireflies.material.opacity=night*(weather==='rain'?.05:.8);for(let i=0;i<50;i++){const p=life.fireflyPositions;p[i*3]=3.7+Math.sin(i*2.4+time*.2)*2;p[i*3+1]=.5+(Math.sin(i*3+time*.8)+1)*.5;p[i*3+2]=-2.6+Math.cos(i*1.8+time*.18)*1.5}life.fireflies.geometry.attributes.position.needsUpdate=true;
}
export function reactTo(actor,time){const a=actor.userData.actor;a.reactUntil=time+2.8;const phrases={cat:'三花猫蹭了蹭你的手。',duck:'鸭子抖抖翅膀，继续在池塘里游泳。',turtle:'小龟伸长脖子看了看你。',merchant:'刚摘的水果！要在小镇多逛一会儿吗？',walk:'沿着石板路走，就能找到柳树和池塘。',child:'你也看到那只三花猫了吗？',fish:'嘘——鱼儿快要上钩了。',astronomer:'晴朗的夜里，偶尔能等到流星。'};return phrases[a.role]||'居民向你挥了挥手。'}
export {cloth,lantern,willow,stall,human};
