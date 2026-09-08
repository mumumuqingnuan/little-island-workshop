import * as T from './vendor/three.module.min.js';
import {material,seasonal,box,sphere,cylinder,beam,group,windowFrame,flowers,compact,mesh,disposeModel} from './models.js?v=7';
import {resident,animateResident} from './residents.js?v=7';
import {dressBed,dressCushion,textileMaterial} from './textiles.js?v=7';
import {contact} from './finesse.js?v=7';

// Walkable cutaway rooms. Furniture keeps separate hit targets and collision bounds.
export function createInterior(parent,place){
 const root=group(parent),shell=group(root),items=[],obstacles=[],npcs=[],animated=[];
 const rich=place.kind==='villa',wood=rich?'#a98a62':'#b99a6d',wall=rich?'#ede2c8':'#e5d8bc';
 const floor=new T.Mesh(new T.PlaneGeometry(10,8),material(rich?'#d8d4c4':'#bda17b'));floor.rotation.x=-Math.PI/2;floor.position.y=.035;floor.receiveShadow=true;floor.userData.floor=true;root.add(floor);
 box(shell,0,-.2,0,10.25,.22,8.25,'#877d66');box(shell,0,.03,-4,10.15,2.7,.14,wall);box(shell,-5,.03,0,.14,2.7,8,wall);box(shell,5,.03,0,.14,.32,8,wall);box(shell,0,.03,4,10.15,.22,.14,wall);
 for(const z of [-3.92,3.92])box(shell,0,.035,z,10,.12,.055,wood);box(shell,-4.92,.035,0,.055,.12,8,wood);
 for(let i=0;i<25;i++){box(shell,0,.038,-3.84+i*.32,9.9,.008,.009,'#987d5f');if(i%2===0)for(const x of [-3,0,3])box(shell,x+(i%4)*.25,.04,-3.7+i*.32,.01,.007,.29,'#a18865');}
 for(const x of [-3,0,3]){windowFrame(shell,x,1.28,-3.89,1.05,.99);for(const s of [-1,1])box(shell,x+s*.65,1.14,-3.83,.25,1.27,.08,rich?'#ad9290':'#bac4ac');box(shell,x,2.48,-3.82,1.7,.065,.1,'#a88c68');}
 const sunlight=new T.Mesh(new T.PlaneGeometry(3.1,2),new T.MeshBasicMaterial({color:'#ffedb8',transparent:true,opacity:.11,depthWrite:false}));sunlight.rotation.x=-Math.PI/2;sunlight.rotation.z=-.3;sunlight.position.set(-.7,.055,-1.9);root.add(sunlight);
 function obstacle(x,z,w,d){obstacles.push({x,z,w:w+.16,d:d+.16});}
 function item(label,text,x,z,w,d,make,action){const g=group(root,x,.055,z);g.userData.furniture={label,text,action,active:false};make(g);contact(g,0,.001,0,w*1.13,d*1.15);compact(g);items.push(g);obstacle(x,z,w,d);return g;}
 function stool(p,x,z){cylinder(p,x,.45,z,.23,.23,.075,wood,16);for(const s of [-1,1])for(const t of [-1,1])box(p,x+s*.14,.05,z+t*.14,.045,.4,.045,'#806d54');}
 function cup(p,x,y,z){cylinder(p,x,y,z,.073,.055,.12,'#f0e7d2',14);cylinder(p,x,y+.122,z,.054,.054,.007,'#675140',14);const h=mesh(p,new T.TorusGeometry(.045,.013,6,12),'#e3d8be',x+.078,y+.06,z);}
 function bowl(p,x,y,z,c='#e0d7bc'){cylinder(p,x,y,z,.16,.1,.11,c,16);sphere(p,x,y+.12,z,.12,.025,.12,'#a6b277');}
 function books(p,x,y,z,n=5){for(let i=0;i<n;i++){box(p,x+i*.1,y,z,.074,.24+(i%3)*.035,.18,['#80939f','#bb927d','#b7b47e','#9d91a6'][i%4]);box(p,x+i*.1,y+.06,z+.094,.057,.011,.008,'#ddcba5');}}
 function potted(p,x,y,z){cylinder(p,x,y,z,.15,.1,.21,'#b89774',12);for(let i=0;i<6;i++){const a=i*2.4;sphere(p,x+Math.sin(a)*.11,y+.28+(i%2)*.11,z+Math.cos(a)*.11,.085,.19,.055,seasonal.leaves);}}
 function table(x,z){item('餐桌','餐具、茶杯和刚摆好的面包，一家人会在这里吃饭。',x,z,1.7,1.1,p=>{box(p,0,.73,0,1.7,.11,1.1,wood);for(const s of [-1,1])for(const t of [-1,1])box(p,s*.66,.05,t*.4,.08,.68,.08,'#806d54');box(p,0,.85,0,.45,.009,1.08,textileMaterial('gingham'));for(const s of [-1,1]){bowl(p,s*.5,.85,0);cup(p,s*.55,.85,-.34);stool(p,s*1.12,0);}sphere(p,0,.96,0,.2,.07,.13,'#c29b64');});obstacle(x-1.1,z,.48,.5);obstacle(x+1.1,z,.48,.5);}
 function sofa(x,z,rich=false){return item('沙发与茶几','软垫、靠枕、茶杯和摊开的杂志。坐下来歇一会儿。',x,z,2.3,1.8,p=>{box(p,0,.18,-.3,2.13,.26,.81,'#927a63');box(p,0,.34,-.57,2.13,.62,.25,rich?'#879799':'#a8b297');for(const s of [-1,1]){box(p,s*.95,.36,-.22,.23,.44,.95,rich?'#879799':'#a8b297');dressCushion(p,s*.5,.65,-.32,rich?'damask':'gingham');}box(p,0,.3,.77,1.4,.075,.62,wood);for(const x of [-.54,.54])box(p,x,.03,.77,.07,.28,.4,'#8f795b');cup(p,.3,.385,.77);box(p,-.28,.385,.77,.43,.025,.32,'#d8ccb1');});}
 function bed(x,z,child=false){return item(child?'孩子的床':'卧床',child?'印着小星星的被子，床头放着故事书和小熊。':'铺好的棉被、两只枕头，床头有闹钟和读物。',x,z,child?1.2:1.85,2.0,p=>{const w=child?1.2:1.85;box(p,0,.13,0,w,.27,2,wood);box(p,0,.24,-.93,w,.76,.12,'#a98a62');box(p,0,.4,0,w-.1,.14,1.85,'#e8dfc9');dressBed(p,w,rich?'damask':child?'stars':'floral');if(child){sphere(p,.25,.72,-.73,.13,.15,.1,'#b18b5f');sphere(p,.25,.88,-.73,.105,.105,.09,'#b18b5f');for(const s of [-1,1])sphere(p,.25+s*.08,.96,-.74,.05,.05,.04,'#b18b5f');}else{box(p,1.14,.05,-.65,.37,.49,.43,wood);sphere(p,1.14,.66,-.65,.12,.12,.06,'#d8c494');}});}
 function shelf(x,z,label='书架',goods='books'){return item(label,goods==='books'?'书籍按类别排好，下层还有信纸和收纳篮。':'货架上整齐摆着日常用品，可以走近看看。',x,z,1.6,.43,p=>{box(p,0,.05,-.16,1.65,1.7,.1,wood);for(const x of [-.78,.78])box(p,x,.05,0,.07,1.76,.45,wood);for(let j=0;j<4;j++){box(p,0,.15+j*.45,0,1.65,.06,.46,wood);if(goods==='books')books(p,-.61,.23+j*.45,0,11);else for(let i=0;i<6;i++){const x=-.61+i*.24;box(p,x,.23+j*.45,0,.16,.24,.2,['#b3bda7','#d5c6ac','#bc9b8d','#a0b4ba'][i%4]);box(p,x,.29+j*.45,.106,.1,.07,.008,'#eee5cf');}}});}
 function cabinet(x,z,label='衣柜'){const content=label==='食品储物柜'?'柜里放着米面、罐头、茶叶和备用餐具。':label==='文件柜'?'文件夹、登记册和信件都按次序收好了。':'里面叠着衣物和干净毛巾。';const g=item(label,content,x,z,1.36,.62,p=>{box(p,0,.03,-.1,1.4,1.92,.43,wood);for(const y of [.16,.67,1.18])box(p,0,y,.09,1.24,.06,.5,'#c6af86');for(let i=0;i<3;i++){if(label==='食品储物柜')cylinder(p,-.32+i*.31,.75,.16,.09,.09,.23,'#b6b999',12);else box(p,-.32+i*.31,.79,.16,.26,.1,.22,'#dcd8ba');}});const hinge=group(g,-.67,0,.24);box(hinge,.66,.04,0,1.3,1.87,.075,'#bfa17a');sphere(hinge,1.17,.97,.066,.036,.036,.026,'#d4b66b');g.userData.furniture.action=()=>{g.userData.furniture.active=!g.userData.furniture.active;hinge.rotation.y=g.userData.furniture.active?-1.4:0;return g.userData.furniture.active?'柜门打开了，'+content:'柜门轻轻关好了。';};return g;}
 function kitchen(){
  item('灶台与锅具','灶台上有汤锅、平底锅，旁边是调味瓶和砧板。',-3.55,-3.13,2.35,.92,p=>{box(p,0,.08,0,2.3,.77,.87,wood);box(p,0,.85,0,2.43,.08,.97,'#cfc8af');for(const x of [-.62,.06]){cylinder(p,x,.94,0,.21,.21,.025,'#566061',20);cylinder(p,x,.97,0,.18,.14,.23,'#859a99',16);cylinder(p,x,1.2,0,.19,.19,.04,'#aebbb1',16);sphere(p,x,1.28,0,.05,.04,.05,'#626e69');}for(let i=0;i<3;i++)cylinder(p,.64+i*.16,.94,-.18,.05,.045,.18,['#ac8f61','#a0a673','#c2aa7e'][i],10);box(p,.74,.94,.17,.5,.028,.29,'#a89065');for(const x of [-.55,.55])box(p,x,.51,.45,.42,.055,.04,'#d4bc86');});
  const tap=item('洗菜池','转动水龙头，可以看到水流。',-.95,-3.15,1.28,.92,p=>{box(p,0,.08,0,1.26,.77,.86,wood);box(p,0,.85,0,1.38,.07,.96,'#d9d7c4');box(p,0,.923,0,.84,.022,.57,'#8aa8aa');beam(p,[0,.97,-.3],[0,1.31,-.3],.028,'#9daea6');beam(p,[0,1.31,-.3],[0,1.31,-.03],.028,'#9daea6');});const water=cylinder(tap,0,.94,-.03,.017,.029,.36,seasonal.water,8);water.visible=false;tap.userData.furniture.action=()=>{water.visible=!water.visible;return water.visible?'清水流进了水槽。再点一次可以关水。':'水龙头关好了。';};
  cabinet(-4.2,-1.75,'食品储物柜');
  item('冰箱','冷藏室里放着牛奶、鸡蛋、蔬菜和一篮水果。',.17,-3.3,.79,.8,p=>{box(p,0,.04,0,.78,1.64,.8,'#d5ded4');box(p,0,1.12,.416,.76,.03,.027,'#93a6a0');for(const y of [.73,1.38])box(p,-.22,y,.455,.045,.22,.042,'#94a49d');});
 }
 function bathroom(){
  box(shell,1.13,.04,-2.7,.1,1.28,2.55,'#cad4cb');obstacle(1.13,-2.7,.1,2.55);box(shell,3.05,.044,-2.75,3.7,.01,2.32,'#bfd0ca');
  item('浴缸与毛巾架','浴缸旁挂着干净毛巾，台面有皂盒和洗浴用品。',3.6,-3.02,1.94,.89,p=>{box(p,0,.08,0,1.96,.55,.9,'#eee8d9');box(p,0,.64,0,1.63,.028,.63,'#aac6c9');for(const x of [-.92,.92])box(p,x,.48,0,.13,.24,.97,'#f3ecdc');for(const z of [-.43,.43])box(p,0,.48,z,1.85,.24,.13,'#f3ecdc');beam(p,[-.66,.66,-.4],[-.66,.93,-.4],.025,'#a4b2aa');beam(p,[-.66,.93,-.4],[-.66,.93,-.16],.025,'#a4b2aa');box(p,.34,.78,-.51,.48,.03,.29,'#9fbaa9');});
  item('洗手台与镜子','牙刷、杯子、香皂、洗手液都放在洗手台旁。',2,-2.13,1,.68,p=>{box(p,0,.05,0,.9,.66,.6,'#c6c2ad');cylinder(p,0,.73,0,.39,.27,.12,'#eee6d3',20);box(p,0,1.05,-.29,.76,.77,.047,'#a2b9be');box(p,0,1.83,-.29,.85,.045,.07,wood);cup(p,-.32,.88,0);for(let i=0;i<3;i++)box(p,-.37+i*.04,.94,0,.015,.22,.016,['#9cae94','#bd9c8d','#8aaab7'][i]);cylinder(p,.33,.88,0,.058,.053,.18,'#9eb6a4');});
  item('坐便器','浴室里备有卷纸、清洁刷和带盖垃圾桶。',3.5,-1.7,.75,.86,p=>{cylinder(p,0,.09,.06,.25,.18,.39,'#e9e8d8',16);sphere(p,0,.49,.1,.32,.085,.38,'#f2efdf');box(p,0,.47,-.25,.55,.56,.2,'#eee8d7');cylinder(p,.47,.06,0,.13,.11,.3,'#a2b6ad',12);});
 }
 function lamp(x,z){const g=item('落地灯','一盏暖黄色的阅读灯。',x,z,.4,.4,p=>{cylinder(p,0,.04,0,.24,.24,.06,'#ad976c',16);cylinder(p,0,.1,0,.026,.035,1.45,'#a89265',10);cylinder(p,0,1.47,0,.22,.36,.44,'#e5d4a9',16);});const light=new T.PointLight('#ffd89b',5,5,2);light.position.set(0,1.47,0);g.add(light);g.userData.furniture.action=()=>{light.intensity=light.intensity?0:5;return light.intensity?'灯亮了，屋里多了一点暖意。':'阅读灯关好了。';};}
 function desk(x,z){item('书桌','墨水、信纸、铅笔、台历和一封未写完的信。',x,z,1.45,.75,p=>{box(p,0,.72,0,1.4,.1,.72,wood);for(const x of [-.56,.56])box(p,x,.05,0,.08,.67,.56,wood);box(p,-.28,.83,0,.44,.015,.31,'#f0e5c9');books(p,.15,.83,-.13,3);cylinder(p,.43,.83,.1,.066,.06,.1,'#8c9da0');stool(p,0,.65);});obstacle(x,z+.65,.5,.5);}
 function piano(x,z){const keys=[];const g=item('钢琴','琴盖开着，轻触琴键试试。',x,z,1.8,1.1,p=>{box(p,0,.05,-.15,1.8,1.1,.72,'#655447');box(p,0,.8,.43,1.76,.09,.48,'#5e5145');for(let i=0;i<18;i++){const key=box(p,-.79+i*.091,.91,.49,.082,.04,.31,'#ede6d1');key.userData.rotor=true;keys.push(key);if(i%7!==2&&i%7!==6)box(p,-.745+i*.091,.953,.4,.046,.035,.19,'#394447');}stool(p,0,1);});g.userData.furniture.action=()=>{try{const ac=new (globalThis.AudioContext||globalThis.webkitAudioContext)();[261.6,329.6,392,523.3].forEach((f,i)=>{const o=ac.createOscillator(),gain=ac.createGain();o.type='triangle';o.frequency.value=f;gain.gain.setValueAtTime(0,ac.currentTime+i*.18);gain.gain.linearRampToValueAtTime(.055,ac.currentTime+i*.18+.02);gain.gain.exponentialRampToValueAtTime(.001,ac.currentTime+i*.18+1);o.connect(gain);gain.connect(ac.destination);o.start(ac.currentTime+i*.18);o.stop(ac.currentTime+i*.18+1.1);});setTimeout(()=>ac.close(),2300);}catch{}return '指尖轻轻落在琴键上。';};obstacle(x,z+1,.5,.5);}
 function produce(x,z,label,type){item(label,type==='fish'?'冰台上有银色的小鱼和红色的鲷鱼。':type==='bread'?'新烤的圆面包、长面包和饼干。':'竹筐里装着新鲜蔬果，边上放着秤和纸袋。',x,z,1.85,1,p=>{box(p,0,.06,0,1.8,.66,.85,wood);box(p,0,.73,0,1.95,.08,.98,'#d4bb90');for(let i=0;i<12;i++){const xx=-.68+(i%4)*.45,zz=-.29+Math.floor(i/4)*.26;if(type==='fish'){sphere(p,xx,.88,zz,.17,.046,.072,i%2?'#97b2b5':'#c79487');const f=mesh(p,new T.ConeGeometry(.07,.13,3),'#819d9e',xx+.19,.88,zz);f.rotation.z=Math.PI/2;}else if(type==='bread')sphere(p,xx,.89,zz,.15,.087,.085,'#c59d66');else{sphere(p,xx,.9,zz,.12,.12,.105,['#9fae74','#c28561','#c49179','#b8ba83'][i%4]);sphere(p,xx,.99,zz,.032,.03,.032,seasonal.leaves);}}});}
 const kind=place.kind;
 if(['home','family','villa','house','mill','lighthouse'].includes(kind)){
  kitchen();bathroom();sofa(-2.75,1.66,rich);table(-1.6,-.73);lamp(rich?-.72:-4.25,rich?1.1:2.4);
  if(kind==='family'){bed(1.97,1.19,true);bed(3.79,1.19,true);desk(2.8,3.19);item('玩具篮','小熊、积木、木头小船，还有一颗弹力球。',.46,2.9,.56,.54,p=>{box(p,0,.02,0,.56,.26,.53,'#ba9f72');for(let i=0;i<6;i++)box(p,Math.sin(i*2)*.16,.29,Math.cos(i*2)*.16,.12,.12,.12,['#a9b881','#b98f7a','#7b9eae'][i%3]);sphere(p,0,.5,0,.12,.12,.12,'#9dad91');});}
  else{bed(3.05,1.1);cabinet(4.23,3.05);desk(.7,2.68);}
  shelf(-4.07,.24);if(rich){piano(-2.37,3.04);potted(shell,.8,.05,.32);}
 }else if(kind==='cafe'){
  item('咖啡吧台','手磨豆机、咖啡机、杯碟、牛奶壶，吧台后飘着咖啡香。',-2.6,-2.65,3.7,1.06,p=>{box(p,0,.07,0,3.7,.96,1.02,'#ac8a65');box(p,0,1.03,0,3.9,.09,1.13,'#d7c8a8');box(p,-.7,1.13,-.08,.85,.72,.53,'#8fa6a6');cylinder(p,-.7,1.85,-.08,.16,.14,.2,'#d1b98c',14);for(const x of [-.87,-.53])cup(p,x,1.14,.27);for(const x of [.27,.59,.91])cup(p,x,1.14,.12);box(p,1.43,1.14,0,.47,.06,.56,'#d3b487');sphere(p,1.43,1.28,0,.16,.11,.14,'#bb9970');},()=> '一杯热咖啡做好了，坐到窗边慢慢喝吧。');
  for(const [x,z] of [[-2.8,.2],[1.1,.15],[-2.8,2.7],[1.1,2.7]])table(x,z);
  produce(2.8,-2.68,'甜点展示柜','bread');shelf(3.85,.1,'杯碟架','goods');lamp(4.25,2.85);potted(shell,-4.5,.05,3.3);
  npcs.push(resident(root,{name:'澄子的姐姐',female:true,color:'#ad8d78',role:'咖啡师',lines:['咖啡已经磨好了，点吧台就能点一杯。']}));npcs[0].position.set(-2.4,.06,-3.6);
 }else if(kind==='department'){
  for(const [x,l,g] of [[-3.6,'书籍与文具','books'],[-1.1,'洗浴与清洁用品','goods'],[1.4,'食品与茶叶','goods'],[3.85,'毛巾与家居用品','goods']])shelf(x,-3.35,l,g);
  for(const x of [-3.3,.05,3.4])item('服装陈列架','连衣裙、外套和孩子们的小衣服，挂在木衣架上。',x,-.75,1.65,.52,p=>{for(const s of [-1,1])box(p,s*.73,.05,0,.055,1.45,.055,'#bca475');beam(p,[-.73,1.5,0],[.73,1.5,0],.025,'#bca475');for(let i=0;i<5;i++){const x=-.52+i*.26;box(p,x,.74,0,.21,.59,.22,['#a3b7b0','#c29e91','#b6acc1','#d2be91','#8ca9b4'][i]);}});
  table(-2.7,2.23);item('收银台','收银机、包装纸、购物袋和一叠购物小票。',2.1,2.45,2.6,.94,p=>{box(p,0,.07,0,2.55,.83,.9,wood);box(p,0,.91,0,2.68,.07,1.05,'#d8c6a4');box(p,-.4,.98,0,.51,.21,.43,'#91a7a1');box(p,-.4,1.18,-.08,.44,.29,.08,'#596e6d');for(let i=0;i<3;i++)box(p,.25+i*.29,.99,0,.22,.39,.2,'#d9c8a2');});
  npcs.push(resident(root,{name:'百货店的玲',female:true,color:'#7692aa',role:'店员',lines:['想找日用品，右边的架子最齐全。']}));npcs[0].position.set(2.1,.06,1.56);
 }else if(kind==='market'){
  for(const [x,z,l,t] of [[-3,-2.6,'当季蔬菜','vegetable'],[.3,-2.6,'水果摊','fruit'],[3.4,-2.6,'鲜鱼冰台','fish'],[-3,.3,'面包摊','bread'],[.3,.3,'根茎蔬菜','vegetable'],[3.4,.3,'海边鱼获','fish']])produce(x,z,l,t);
  item('秤与收纳台','老式秤、菜篮子、纸袋和一叠零钱。',-2.5,2.85,2.8,.75,p=>{box(p,0,.08,0,2.8,.62,.7,wood);box(p,-.55,.71,0,.48,.23,.4,'#8caa9d');cylinder(p,-.55,.95,0,.3,.22,.055,'#c4cdbb',16);for(const x of [.2,.8])cylinder(p,x,.72,0,.23,.18,.25,'#baa27a',12);});
  npcs.push(resident(root,{name:'秋姨',female:true,color:'#9ba577',role:'摊主',lines:['慢慢挑，今天鱼和蔬菜都很新鲜。']}));npcs[0].position.set(.3,.06,-3.65);
 }else if(kind==='church'){
  for(const x of [-2.7,2.7])for(const z of [-.6,.8,2.2])item('礼拜长椅','光从花窗落在木椅上，这里很安静。',x,z,2.75,.6,p=>{box(p,0,.43,0,2.7,.1,.6,'#a18765');box(p,0,.49,-.25,2.7,.58,.09,'#b1946a');for(const x of [-1.1,1.1])box(p,x,.05,0,.11,.38,.44,'#8e795a');});
  item('祭台与烛台','鲜花与两支蜡烛摆在祭台上。',0,-2.4,2.2,.8,p=>{box(p,0,.1,0,2.14,.78,.77,'#d8c9a9');box(p,0,.9,0,2.35,.06,.96,'#f1e7cb');for(const x of [-.8,.8]){cylinder(p,x,.97,0,.12,.16,.07,'#c1a46b',14);cylinder(p,x,1.04,0,.033,.035,.39,'#efdfae',12);sphere(p,x,1.46,0,.036,.09,.036,seasonal.glass);}flowers(p,0,.98,0,.6);});
  box(shell,0,1.46,-3.84,.065,1.12,.065,'#b09a69');box(shell,0,2.11,-3.84,.62,.065,.065,'#b09a69');
  piano(-3.4,-2.7);for(let i=0;i<10;i++)cylinder(shell,-4.22+i*.18,1.1,-3.54,.055,.055,1.5-Math.abs(i-4.5)*.17,'#b2b7a6',10);
  for(let i=0;i<10;i++){const col=['#b9959e','#8baebd','#cfbd88'][i%3];const m=new T.Mesh(new T.PlaneGeometry(.7,1.15),new T.MeshBasicMaterial({color:col,transparent:true,opacity:.14,depthWrite:false}));m.rotation.x=-Math.PI/2;m.rotation.z=-.3;m.position.set(-2.7+i*.53,.055,-1.4);root.add(m);}
 }else{
  item('市政办事柜台','桌上有登记册、印章、地图和信件。',0,-1.8,4.3,.95,p=>{box(p,0,.08,0,4.3,.97,.9,wood);box(p,0,1.05,0,4.45,.08,1.01,'#d3c5a4');for(const x of [-1.4,0,1.4]){box(p,x,1.14,.05,.47,.03,.31,'#e9dec3');cylinder(p,x+.2,1.17,-.2,.046,.055,.1,'#a18164',12);}});
  shelf(-3.9,-3.25,'城镇档案');shelf(3.9,-3.25,'阅览书架');desk(-3.3,.63);desk(3.3,.63);sofa(0,2.3);cabinet(-4.1,2.83,'文件柜');lamp(4.22,2.95);
  npcs.push(resident(root,{name:'市政厅的安娜',female:true,color:'#818bb0',role:'市政职员',lines:['这里是潮汐镇，欢迎你随时来坐坐。','码头、沙滩和礁岸都有钓点。']}));npcs[0].position.set(0,.06,-2.85);
 }
 // A traveler's presence gives room scale; movement follows free floor cells.
 const player=resident(root,{name:'旅行中的你',female:true,color:'#bd9578',hair:'#6d5348'});player.position.set(.05,.06,3.5);player.scale.setScalar(.85);
 compact(shell);
 const ambient=new T.HemisphereLight('#fff0d2','#8a928a',.75);root.add(ambient);const glow=new T.PointLight('#ffe1ab',18,13,2);glow.position.set(0,4,0);root.add(glow);
 return {root,place,floor,items,npcs,player,obstacles,animated,sunlight,path:[],pending:null,elapsed:0,dispose(){root.removeFromParent();disposeModel(root);}};
}

