import * as T from './vendor/three.module.min.js';
import {material,seasonal,mesh,box,sphere,cylinder,cone,beam,group,roof,windowFrame,door,flowers,fence,tree,lamp,trimBox,compact,snow,animateModel,applySeason} from './models.js?v=9';
import {cloth,lantern,stall,animateCloth} from './life.js?v=9';
import {resident,animateResident,poseFishing,routePosition} from './residents.js?v=9';

export const places=[
 {id:'hall',name:'潮汐市政厅',kind:'hall',category:'钟楼广场',x:0,z:-10.5,scale:1.15,info:'钟楼、办事大厅、阅览区与办公桌。'},
 {id:'church',name:'圣风教堂',kind:'church',category:'钟楼广场',x:-7.5,z:-9.7,scale:1.08,info:'彩色花窗、长椅、管风琴与烛光礼拜堂。'},
 {id:'department',name:'海风百货店',kind:'department',category:'商业街',x:7.4,z:-8.4,scale:1.08,info:'日用品、服装、书籍和食品，陈列在不同货架。'},
 {id:'cafe',name:'橙花咖啡店',kind:'cafe',category:'商业街',x:10,z:-2.8,scale:1,info:'吧台咖啡机、甜点柜、靠窗座位与后厨。'},
 {id:'market',name:'朝市菜市场',kind:'market',category:'西街',x:-11,z:1.8,scale:1,info:'蔬菜、水果、鲜鱼与面包，每个摊位都能逛。'},
 {id:'home',name:'木棉家的小屋',kind:'home',category:'居民巷',x:-10.6,z:-4.4,scale:1,info:'客厅、卧室、厨房和浴室，朴素但生活用品齐全。'},
 {id:'family',name:'姐弟的蓝窗小屋',kind:'family',category:'居民巷',x:-9.2,z:6.6,scale:.95,info:'孩子们的床、玩具、书桌，还有一家人的餐桌。'},
 {id:'villa',name:'蔷薇海景庄园',kind:'villa',category:'东岸庭院',x:8.4,z:5.8,scale:1.12,info:'大客厅、钢琴、书房与带浴缸的套间。'},
 {id:'manor',name:'白鹭富商宅邸',kind:'villa',category:'东岸庭院',x:13,z:1.3,scale:.9,info:'大理石地面、雕花家具、餐厅与收藏室。'},
 {id:'oldroad',name:'苔石古道',kind:'road',category:'南坡',x:-6,z:10.1,info:'沿古道穿过石拱门，走向海岸。'},
 {id:'pier',name:'海风钓鱼码头',kind:'fishing',category:'海岸',x:2,z:16.8,spot:'pier',info:'和海边钓客一起抛竿。潮水里藏着许多鱼。'},
 {id:'beach',name:'月牙沙滩',kind:'fishing',category:'海岸',x:-9.8,z:13.4,spot:'beach',info:'浅滩鱼群与贝壳。适合轻松垂钓。'},
 {id:'rocks',name:'白浪礁岸',kind:'fishing',category:'海岸',x:14,z:10.2,spot:'rocks',info:'礁石下有个头更大的鱼，也更考验收线。'}
];
function facade(root,w,h,d,color){
 trimBox(root,0,.08,0,w+.3,.18,d+.3,'#b7aa91');box(root,0,.25,0,w,h,d,color);
 for(const x of [-w/2,w/2])for(const z of [-d/2,d/2])box(root,x,.25,z,.14,h,.14,'#e7d7b2');
 for(let y=.45;y<h;y+=1.15)box(root,0,y,d/2+.025,w,.1,.08,'#d2bda1');
 for(const side of [-1,1]){const g=group(root,side*w/2+.02,0,0);g.rotation.y=side*Math.PI/2;for(const z of [-d*.27,d*.27])windowFrame(g,z,.88,0,.57,.7);}
}
function frontWindows(p,w,h,d,rows=1){for(let j=0;j<rows;j++)for(const x of [-w*.32,w*.32]){windowFrame(p,x,.75+j*1.25,d/2+.05,.6,.75);flowers(p,x,.54+j*1.25,d/2+.18,.76);}}
function dial(p,x,y,z,r=.43){
 const m=mesh(p,new T.CircleGeometry(r,32),'#f4eac9',x,y,z);for(let i=0;i<12;i++){const a=i*Math.PI/6;const t=box(p,x+Math.sin(a)*r*.79,y+Math.cos(a)*r*.79-.025,z+.025,.024,.05,.02,'#736a55');t.rotation.z=-a;}
 box(p,x,y-.03,z+.04,.03,r*.62,.025,'#5c655c');const hand=box(p,x+.12,y-.012,z+.04,r*.55,.028,.028,'#5c655c');hand.rotation.z=-.3;
}
function civic(p,kind){
 const church=kind==='church',w=church?3.0:3.8,h=church?2.7:2.9,d=church?3.6:2.65;
 facade(p,w,h,d,church?'#e3d2b3':'#eddfc3');roof(p,0,h+.25,0,w+.45,church?1.1:.7,d+.4,'#708f8f');
 if(church){
  const rose=group(p,0,2.23,d/2+.073);const ring=mesh(rose,new T.TorusGeometry(.49,.073,8,32),'#c9b689');sphere(rose,0,0,.03,.16,.16,.025,seasonal.glass);
  for(let i=0;i<8;i++){const a=i*Math.PI/4;const petal=sphere(rose,Math.cos(a)*.31,Math.sin(a)*.31,.024,.15,.15,.034,['#749eb7','#be999e','#d8bd7c'][i%3]);}
  door(p,0,.25,d/2+.12,1.05);for(const x of [-.34,.34])box(p,x,.25,d/2+.12,.12,1.19,.14,'#bcac91');
  const t=group(p,-1.27,.25,-.92);cylinder(t,0,0,0,.46,.52,4.0,'#e1d1b2',8);cylinder(t,0,3.5,0,.6,.6,.12,'#baa784',8);cone(t,0,4,0,.72,1.4,'#63868a',8);snow(cone(t,0,4.05,0,.7,1.37,seasonal.snow,8));box(t,0,5.25,0,.055,.55,.055,'#c5ad67');box(t,0,5.54,0,.32,.05,.055,'#c5ad67');
  for(const x of [-1.15,1.15]){windowFrame(p,x,1.36,d/2+.08,.32,.95);flowers(p,x,.24,d/2+.4,.66);}
 }else{
  for(const x of [-1.1,-.56,.56,1.1])cylinder(p,x,.25,d/2+.42,.09,.12,1.7,'#f0e5ca',12);
  box(p,0,1.96,d/2+.4,2.7,.16,.96,'#decba7');roof(p,0,2.12,d/2+.4,2.84,.51,1.05,'#869887');door(p,0,.28,d/2+.1,1.15);frontWindows(p,w,h,d,2);
  const t=group(p,0,3.13,-.3);box(t,0,0,0,1.03,1.4,1.03,'#e5d3ad');dial(t,0,.8,.53,.37);roof(t,0,1.4,0,1.34,.75,1.35,'#5e8388');sphere(t,0,2.28,0,.07,.12,.07,'#d1b26a');
 }
 for(let i=0;i<4;i++)box(p,0,.03+i*.058,d/2+.9-i*.16,1.6,.07,.32,'#d0c3a6');
}
function house(p,kind){
 const wealthy=kind==='villa',w=wealthy?3.1:2.35,h=wealthy?2.6:1.6,d=wealthy?2.5:2.05;
 facade(p,w,h,d,wealthy?'#eedfc4':'#e7d5b6');roof(p,0,h+.25,0,w+.4,.94,d+.4,wealthy?'#739193':kind==='family'?'#70969d':'#b96953');frontWindows(p,w,h,d,wealthy?2:1);door(p,0,.27,d/2+.07,.98);
 if(wealthy){
  const tower=group(p,-1.42,.2,-.72);cylinder(tower,0,0,0,.57,.63,3.8,'#e6d5b6',8);cone(tower,0,3.8,0,.78,1.14,'#65858a',8);snow(cone(tower,0,3.85,0,.76,1.11,seasonal.snow,8));sphere(tower,0,4.99,0,.08,.12,.08,'#c3aa69');
  box(p,0,1.54,d/2+.43,2.45,.14,.8,'#d5bf9a');fence(p,0,1.7,d/2+.82,2.45);for(const x of [-1.12,1.12])cylinder(p,x,.2,d/2+.62,.08,.105,1.4,'#e2cfa6');
  for(const side of [-1,1]){const hedge=box(p,side*2.02,.13,.7,.33,.37,3.5,seasonal.leaves);flowers(p,side*1.62,.18,2.1,.85);}
  fence(p,-1.1,.17,2.55,1.8,'#dad0b0');fence(p,1.1,.17,2.55,1.8,'#dad0b0');
 }else{
  cloth(p,-.75,1.51,d/2+.12,.25,.55,'#ecdec2');cloth(p,.75,1.51,d/2+.12,.25,.55,'#a6bec1');
  box(p,-.65,2.21,-.48,.25,.65,.28,'#c7b59d');box(p,-.65,2.84,-.48,.33,.1,.34,'#a68d77');
  for(const x of [-1.25,1.25])fence(p,x,.12,1.75,.82);flowers(p,.93,.13,1.58,.73);
  cylinder(p,-1.48,.15,.65,.27,.26,.54,'#a58761',12);for(const y of [.26,.56])cylinder(p,-1.48,y,.65,.278,.278,.04,'#727c72',12);
 }
}
function shop(p,kind){
 const department=kind==='department',w=department?3.7:2.95,h=department?3.4:1.93,d=2.5;
 facade(p,w,h,d,department?'#dedbc9':'#efdbb9');roof(p,0,h+.25,0,w+.36,.79,d+.4,department?'#6d9192':'#b58162');
 for(const x of [-w*.32,w*.32]){windowFrame(p,x,.5,1.3,.93,1.12);if(department)windowFrame(p,x,2.05,1.3,.79,.97);}
 door(p,0,.28,1.35,1.18);for(let i=0;i<12;i++){const aw=box(p,-w/2+(i+.5)*w/12,1.85,1.62,w/12,.065,.72,i%2?'#eee3c6':department?'#789997':'#b28367');aw.rotation.x=.09;cloth(p,-w/2+(i+.5)*w/12,1.85,1.99,w/12,.21,i%2?'#eee3c6':department?'#789997':'#b28367');}
 if(!department){for(const x of [-1.2,1.2]){cylinder(p,x,.17,2.35,.38,.38,.07,'#cdb596',18);cylinder(p,x,.1,2.35,.05,.07,.6,'#6d7769');cylinder(p,x,.7,2.35,.38,.38,.07,'#cdb596',18);for(const z of [1.96,2.79]){cylinder(p,x,.13,z,.2,.2,.08,'#ba9b77',12);box(p,x,.2,z,.05,.22,.06,'#708072');}cylinder(p,x,.78,2.35,.055,.045,.1,'#ede3cc',12);}}
}
function marketBuilding(p){
 for(const x of [-2.65,2.65])for(const z of [-1.45,1.45])cylinder(p,x,.1,z,.11,.14,2.45,'#9b805e',10);
 roof(p,0,2.52,0,5.75,1.03,3.55,'#939779');
 for(const [x,z,c,k] of [[-1.6,-.55,'#a6a86d','fruit'],[.1,-.55,'#b4876b','fruit'],[1.76,-.55,'#839fac','flowers']]){const s=stall(p,x,z,c,k);s.scale.setScalar(.88);}
 box(p,0,.1,0,5.7,.08,3.5,'#cdbfa0');
}
function road(root,points,width=1,color='#cfc2a4'){
 for(let j=0;j<points.length-1;j++){const a=points[j],b=points[j+1],dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz),n=Math.ceil(len/.44),angle=Math.atan2(dx,dz);for(let i=0;i<=n;i++)for(let k=0;k<2;k++){const f=i/n,off=(k-.5)*width*.5;const m=box(root,a[0]+dx*f+Math.cos(angle)*off,.055,a[1]+dz*f-Math.sin(angle)*off,width*.46,.05,.39,color);m.rotation.y=angle+Math.sin(i*5+j)*.018;}}
}
function makePier(p,x,z,angle=0,length=5){
 const g=group(p,x,.02,z);g.rotation.y=angle;
 for(let i=0;i<Math.ceil(length/.22);i++)box(g,0,0,i*.22,1.6,.12,.19,'#b99a6d');
 for(let i=0;i<=Math.floor(length/1.2);i++)for(const x of [-.84,.84]){box(g,x,-1.3,i*1.2,.14,1.78,.14,'#927d60');sphere(g,x,.48,i*1.2,.086,.06,.086,'#dbc9a0');if(i<length/1.2-1)beam(g,[x,.35,i*1.2],[x,.35,(i+1)*1.2],.024,'#b7a17a');}
 return g;
}
function fishingProps(root,x,z,angle=0){
 const g=group(root,x,.14,z);g.rotation.y=angle;const fisher=resident(g,{name:'海钓的林叔',color:'#79968c',role:'钓客',lines:['先等浮漂下沉，再提竿。收线时记得偶尔松手。','码头、沙滩和礁岸能遇到的鱼不同，夜里也可以试试。']});
 box(g,0,.08,-.04,.39,.07,.36,'#b69670');const rod=group(g,.16,.74,.29);beam(rod,[0,0,0],[0,.72,2.0],.016,'#907556');beam(rod,[0,.72,2],[0,-1.62,2.38],.004,'#dbe2d2');g.userData.fishingRod=rod;poseFishing(fisher);
 cylinder(g,-.6,.05,.3,.22,.18,.38,'#91a8a5',12);const bobber=sphere(g,.17,-.88,2.43,.055,.09,.055,'#c58b6f');g.userData.bobber=bobber;return {g,fisher};
}
export function createTown(parent){
 const root=group(parent),ground=group(root),buildings=[],npcs=[],fishers=[],boats=[],leaves=group(root);
 const pmap=new Map();
 for(const p of places){if(['road','fishing'].includes(p.kind))continue;const g=group(root,p.x,.03,p.z);g.scale.setScalar(p.scale||1);g.userData.place=p;
  if(['hall','church'].includes(p.kind))civic(g,p.kind);else if(['home','family','villa'].includes(p.kind))house(g,p.kind);else if(p.kind==='market')marketBuilding(g);else shop(g,p.kind);
  compact(g);buildings.push(g);pmap.set(p.id,g);
 }
 road(ground,[[-13,-6],[-10.5,-6],[-6,-6],[0,-6],[6,-6],[11,-6],[11,0],[9.1,2.7],[6,3.5]],1.2);
 road(ground,[[0,-9],[0,-6],[0,-4]],1.4);road(ground,[[-7.5,-8],[-7.5,-6]],1.2);road(ground,[[7.4,-6.7],[7.4,-6]],1.4);
 road(ground,[[-10.5,-6],[-10.5,-2.6],[-8.1,-1],[-8.1,5],[-9.2,8.3]],1.2);road(ground,[[-8.1,3.8],[-10.8,3.8]],1.3);
 road(ground,[[5.8,.7],[8.6,.7],[10,0],[12.5,3.4],[12.5,4.5],[8.4,8.8]],1.1);
 road(ground,[[-13,6],[-10,9],[-6,10.2],[-2,9],[2,10.7],[2,13.8]],1.05,'#bcb89b');
 road(ground,[[-8.1,5],[-10,9]],1);road(ground,[[-2,9],[0,6.1]],1);road(ground,[[8.4,8.8],[5.5,9.8],[2,10.7]],1.15);
 // Civic fountain and a planted town square.
 cylinder(ground,0,.08,-6.9,1.42,1.44,.12,'#c6b99c',40);cylinder(ground,0,.21,-6.9,.68,.76,.19,'#d9ceb1',24);cylinder(ground,0,.41,-6.9,.61,.61,.025,seasonal.water,30);cylinder(ground,0,.44,-6.9,.11,.15,.66,'#d9ceb1');cylinder(ground,0,1.1,-6.9,.37,.18,.07,'#e2d7ba');sphere(ground,0,1.28,-6.9,.1,.2,.1,seasonal.water);
 for(const [x,z] of [[-2.2,-7],[2.2,-7],[-6,-6],[-8.2,-2],[9,-6],[11,.3],[7,8],[2,11.8],[-10,8],[-4,9]])lamp(ground,x,z);
 for(const [x,z,s,k] of [[-13,-6,1.2,1],[-13.8,-4,1.3,0],[-12.9,4.8,1.2,0],[-15,3.1,1.2,2],[-14,7,1.1,1],[-11,10.6,1,0],[-7,12,1,0],[-4,12.2,1,2],[-5,-12,1.1,1],[-2.8,-12.8,1.4,0],[3.1,-12.5,1.1,2],[5.5,-12.1,1.2,0],[10.7,-10,1.15,1],[13,-7.3,1.2,0],[14.3,-4.5,1.1,2],[15.7,-.5,.95,1],[14.9,4.7,1.05,0],[11.5,7.6,1,1],[5.5,8,1,1],[5.7,11.9,.9,0]]){tree(leaves,x,z,s,k);}
 // Ancient archway, mossy stones and the small coastal steps.
 const beach=mesh(ground,new T.CircleGeometry(1,48),'#d8c798',-8.7,.052,12,2.4,1.15,1);beach.rotation.x=-Math.PI/2;beach.castShadow=false;
 for(let i=0;i<12;i++){const x=-8.7+Math.sin(i*2.4)*1.8,z=12+Math.cos(i*2.4)*.77;const shell=sphere(ground,x,.092,z,.067,.028,.047,i%3?'#eee3c6':'#c6b39b');shell.rotation.y=i*1.3;}
 const arch=group(ground,-6,.1,10.2);arch.rotation.y=Math.PI/2;for(const x of [-.85,.85]){box(arch,x,0,0,.42,1.8,.48,'#b5b49a');box(arch,x,1.63,0,.59,.17,.59,'#c7c5a8');sphere(arch,x-.09,.3,.23,.26,.15,.1,seasonal.leaves);}
 const arc=mesh(arch,new T.TorusGeometry(.85,.22,7,20,Math.PI),'#bfc0a2',0,1.77,0);for(let i=0;i<6;i++){const a=i*Math.PI/5;sphere(arch,Math.cos(a)*.95,1.85+Math.sin(a)*.95,.18,.19,.11,.09,seasonal.leaves);}
 makePier(ground,2,12.7,0,5.9);makePier(ground,-9.8,11.9,0,3.3);makePier(ground,13.2,8.9,.3,3.5);
 for(const [x,z,a] of [[2.47,16.2,0],[-9.4,13.65,-.2],[13.85,10.7,.3]]){const f=fishingProps(root,x,z,a);fishers.push(f.g);npcs.push(f.fisher);}
 // Boats rock in the water, beyond the end of the quay.
 for(let i=0;i<2;i++){const boat=group(root,4.9+i*4,-.77,17.8-i*2);sphere(boat,0,0,0,.72,.24,1.56,'#987554');box(boat,0,.05,0,1.1,.07,2.55,'#d6bd8d');beam(boat,[0,.1,0],[0,2.8,0],.036,'#9a805c');const sail=cloth(boat,.52,2.6,0,1.05,1.72,'#eee3c6');boat.rotation.y=.5+i;boat.userData.base=boat.position.clone();boats.push(boat);}
 const characters=[
  {name:'木棉',female:true,color:'#a66f77',role:'花店老板',x:-10.2,z:-2.6,path:[[-10.2,-2.6],[-8.1,-1],[-8.1,3.8],[-10.2,3.8]],lines:['家里的水壶刚烧开，欢迎进来坐坐。','古道旁的蔷薇，春天开得最好。']},
  {name:'小夏',female:true,child:true,color:'#c895a4',role:'小女孩',x:-9,z:8.3,path:[[-9,8.3],[-7.2,8.7],[-5,8.5],[-7.2,8.7]],lines:['我和弟弟的家是蓝窗户的那间！','你钓到新鱼了吗？我想看彩色的鱼。']},
  {name:'小树',child:true,color:'#91a9b4',role:'小男孩',x:-7.8,z:8.7,path:[[-8,8.7],[-5,8.5],[-7.2,8.7],[-9,8.3]],lines:['我在古道发现好多长着苔藓的石头。','鱼咬钩的时候，浮漂会沉下去！']},
  {name:'澄子',female:true,color:'#7c9b9b',hair:'#493d37',role:'咖啡店店员',x:9.8,z:.3,path:[[9.8,.3],[11,.3],[11,1.2],[9.8,1.2]],lines:['今天也有新烤的面包，进店来杯咖啡吗？','下雨的时候，听雨落在店外雨棚上很舒服。']},
  {name:'安娜',female:true,color:'#818bb0',role:'市政厅职员',x:-1.7,z:-7.4,path:[[-1.7,-7.4],[-2.4,-6],[2.4,-6],[1.6,-7.4]],lines:['办事大厅和阅览室都开放，门在正前方。','东边是商业街，沿南坡走会到码头。']},
  {name:'望海夫人',female:true,color:'#af956b',hair:'#655044',role:'庄园主人',x:7.6,z:9,path:[[7.6,9],[9.5,8.8],[10,9.4],[7.6,9.4]],lines:['请随意参观庄园，客厅里有一架老钢琴。','天晴时，从花园能看见远处的帆船。']},
  {name:'卖菜的秋姨',female:true,color:'#9ba577',role:'菜农',x:-11.9,z:3.5,lines:['青菜、萝卜、番茄，今天都很新鲜。','钓来的鱼可以换金币，去看看鱼获手册吧。']},
  {name:'悠奈',female:true,child:true,color:'#b39ac0',role:'小女孩',x:-5.7,z:-6.5,path:[[-5.7,-6.5],[-5,-7],[-4.6,-6.3],[-5,-6]],lines:['教堂里有彩色玻璃，阳光透进去可漂亮了。']},
  {name:'阿航',child:true,color:'#c3a778',role:'小男孩',x:3,z:12,path:[[3,12],[3,13],[1,13],[1,12]],lines:['林叔在码头钓鱼，你可以和他一起。']},
  {name:'书店的玲',female:true,color:'#7692aa',role:'百货店店员',x:7,z:-5.2,path:[[7,-5.2],[9,-5.2],[9,-4.7],[7,-4.7]],lines:['书、日用品和小点心都在百货店里。']}
 ];
 for(const [i,o] of characters.entries()){const g=resident(root,o);g.position.set(o.x,.09,o.z);g.userData.route=o.path;g.userData.speed=.25+(i%3)*.075;g.userData.phase=i*1.3;npcs.push(g);}
 compact(ground);for(const g of leaves.children)compact(g);
 return {root,buildings,npcs,fishers,boats,pmap,leaves};
}
export function animateTown(town,time,wind,night,season,weather){
 const dt=Math.min(.25,Math.max(0,time-(town.lastTime??time)));town.lastTime=time;animateCloth(town.root,time,wind);animateModel(town.leaves,time,wind,night);
 for(const npc of town.npcs){const path=npc.userData.route,react=npc.userData.resident.reactUntil>time;if(path&&!react){npc.userData.distance=(npc.userData.distance??npc.userData.phase)+dt*npc.userData.speed;const p=routePosition(path,npc.userData.distance);npc.position.set(p.x,.09,p.z);npc.rotation.y=p.angle;}animateResident(npc,time,!!path&&!react,wind);if(npc.userData.fishingSpot&&!react)poseFishing(npc,time);}
 for(const f of town.fishers){f.userData.fishingRod.rotation.x=Math.sin(time*.9)*.025;f.userData.bobber.position.y=-.88+Math.sin(time*2)*.045;}
 for(const [i,b] of town.boats.entries()){b.position.y=b.userData.base.y+Math.sin(time*.75+i)*.06;b.rotation.z=Math.sin(time*.6+i)*.035;}
}
