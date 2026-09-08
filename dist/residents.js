import * as T from './vendor/three.module.min.js';

// Soft, articulated storybook residents, approximately four heads tall.
const palette=new Map(),unitSphere=new T.SphereGeometry(1,18,14);
unitSphere.userData.shared=true;
function mat(color,kind='cloth'){
 const key=color+kind;if(palette.has(key))return palette.get(key);
 const m=new T.MeshPhysicalMaterial({color,metalness:0,roughness:kind==='hair'?.68:kind==='skin'?.82:.9,sheen:kind==='cloth'?.28:kind==='hair'?.22:.06,sheenColor:kind==='skin'?'#dfb39c':'#dbd5c8',sheenRoughness:.86});
 m.userData.characterKind=({skin:0,cloth:1,hair:2,eye:3,leather:4})[kind]??4;palette.set(key,m);return m;
}
// One shared material per moving part keeps the richer silhouettes affordable.
export const characterMaterial=new T.MeshPhysicalMaterial({color:'#ffffff',vertexColors:true,roughness:.85,metalness:0,sheen:.2,sheenColor:'#dbd5c8',sheenRoughness:.86});
characterMaterial.customProgramCacheKey=()=> 'storybook-resident-v7';
characterMaterial.onBeforeCompile=shader=>{
 shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nattribute float characterKind;varying float vCharacterKind;varying vec2 vCharacterUV;').replace('#include <begin_vertex>','#include <begin_vertex>\nvCharacterKind=characterKind;vCharacterUV=uv;');
 shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying float vCharacterKind;varying vec2 vCharacterUV;').replace('#include <map_fragment>',`#include <map_fragment>
 if(vCharacterKind>.5&&vCharacterKind<1.5){vec2 threads=vCharacterUV*185.;vec2 aa=fwidth(threads);diffuseColor.rgb*=.99+.022*cos(threads.x*6.283)*cos(threads.y*6.283)*exp(-dot(aa,aa)*3.);}
 `).replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
 roughnessFactor=vCharacterKind<.5?.82:vCharacterKind<1.5?.9:vCharacterKind<2.5?.68:vCharacterKind<3.5?.55:.86;
 `);
};
function compactResident(root){
 root.updateMatrixWorld(true);const inverse=root.matrixWorld.clone().invert(),pieces=[],remove=[];
 root.traverse(m=>{if(!m.isMesh||m.material.transparent)return;let n=m;while(n&&n!==root){if(n.userData.articulated)return;n=n.parent;}const geo=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();geo.applyMatrix4(new T.Matrix4().multiplyMatrices(inverse,m.matrixWorld));pieces.push({geo,mat:m.material});remove.push(m);});
 const count=pieces.reduce((sum,p)=>sum+p.geo.attributes.position.count,0);if(!count)return;
 const positions=new Float32Array(count*3),normals=new Float32Array(count*3),uvs=new Float32Array(count*2),colors=new Float32Array(count*3),kinds=new Float32Array(count);let offset=0;
 for(const {geo,mat:m} of pieces){const a=geo.attributes,n=a.position.count;positions.set(a.position.array,offset*3);normals.set(a.normal.array,offset*3);if(a.uv)uvs.set(a.uv.array,offset*2);for(let i=0;i<n;i++){const j=offset+i;colors[j*3]=a.color?a.color.getX(i):m.color.r;colors[j*3+1]=a.color?a.color.getY(i):m.color.g;colors[j*3+2]=a.color?a.color.getZ(i):m.color.b;kinds[j]=a.characterKind?a.characterKind.getX(i):m.userData.characterKind??4;}offset+=n;geo.dispose();}
 for(const m of remove)m.removeFromParent();const geo=new T.BufferGeometry();for(const [name,array,size] of [['position',positions,3],['normal',normals,3],['uv',uvs,2],['color',colors,3],['characterKind',kinds,1]])geo.setAttribute(name,new T.BufferAttribute(array,size));geo.computeBoundingSphere();add(root,geo,characterMaterial);
}
function add(p,geo,m,x=0,y=0,z=0,sx=1,sy=1,sz=1){const o=new T.Mesh(geo,m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);o.castShadow=o.receiveShadow=true;p.add(o);return o;}
function group(p,x=0,y=0,z=0,moving=false){const g=new T.Group();g.position.set(x,y,z);if(moving)g.userData.articulated=true;p.add(g);return g;}
function oval(p,x,y,z,sx,sy,sz,m){return add(p,unitSphere,m,x,y,z,sx,sy,sz);}
function capsule(p,x,y,z,r,length,m,sx=1,sz=1){return add(p,new T.CapsuleGeometry(r,length,5,12),m,x,y,z,sx,1,sz);}
function tube(p,points,r,m){const curve=new T.CatmullRomCurve3(points.map(v=>new T.Vector3(...v)));return add(p,new T.TubeGeometry(curve,Math.min(64,Math.max(12,points.length*6)),r,6,false),m);}
function lathe(p,profile,m,y=0,depth=.74,pleat=0){
 const geo=new T.LatheGeometry(profile.map(([r,h])=>new T.Vector2(r,h)),32),pos=geo.attributes.position;
 if(pleat)for(let i=0;i<pos.count;i++){const x=pos.getX(i),z=pos.getZ(i),f=1+Math.cos(Math.atan2(x,z)*10)*pleat*(1-pos.getY(i)/.4);pos.setX(i,x*f);pos.setZ(i,z*f);}geo.computeVertexNormals();return add(p,geo,m,0,y,0,1,1,depth);
}
function hairLock(p,points,width,m){
 const curve=new T.CatmullRomCurve3(points.map(v=>new T.Vector3(...v))),frames=curve.computeFrenetFrames(12,false),positions=[],uvs=[],indices=[];
 for(let i=0;i<=12;i++){const t=i/12,c=curve.getPointAt(t),r=width*(.55+.5*Math.sin(t*Math.PI))*(1-.92*t**3);for(let j=0;j<=8;j++){const a=j*Math.PI/4,v=c.clone().addScaledVector(frames.normals[i],Math.cos(a)*r).addScaledVector(frames.binormals[i],Math.sin(a)*r*.43);positions.push(v.x,v.y,v.z);uvs.push(j/8,t);}}
 for(let i=0;i<12;i++)for(let j=0;j<8;j++){const a=i*9+j,b=a+9;indices.push(a,b,a+1,b,b+1,a+1);}const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));geo.setIndex(indices);geo.computeVertexNormals();return add(p,geo,m);
}
function seedOf(name){let s=17;for(const c of name)s=(s*31+c.charCodeAt(0))>>>0;return s;}
export function resident(parent,options={}){
 const {name='旅行者',female=false,child=false,color='#688fa5',hair='#67483b',role='居民',lines=['欢迎来小镇散步。']}=options;
 const seed=seedOf(name),style=seed%3,skin=mat(['#efc7ad','#e7bea2','#eac3ac'][seed%3],'skin'),clothes=mat(color),ivory=mat('#ede1c9'),hairMat=mat(hair,'hair'),hairLight=mat('#'+new T.Color(hair).offsetHSL(0,0,.045).getHexString(),'hair'),leather=mat('#776354','leather'),trousers=mat(child?'#a49780':'#64747c'),gold=mat('#c5a775','leather');
 const g=group(parent),body=group(g);g.userData.resident={name,role,lines,reactUntil:0,nextLine:0};g.userData.character={female,child,seed,style};
 lathe(body,[[.112,0],[.127,.025],[female?.105:.122,.12],[female?.126:.157,.26],[female?.16:.183,.33],[.128,.37],[.057,.4]],clothes,.54,.7);
 capsule(body,0,1.005,0,.05,.065,skin);
 for(const s of [-1,1]){const collar=oval(body,s*.045,.946,.093,.034,.058,.013,ivory);collar.rotation.z=s*.44;}
 for(let i=0;i<3;i++)oval(body,0,.72+i*.07,.119,.011,.011,.008,gold);
 let skirt=null;
 if(female){skirt=group(body,0,.31,0,true);lathe(skirt,[[.211,0],[.214,.018],[.191,.11],[.15,.27],[.108,.39]],clothes,0,.79,.045);tube(skirt,Array.from({length:41},(_,i)=>{const a=i*Math.PI/20;return [Math.cos(a)*.211,.018,Math.sin(a)*.167]}),.006,ivory);compactResident(skirt);}
 else oval(body,0,.543,-.012,.132,.08,.09,trousers);
 tube(body,Array.from({length:41},(_,i)=>{const a=i*Math.PI/20;return [Math.cos(a)*.114,.658,Math.sin(a)*.085]}),.012,leather);oval(body,0,.658,.096,.025,.02,.008,gold);
 const head=group(body,0,1.195,.005,true),face=new T.SphereGeometry(1,28,22),fp=face.attributes.position;
 for(let i=0;i<fp.count;i++){const y=fp.getY(i);fp.setX(i,fp.getX(i)*(1-.27*T.MathUtils.smoothstep(-y,.08,.92)));fp.setZ(i,fp.getZ(i)*(1-.12*Math.max(0,-y)));}face.computeVertexNormals();add(head,face,skin,0,0,0,.147,.179,.126);
 const eyes=[],iris=mat(['#697f85','#7d735f','#6c7e68'][style],'eye'),dark=mat('#454c4d','eye'),white=mat('#f2eadd','eye'),blush=mat('#ce958c','skin').clone();blush.transparent=true;blush.opacity=.25;blush.depthWrite=false;
 for(const s of [-1,1]){
  oval(head,s*.143,-.018,-.007,.025,.041,.024,skin);oval(head,s*.146,-.018,.012,.011,.023,.008,mat('#d9a593','skin'));
  const eye=group(head,s*.058,.017,.112,true);eye.rotation.y=s*.12;oval(eye,0,0,0,.038,.021,.011,white);oval(eye,-s*.002,-.001,.011,.016,.019,.006,iris);oval(eye,-s*.002,-.001,.017,.008,.014,.004,dark);oval(eye,-.006,.007,.021,.005,.006,.003,white);compactResident(eye);eyes.push(eye);
  tube(head,[[s*.023,.029,.12],[s*.057,.043,.122],[s*.092,.03,.108]],.0032,hairMat);tube(head,[[s*.025,.071,.117],[s*.058,.079,.118],[s*.086,.071,.103]],.0035,hairMat);
  const cheek=oval(head,s*.083,-.039,.104,.027,.009,.004,blush);cheek.castShadow=false;
 }
 oval(head,0,-.027,.124,.013,.024,.019,skin);tube(head,[[-.022,-.078,.11],[0,-.083,.116],[.023,-.077,.11]],.0027,mat('#a87870','skin'));oval(head,0,-.105,.095,.028,.015,.007,skin);
 const hairRoot=group(head),movingHair=[];add(hairRoot,new T.SphereGeometry(1,28,18,0,Math.PI*2,0,Math.PI*.61),hairMat,0,.017,-.017,.155,.176,.14);
 for(let i=0;i<5;i++){const x=-.116+i*.051;hairLock(hairRoot,[[x*.8,.155,.037],[x+.016,.129,.104],[x+.035,.073+(i%2)*.012,.115]],.031,i%2?hairMat:hairLight);}
 if(female){
  for(const s of [-1,1])hairLock(hairRoot,[[s*.12,.11,.03],[s*.151,.012,.039],[s*.137,-.126,.025]],.044,hairMat);
  if(child||style===1){for(const s of child?[-1,1]:[1]){const tail=group(hairRoot,s*.12,.075,-.099,true);hairLock(tail,[[0,0,0],[s*.056,-.08,-.045],[s*.055,-.215,-.023],[s*.007,-.31,.022]],child?.052:.073,hairMat);oval(tail,0,-.025,0,.035,.024,.033,mat(child?'#be9088':'#c8b88d'));compactResident(tail);movingHair.push(tail);}}
  else for(let i=0;i<5;i++){const x=(i-2)*.05;hairLock(hairRoot,[[x,.1,-.102],[x*1.25,-.06,-.135],[x*1.3,style===2?-.28:-.16,-.09]],.047,i%2?hairMat:hairLight);}
 }else{for(const s of [-1,1])hairLock(hairRoot,[[s*.125,.112,0],[s*.143,.01,.018],[s*.129,-.049,.02]],.027,hairMat);hairLock(hairRoot,[[-.09,.16,-.03],[.012,.202,.012],[.094,.133,.067]],.03,hairLight);}
 if(child)head.scale.setScalar(1.11);
 const arms=[],forearms=[],hands=[],legs=[],knees=[];
 for(const s of [-1,1]){
  const arm=group(g,s*(female?.153:.174),.915,0,true);arm.userData.baseY=.915;arm.userData.side=s;capsule(arm,s*.014,-.072,0,.048,.125,clothes);oval(arm,0,-.011,0,.06,.057,.055,clothes);
  const elbow=group(arm,s*.009,-.191,0,true);capsule(elbow,0,-.075,0,.035,.123,child?skin:clothes);const hand=group(elbow,0,-.182,.007,true);oval(hand,0,0,0,.033,.045,.024,skin);oval(hand,-s*.027,.004,.012,.014,.024,.014,skin);
  if(!child)tube(elbow,[[-.03,-.139,.012],[0,-.141,.036],[.03,-.139,.012]],.007,ivory);
  compactResident(hand);compactResident(elbow);compactResident(arm);arms.push(arm);forearms.push(elbow);hands.push(hand);
  const hip=group(g,s*.078,.541,0,true);capsule(hip,0,-.111,0,.051,.167,female?skin:trousers);const knee=group(hip,0,-.264,0,true);capsule(knee,0,-.097,0,.04,.159,child||female?skin:trousers);
  if(child||female)capsule(knee,0,-.177,0,.043,.039,ivory);
  oval(knee,0,-.231,.044,.061,.042,.114,leather);oval(knee,0,-.249,.045,.062,.018,.112,mat('#655950','leather'));compactResident(knee);compactResident(hip);legs.push(hip);knees.push(knee);
 }
 if(/咖啡|卖|菜|merchant|摊主/.test(role)){const apron=new T.PlaneGeometry(.225,.28,8,8),p=apron.attributes.position;for(let i=0;i<p.count;i++)p.setZ(i,.022*Math.cos(p.getX(i)*18)+.02*(.14-p.getY(i)));apron.computeVertexNormals();add(body,apron,ivory,0,.53,.14);for(const s of [-1,1])tube(body,[[s*.074,.88,.11],[s*.068,.73,.124],[s*.083,.67,.137]],.012,ivory);}
 if(/旅行/.test(name)){tube(body,[[-.13,.92,.09],[-.05,.76,.14],[.12,.58,.12]],.014,leather);oval(body,.137,.54,.072,.082,.106,.049,leather);oval(body,.139,.57,.108,.072,.04,.023,mat('#b8a58a','leather'));}
 if(/钓|fish|守礁/.test(role)){add(head,new T.CylinderGeometry(.166,.183,.038,28),mat('#cdbf95'),0,.157,-.01);add(head,new T.SphereGeometry(1,24,12,0,Math.PI*2,0,Math.PI/2),mat('#cdbf95'),0,.167,-.01,.132,.072,.119);}
 compactResident(head);compactResident(body);
 Object.assign(g.userData,{arms,forearms,hands,legs,knees,head,eyes,body,skirt,hair:movingHair});if(child)g.scale.setScalar(.74);return g;
}
export function animateResident(g,time,walking=false,wind=.3){
 const d=g.userData,active=(d.actor||d.resident).reactUntil>time,seed=d.character.seed,phase=time*(d.character.child?6.2:5.5)+seed%19,bob=walking?Math.abs(Math.sin(phase))*.013:Math.sin(time*1.9+seed)*.003;
 d.legs.forEach((leg,i)=>{const step=Math.sin(phase+i*Math.PI);leg.rotation.x=walking?step*.31:0;d.knees[i].rotation.x=walking?Math.max(0,-step)*.48:.025;});
 d.arms.forEach((arm,i)=>{arm.position.y=arm.userData.baseY+bob;arm.rotation.set(walking?-Math.sin(phase+i*Math.PI)*.25:.025,0,arm.userData.side*.065);d.forearms[i].rotation.set(-.1,0,0);d.hands[i].rotation.z=0;if(active&&i===0){arm.rotation.x=-.25;arm.rotation.z=-1.03;d.forearms[i].rotation.z=-1.45;d.forearms[i].rotation.x=-.12;d.hands[i].rotation.z=Math.sin(time*8)*.28;}});
 d.body.position.y=bob;d.body.rotation.y=walking?Math.sin(phase)*.018:0;d.head.rotation.y=active?0:Math.sin(time*.37+seed)*.095;d.head.rotation.z=Math.sin(time*.6+seed)*.018;
 const blink=(time+seed*.17)%4.9,open=blink<.15?.12+.88*Math.abs(blink-.075)/.075:1;d.eyes.forEach(e=>e.scale.y=open);
 if(d.skirt)d.skirt.rotation.z=walking?Math.sin(phase)*.027:Math.sin(time*1.4)*wind*.014;
 d.hair.forEach((h,i)=>{h.rotation.x=Math.sin(time*2.4+i+seed)*(.025+wind*.1+(walking?.04:0));h.rotation.z=Math.sin(time*1.7+i)*.045;});
}
export function poseFishing(g,time=0){g.userData.arms.forEach((arm,i)=>{arm.rotation.x=-.7;arm.rotation.z=(i===0?-1:1)*.1;g.userData.forearms[i].rotation.x=-.72+Math.sin(time*1.2)*.025;g.userData.forearms[i].rotation.z=(i===0?-1:1)*.13;});}
export function greetResident(g,time){const d=g.userData.resident;d.reactUntil=time+3.2;return `${d.name}：${d.lines[d.nextLine++%d.lines.length]}`;}
export function routePosition(points,distance){
 const lengths=points.map((a,i)=>{const b=points[(i+1)%points.length];return Math.hypot(b[0]-a[0],b[1]-a[1]);}),total=lengths.reduce((a,b)=>a+b,0);let d=((distance%total)+total)%total;
 for(let i=0;i<points.length;i++){if(d<=lengths[i]){const a=points[i],b=points[(i+1)%points.length],f=d/lengths[i];return {x:a[0]+(b[0]-a[0])*f,z:a[1]+(b[1]-a[1])*f,angle:Math.atan2(b[0]-a[0],b[1]-a[1])};}d-=lengths[i];}
 return {x:points[0][0],z:points[0][1],angle:0};
}