const STEP=.25,MINX=-4.75,MINZ=-3.75,NX=39,NZ=31;
function cell(x,z){return [Math.round((x-MINX)/STEP),Math.round((z-MINZ)/STEP)];}
function point(x,z){return {x:MINX+x*STEP,z:MINZ+z*STEP};}
function free(room,x,z){if(x<0||z<0||x>=NX||z>=NZ)return false;const p=point(x,z);return !room.obstacles.some(o=>Math.abs(p.x-o.x)<o.w/2+.1&&Math.abs(p.z-o.z)<o.d/2+.1);}
export function findRoomPath(room,x,z){
 const start=cell(room.player.position.x,room.player.position.z),goal=cell(x,z),key=(a,b)=>b*NX+a,queue=[start],seen=new Map([[key(...start),null]]);let nearest=start,best=Infinity;
 for(let q=0;q<queue.length;q++){const c=queue[q],dist=(c[0]-goal[0])**2+(c[1]-goal[1])**2;if(dist<best){best=dist;nearest=c;}if(dist===0)break;
  for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=c[0]+dx,nz=c[1]+dz,k=key(nx,nz);if(!seen.has(k)&&free(room,nx,nz)){seen.set(k,c);queue.push([nx,nz]);}}
 }
 const route=[];let c=nearest;while(c&&key(...c)!==key(...start)){route.push(point(...c));c=seen.get(key(...c));}return route.reverse();
}
export function walkRoom(room,x,z){room.path=findRoomPath(room,x,z);}
export function animateInterior(room,time,dt,night){
 if(!room)return;room.sunlight.material.opacity=(1-night)*.11;const p=room.player;let budget=dt*1.6;
 while(budget>0&&room.path.length){const goal=room.path[0],dx=goal.x-p.position.x,dz=goal.z-p.position.z,d=Math.hypot(dx,dz);p.rotation.y=Math.atan2(dx,dz);if(d<=budget){p.position.set(goal.x,.06,goal.z);room.path.shift();budget-=d;}else{p.position.x+=dx/d*budget;p.position.z+=dz/d*budget;budget=0;}}
 animateResident(p,time,room.path.length>0);room.npcs.forEach(n=>animateResident(n,time,false));
}
