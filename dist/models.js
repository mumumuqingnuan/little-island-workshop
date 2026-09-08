import * as T from './vendor/three.module.min.js';
import {finishMaterial} from './surfaces.js?v=8';

// Original, procedural miniature architecture. No game assets are used.
const materials=new Map();
export function material(color,options={}){
 const key=color+JSON.stringify(options);
 if(!materials.has(key))materials.set(key,finishMaterial(new T.MeshStandardMaterial({color,roughness:.86,metalness:0,...options})));
 return materials.get(key);
}
export const seasonal={
 grass:finishMaterial(new T.MeshStandardMaterial({color:'#91b768',roughness:.96}),'grass'),
 leaves:finishMaterial(new T.MeshStandardMaterial({color:'#a4c67e',roughness:.91}),'leaf'),
 leaves2:finishMaterial(new T.MeshStandardMaterial({color:'#d9a9b6',roughness:.91}),'leaf'),
 flower:finishMaterial(new T.MeshPhysicalMaterial({color:'#efb2b6',roughness:.77,sheen:.4,sheenColor:'#f6d5d1',sheenRoughness:.75,side:T.DoubleSide}),'petal'),
 bark:finishMaterial(new T.MeshStandardMaterial({color:'#8f785b',roughness:.94}),'bark'),
 leafDetail:finishMaterial(new T.MeshStandardMaterial({color:'#a4c67e',roughness:.83,side:T.DoubleSide}),'leafDetail'),
 leafDetail2:finishMaterial(new T.MeshStandardMaterial({color:'#d9a9b6',roughness:.84,side:T.DoubleSide}),'leafDetail'),
 water:new T.MeshStandardMaterial({color:'#72bfce',roughness:.26,metalness:.16,transparent:true,opacity:.89}),
 snow:finishMaterial(material('#f4f5eb'),'snow'),
 glass:new T.MeshPhysicalMaterial({color:'#a1bec9',emissive:'#ffc174',emissiveIntensity:.13,roughness:.16,metalness:.2,clearcoat:1,clearcoatRoughness:.12})
};
const boxGeo=new T.BoxGeometry(1,1,1),sphereGeo=new T.SphereGeometry(1,16,10),icoGeo=new T.IcosahedronGeometry(1,1);
function botanicalGeometry(petal=false){
 const nx=petal?4:2,ny=8,positions=[],uvs=[],indices=[];
 for(let j=0;j<=ny;j++)for(let i=0;i<=nx;i++){const u=i/nx,v=j/ny,width=Math.pow(Math.sin(Math.PI*(.02+v*.96)),petal?.62:.85)*(petal?.57:.42),x=(u*2-1)*width;
  positions.push(x,petal?.13*Math.sin(v*Math.PI)+x*x*.17:v,petal?v:.055*Math.sin(v*Math.PI)-Math.abs(x)*.07);uvs.push(u,v);
 }
 for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i,b=a+nx+1;indices.push(a,b,a+1,b,b+1,a+1);}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();g.userData.shared=true;return g;
}
const petalGeo=botanicalGeometry(true),leafGeo=botanicalGeometry(),pollenGeo=new T.SphereGeometry(1,8,6);
function mesh(parent,geo,mat,x=0,y=0,z=0,sx=1,sy=1,sz=1){const m=new T.Mesh(geo,typeof mat==='string'?material(mat):mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
// Small bevels catch the light on plaster corners and substantial furniture.
const softBoxGeo=(()=>{const g=new T.BoxGeometry(1,1,1,5,5,5),p=g.attributes.position,n=g.attributes.normal,steps=[-.5,-.48,-.445,.445,.48,.5],v=new T.Vector3(),q=new T.Vector3();for(let i=0;i<p.count;i++){v.set(steps[Math.round((p.getX(i)+.5)*5)],steps[Math.round((p.getY(i)+.5)*5)],steps[Math.round((p.getZ(i)+.5)*5)]);q.copy(v).clampScalar(-.445,.445);v.sub(q).normalize();n.setXYZ(i,v.x,v.y,v.z);q.addScaledVector(v,.055);p.setXYZ(i,q.x,q.y,q.z);}g.userData.shared=true;g.userData.beveled=true;return g;})();
function box(p,x,y,z,w,h,d,c){const min=Math.min(w,h,d),max=Math.max(w,h,d),geo=min>.14&&w*h*d>.02&&max/min<8?softBoxGeo:boxGeo;return mesh(p,geo,c,x,y+h/2,z,w,h,d)}
function sphere(p,x,y,z,sx,sy,sz,c){
 if(c===seasonal.flower){const g=new T.Group();g.position.set(x,y,z);p.add(g);for(let i=0;i<7;i++){const a=i*Math.PI*2/7;const m=mesh(g,petalGeo,c,0,Math.sin(a*2)*sy*.08,0,sx*.98,sy*2.1,sz*1.06);m.rotation.y=a;m.rotation.z=Math.sin(a*3)*.07;}mesh(g,pollenGeo,'#e7c980',0,sy*.22,0,sx*.27,sy*.35,sz*.27);for(let i=0;i<7;i++){const a=i*2.399;mesh(g,pollenGeo,'#d9b36d',Math.cos(a)*sx*.23,sy*.51,Math.sin(a)*sz*.23,sx*.055,sy*.07,sz*.055);}return g}
 return mesh(p,sphereGeo,c,x,y,z,sx,sy,sz)
}
function cylinder(p,x,y,z,rt,rb,h,c,n=12){return mesh(p,new T.CylinderGeometry(rt,rb,h,n),c,x,y+h/2,z)}
function cone(p,x,y,z,r,h,c,n=8){return cylinder(p,x,y,z,0,r,h,c,n)}
function beam(p,a,b,r,c){const d=new T.Vector3(...b).sub(new T.Vector3(...a)),m=mesh(p,new T.CylinderGeometry(r,r,d.length(),6),c);m.position.copy(new T.Vector3(...a).addScaledVector(d,.5));m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());return m}
function group(p,x=0,y=0,z=0){const g=new T.Group();g.position.set(x,y,z);p.add(g);return g}
function snow(m){m.userData.snow=true;m.visible=false;return m}
function trimBox(p,x,y,z,w,h,d,c){const s=new T.Shape();const r=.075,hw=w/2,hd=d/2;s.moveTo(-hw+r,-hd);s.lineTo(hw-r,-hd);s.quadraticCurveTo(hw,-hd,hw,-hd+r);s.lineTo(hw,hd-r);s.quadraticCurveTo(hw,hd,hw-r,hd);s.lineTo(-hw+r,hd);s.quadraticCurveTo(-hw,hd,-hw,hd-r);s.lineTo(-hw,-hd+r);s.quadraticCurveTo(-hw,-hd,-hw+r,-hd);const geo=new T.ExtrudeGeometry(s,{depth:h,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:.025,bevelThickness:.025,curveSegments:3});geo.rotateX(-Math.PI/2);return mesh(p,geo,c,x,y,z)}
function makeTile(){
 const sh=new T.Shape();sh.moveTo(-.5,-.5);sh.lineTo(.4,-.5);sh.quadraticCurveTo(.55,-.5,.55,-.34);sh.lineTo(.55,.34);sh.quadraticCurveTo(.55,.5,.4,.5);sh.lineTo(-.5,.5);sh.closePath();
 const g=new T.ExtrudeGeometry(sh,{depth:.022,bevelEnabled:true,bevelThickness:.005,bevelSize:.018,bevelSegments:1,curveSegments:3});g.rotateX(-Math.PI/2);return g;
}
const tileGeo=makeTile();
function roof(p,x,y,z,w,h,d,c){
 const sh=new T.Shape();sh.moveTo(-w/2,0);sh.lineTo(0,h);sh.lineTo(w/2,0);sh.closePath();const geo=new T.ExtrudeGeometry(sh,{depth:d,bevelEnabled:false});geo.translate(0,0,-d/2);mesh(p,geo,c,x,y,z);
 const slope=Math.atan2(h,w/2),length=Math.hypot(h,w/2),rows=Math.max(4,Math.ceil(length/.24)),columns=Math.max(4,Math.ceil(d/.22));
 const tones=[-.035,0,.035].map(v=>finishMaterial(material('#'+new T.Color(c).offsetHSL(0,0,v).getHexString()),'roof'));
 for(const side of [-1,1]){
  for(let row=0;row<rows;row++)for(let col=0;col<columns;col++){
   const f=(row+.5)/rows,zz=z-d/2+(col+.5)*d/columns;
   const m=mesh(p,tileGeo,tones[(row*7+col*3+Math.floor(col/2))%3],x+side*w/2*f,y+h*(1-f)+.045,zz,length/rows*1.12,1,d/columns*.98);m.rotation.z=-side*slope;
  }
  const cap=box(p,x+side*w/4,y+h/2+.098,z,length+.06,.045,d+.08,seasonal.snow);cap.rotation.z=-side*slope;snow(cap);
 }
 for(let j=0;j<Math.ceil(d/.21);j++){const zz=z-d/2+(j+.5)*d/Math.ceil(d/.21);const ridge=cylinder(p,x,y+h-.004,zz,.073,.073,d/Math.ceil(d/.21)*1.06,tones[2],10);ridge.rotation.x=Math.PI/2;ridge.position.y=y+h+.06;ridge.position.z=zz;}
 for(const zz of [z-d/2-.015,z+d/2+.015]){beam(p,[x-w/2,y,zz],[x,y+h,zz],.035,'#684e44');beam(p,[x,y+h,zz],[x+w/2,y,zz],.035,'#684e44')}
}
function windowFrame(p,x,y,z,w=.4,h=.5){box(p,x,y,z,w+.11,h+.1,.09,'#735b48');box(p,x,y+.035,z+.05,w,h,.025,seasonal.glass);box(p,x,y+.03,z+.08,.035,h,.025,'#f0e2ba');box(p,x,y+h*.51,z+.08,w,.035,.025,'#f0e2ba');box(p,x,y-.045,z+.04,w+.17,.06,.15,'#e8d9b3')}
function door(p,x,y,z,h=.83){box(p,x,y,z,.45,h,.1,'#645346');box(p,x,y+.07,z+.06,.34,h-.15,.03,'#866948');for(let i=0;i<4;i++)box(p,x-.127+i*.085,y+.09,z+.079,.011,h-.19,.008,'#645346');box(p,x,y+h*.22,z+.087,.31,.032,.023,'#a38a63');box(p,x,y+h*.76,z+.087,.31,.032,.023,'#a38a63');sphere(p,x+.11,y+h*.4,z+.1,.032,.032,.025,'#dab464');box(p,x,y-.09,z+.2,.65,.09,.38,'#c5b69b')}
function flowers(p,x,y,z,w=.6){box(p,x,y,z,w,.15,.22,'#a17050');for(let i=0;i<4;i++){const xx=x-w*.36+i*w*.24;sphere(p,xx,y+.18,z,.14,.13,.13,'#6c8c51');sphere(p,xx,y+.26,z+.015,.085,.065,.085,seasonal.flower)}}
function fence(p,x,y,z,w,c='#f2e8ca'){for(let i=0;i<=4;i++)box(p,x-w/2+i*w/4,y,z,.055,.35,.055,c);box(p,x,y+.1,z,w,.05,.05,c);box(p,x,y+.27,z,w,.045,.05,c)}
function awning(p,x,y,z,w){for(let i=0;i<6;i++){const a=box(p,x-w/2+w/12+i*w/6,y,z,w/6,.055,.6,i%2?'#efe5c5':'#829c80');a.rotation.x=.16;box(p,x-w/2+w/12+i*w/6,y-.08,z+.29,w/6,.14,.035,i%2?'#efe5c5':'#829c80')}}
function flag(p,x,y,z,c='#799ba8'){
 const g=group(p,x,y,z);box(g,0,0,0,.035,.8,.035,'#ba985b');const cloth=box(g,.18,.48,0,.34,.24,.026,c);cloth.userData.flag=true;return g;
}
function cottage(p,level){
 const height=1.13+(level>=3?.56:0),w=1.42,d=1.35;
 trimBox(p,0,0,0,1.66,.15,1.62,'#b7aa91');box(p,0,.15,0,w,height,d,'#f0dfba');
 for(const x of [-w/2,w/2])for(const z of [-d/2,d/2])box(p,x,.16,z,.075,height,.075,'#785e4c');
 box(p,0,.5,d/2+.015,w,.075,.065,'#927652');box(p,0,.15+height-.08,d/2+.02,w,.09,.06,'#785e4c');
 door(p,0,.2,d/2+.04);windowFrame(p,-.47,.72,d/2+.025,.25,.32);windowFrame(p,.47,.72,d/2+.025,.25,.32);
 const side=group(p,w/2+.02,0,0);side.rotation.y=Math.PI/2;windowFrame(side,0,.64,0,.53,.5);flowers(side,0,.43,.07,.65);
 roof(p,0,.15+height,0,1.76,.82,1.72,'#b96953');
 box(p,-.43,height+.61,-.38,.26,.65,.27,'#d4c3aa');box(p,-.43,height+1.18,-.38,.33,.1,.34,'#ad8e79');
 if(level>=2){
  const dorm=group(p,.34,height+.43,.47);box(dorm,0,0,0,.48,.37,.53,'#edd7ac');roof(dorm,0,.37,0,.64,.31,.65,'#8f9b8d');windowFrame(dorm,0,.06,.28,.27,.28);
  flowers(p,-.49,.46,.75,.48);flowers(p,.49,.46,.75,.48);
  for(const s of [-1,1])box(p,s*.81,.12,.98,.08,.73,.08,'#9e8967');awning(p,0,.95,1.01,1.75);
 }
 if(level>=3){
  box(p,0,1.18,.91,1.58,.13,.65,'#a68b66');fence(p,0,1.31,1.22,1.56);windowFrame(p,-.34,1.25,.69,.36,.39);windowFrame(p,.34,1.25,.69,.36,.39);
  for(const x of [-.74,.74])beam(p,[x,.61,.69],[x,1.19,1.17],.035,'#8b775c');
 }
 if(level>=4){
  const annex=group(p,-1.05,0,-.17);trimBox(annex,0,0,0,.72,.13,1.15,'#b7aa91');box(annex,0,.13,0,.66,.84,1.02,'#e7d7b2');roof(annex,0,.97,0,.87,.59,1.2,'#73928a');windowFrame(annex,0,.4,.53,.38,.4);
  fence(p,.4,.13,1.45,1.5);flowers(p,.4,.17,1.43,1.4);flag(p,.75,1.77,.66);
 }
 if(level>=5){
  const tower=group(p,.89,0,-.44);cylinder(tower,0,.14,0,.44,.49,2.35,'#e4d5b2',8);cylinder(tower,0,2.49,0,.51,.51,.12,'#9c845e',8);cone(tower,0,2.61,0,.61,.84,'#638c89',8);snow(cone(tower,0,2.66,0,.61,.83,seasonal.snow,8));sphere(tower,0,3.48,0,.065,.1,.065,'#d2b069');
  const clock=cylinder(tower,0,2.02,.456,.21,.21,.035,'#f4eccb',24);clock.rotation.x=Math.PI/2;clock.position.y=2.09;clock.position.z=.456;
  box(tower,0,2.02,.49,.025,.15,.015,'#6c6958');box(tower,.047,2.08,.495,.11,.025,.015,'#6c6958');
  for(const x of [-.65,.65])cylinder(p,x,.11,1.58,.15,.19,.25,'#dfd0a5');
 }
}
function garden(p,level){
 trimBox(p,0,.01,0,1.85,.12,1.8,'#bcaa8a');box(p,0,.14,0,1.68,.055,1.6,'#9cae70');
 for(const x of [-.58,.58])for(const z of [-.48,.48]){box(p,x,.2,z,.47,.11,.47,'#a57a55');for(let i=0;i<5;i++){const a=i*2.4;sphere(p,x+Math.cos(a)*.13,.4,z+Math.sin(a)*.13,.12,.1,.12,'#729757');sphere(p,x+Math.cos(a)*.14,.51,z+Math.sin(a)*.14,.12,.075,.12,seasonal.flower)}}
 for(const x of [-.96,.96]){const g=group(p,x,.14,0);g.rotation.y=Math.PI/2;fence(g,0,0,0,1.65)}
 if(level>=2){
  for(const x of [-.46,.46])cylinder(p,x,.15,.9,.055,.065,1.21,'#e8d9b7',6);
  const arch=new T.Mesh(new T.TorusGeometry(.46,.055,6,16,Math.PI),material('#e8d9b7'));arch.position.set(0,1.35,.9);p.add(arch);arch.castShadow=true;
  for(let i=0;i<7;i++){const a=i*Math.PI/6;sphere(p,Math.cos(a)*.47,1.35+Math.sin(a)*.47,.9,.14,.14,.1,'#72955c');sphere(p,Math.cos(a)*.47,1.41+Math.sin(a)*.47,.95,.085,.08,.08,seasonal.flower)}
 }
 if(level>=3){
  cylinder(p,0,.18,0,.36,.43,.19,'#d8d2b7',16);cylinder(p,0,.38,0,.31,.31,.035,seasonal.water,20);cylinder(p,0,.4,0,.075,.11,.43,'#e4daba',10);cylinder(p,0,.83,0,.23,.12,.06,'#e4daba',14);sphere(p,0,.96,0,.11,.17,.11,seasonal.water);
 }
 if(level>=4){
  const gazebo=group(p,0,.14,-.57);for(const x of [-.63,.63])for(const z of [-.42,.42])cylinder(gazebo,x,0,z,.05,.055,1.35,'#ecdcb4',6);roof(gazebo,0,1.35,0,1.52,.55,1.26,'#759a8c');fence(gazebo,0,0,-.42,1.26);flowers(gazebo,0,1.21,.52,1.4);
 }
 if(level>=5){
  for(const s of [-1,1]){const hedge=group(p,s*1.18,.15,-.05);box(hedge,0,0,0,.32,.3,1.9,'#79945c');for(let j=0;j<6;j++)sphere(hedge,0,.36,-.78+j*.3,.19,.17,.19,'#8bab66');cylinder(p,s*1.07,.14,1.13,.15,.18,.26,'#daca9f',10);cone(p,s*1.07,.4,1.13,.23,.6,'#729760',10)}
  sphere(p,0,2.04,-.57,.06,.13,.06,'#d6b85c');
 }
}
function windmill(p,level){
 const h=1.5+(level>=3?.48:0);trimBox(p,0,.01,0,1.6,.12,1.5,'#baaa90');cylinder(p,0,.13,0,.52,.68,h,'#ead8b3',10);
 for(const y of [.45,.9,1.4])if(y<h)cylinder(p,0,y,0,.69-y*.11,.69-y*.11,.065,'#a28a67',10);
 cone(p,0,h+.13,0,.82,.77,'#688e88',10);snow(cone(p,0,h+.19,0,.8,.76,seasonal.snow,10));sphere(p,0,h+.94,0,.06,.09,.06,'#d7b463');door(p,0,.16,.68,.67);
 const blades=group(p,0,h+.04,.67);blades.userData.rotor=true;
 cylinder(blades,0,0,0,.14,.14,.15,'#b19a70',10).rotation.x=Math.PI/2;
 for(let i=0;i<4;i++){
  const arm=group(blades);arm.rotation.z=i*Math.PI/2;box(arm,0,.04,0,.08,1.11,.06,'#8b7759');
  for(let j=0;j<5;j++)box(arm,.1,.32+j*.16,.02,.31,.105,.035,level>=4?'#f2e3ae':'#eee5c6');
  box(arm,.24,.25,.02,.035,.94,.035,'#baa47a');
 }
 if(level>=2){
  const annex=group(p,-.8,.03,-.22);box(annex,0,0,0,.72,.76,1.08,'#e1cfa7');roof(annex,0,.76,0,.94,.43,1.23,'#b68161');windowFrame(annex,0,.25,.56,.38,.31);cylinder(p,.8,.14,.4,.23,.23,.44,'#a77d52',10);cylinder(p,.8,.24,.4,.24,.24,.045,'#7b7964',10);
 }
 if(level>=3){
  cylinder(p,0,1.2,0,.81,.81,.1,'#bda783',12);
  for(let i=0;i<10;i++){const a=i*Math.PI/5;box(p,Math.cos(a)*.78,1.29,Math.sin(a)*.78,.045,.3,.045,'#e8dbb7')}
  const railing=new T.Mesh(new T.TorusGeometry(.78,.027,5,20),material('#e8dbb7'));railing.rotation.x=Math.PI/2;railing.position.y=1.6;p.add(railing);
 }
 if(level>=4){
  const second=group(p,1.0,.02,-.34);box(second,0,0,0,.78,1.0,1.03,'#e9d9b5');roof(second,0,1,0,.97,.55,1.25,'#70948b');windowFrame(second,0,.4,.55,.43,.4);flowers(second,0,.2,.6,.64);flag(p,-.54,1.17,-.48);
 }
 if(level>=5){
  for(const s of [-1,1]){box(p,s*.7,.15,1.08,.06,.75,.06,'#b6a17b');sphere(p,s*.7,.96,1.08,.1,.13,.1,seasonal.glass)}
  cylinder(p,0,h+.89,0,.24,.29,.14,'#caa665',10);cone(p,0,h+1.03,0,.24,.45,'#e1c784',10);flag(p,0,h+1.43,0,'#89a9ba');
  for(const x of [-.5,.5])flowers(p,x,.15,1.36,.7);
 }
}
function lighthouse(p,level){
 const h=1.7+(level-1)*.23;trimBox(p,0,.01,0,1.67,.15,1.62,'#c0b59b');cylinder(p,0,.16,0,.42,.61,h,'#f0e5c8',12);
 for(let i=0;i<3;i++){const y=.36+i*h*.29,r=.6-(y-.16)/h*.18;cylinder(p,0,y,0,r,r,.12,'#9db1a0',12)}
 cylinder(p,0,h+.16,0,.61,.61,.15,'#c5af7f',12);cylinder(p,0,h+.31,0,.39,.39,.53,seasonal.glass,12);
 for(let i=0;i<6;i++){const a=i*Math.PI/3;box(p,Math.cos(a)*.39,h+.31,Math.sin(a)*.39,.045,.55,.045,'#8a7c62')}
 cone(p,0,h+.86,0,.63,.56,'#628b89',12);snow(cone(p,0,h+.91,0,.63,.55,seasonal.snow,12));sphere(p,0,h+1.49,0,.06,.12,.06,'#d3b161');door(p,0,.18,.61,.66);
 if(level>=2){
  for(let i=0;i<12;i++){const a=i*Math.PI/6;box(p,Math.cos(a)*.62,h+.28,Math.sin(a)*.62,.035,.27,.035,'#d5c08d')}
  const ring=new T.Mesh(new T.TorusGeometry(.62,.025,6,24),material('#d5c08d'));ring.rotation.x=Math.PI/2;ring.position.y=h+.55;p.add(ring);
 }
 if(level>=3){
  const lodge=group(p,-.79,0,-.13);box(lodge,0,.14,0,.77,.81,.99,'#e5d4ac');roof(lodge,0,.95,0,.99,.43,1.17,'#668e87');windowFrame(lodge,0,.42,.53,.41,.34);flowers(lodge,0,.23,.56,.67);
 }
 if(level>=4){
  for(const s of [-1,1]){cylinder(p,s*.96,.12,.66,.21,.26,1.05,'#e2d6b2',8);cone(p,s*.96,1.17,.66,.32,.57,'#789b8e',8);snow(cone(p,s*.96,1.22,.66,.32,.56,seasonal.snow,8));sphere(p,s*.96,1.78,.66,.045,.07,.045,'#d8b968')}
  fence(p,0,.18,1.02,1.9);flag(p,.76,h-.2,-.48,'#c5a265');
 }
 if(level>=5){
  const arch=new T.Mesh(new T.TorusGeometry(.41,.09,7,18,Math.PI),material('#dfc895'));arch.position.set(0,1.14,.97);p.add(arch);
  for(const s of [-1,1]){box(p,s*.41,.16,.97,.17,.99,.17,'#dfc895');flowers(p,s*.98,.12,1.22,.71)}
  cylinder(p,0,h+.85,0,.47,.47,.095,'#d2b16f',12);
 }
 const light=new T.PointLight('#ffd18a',0,4,2);light.position.set(0,h+.55,0);p.add(light);p.userData.lantern=light;
}

// Merge static pieces by material; animated sails, foliage, snow and flags stay independent.
export function compact(root){
 root.updateMatrixWorld(true);const inverse=root.matrixWorld.clone().invert(),bins=new Map(),remove=[];
 root.traverse(m=>{if(!m.isMesh||m.isInstancedMesh||m.userData.snow)return;let n=m;while(n&&n!==root){if(n.userData.articulated||n.userData.rotor||n.userData.flag||n.userData.sway||n.userData.cloth||n.userData.chime||n.userData.pennant!==undefined)return;n=n.parent}if(m.material.transparent)return;
 const key=m.material.uuid;let bin=bins.get(key);if(!bin){bin={mat:m.material,geos:[]};bins.set(key,bin)}
 const g=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();g.applyMatrix4(new T.Matrix4().multiplyMatrices(inverse,m.matrixWorld));bin.geos.push(g);remove.push(m);
 });
 for(const m of remove)m.removeFromParent();
 for(const bin of bins.values()){
  const length=bin.geos.reduce((s,g)=>s+g.attributes.position.array.length,0),positions=new Float32Array(length),normals=new Float32Array(length),uvs=new Float32Array(length/3*2);let offset=0;
  for(const g of bin.geos){positions.set(g.attributes.position.array,offset);normals.set(g.attributes.normal.array,offset);if(g.attributes.uv)uvs.set(g.attributes.uv.array,offset/3*2);offset+=g.attributes.position.array.length;g.dispose()}
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(positions,3));geo.setAttribute('normal',new T.BufferAttribute(normals,3));geo.setAttribute('uv',new T.BufferAttribute(uvs,2));geo.computeBoundingSphere();mesh(root,geo,bin.mat);
 }
 return root;
}
export function createBuilding(type,level){
 const g=new T.Group();({house:cottage,garden,mill:windmill,lighthouse})[type](g,level);g.userData.type=type;g.userData.level=level;compact(g);return g;
}

function tree(parent,x,z,size=1,kind=0){
 const g=group(parent,x,.07,z);g.scale.setScalar(size);cylinder(g,0,0,0,.065,.12,1.17,seasonal.bark,12);beam(g,[0,.73,0],[.34,1.29,.04],.035,seasonal.bark);
 const crown=group(g,0,1,0);crown.userData.sway=true;crown.userData.phase=x*3+z;
 if(kind===2){for(let i=0;i<3;i++){cone(crown,0,i*.36,0,.64-i*.14,.91,seasonal.leaves,10);snow(cone(crown,0,i*.36+.07,0,.6-i*.14,.86,seasonal.snow,10))}}
 else{for(const [xx,yy,zz,s] of [[0,.34,0,.68],[-.39,.12,.06,.48],[.36,.22,-.04,.5],[.08,.3,.4,.43]]){sphere(crown,xx,yy,zz,s,s*.86,s,kind===1?seasonal.leaves2:seasonal.leaves);snow(sphere(crown,xx,yy+s*.47,zz,s*.81,s*.24,s*.78,seasonal.snow))}}
 const count=kind===2?84:144,leaves=new T.InstancedMesh(leafGeo,kind===1?seasonal.leafDetail2:seasonal.leafDetail,count),dummy=new T.Object3D();const blobs=[[0,.34,0,.68],[-.39,.12,.06,.48],[.36,.22,-.04,.5],[.08,.3,.4,.43]];
 for(let i=0;i<count;i++){const a=i*2.399963,lat=1-2*((i%36)+.5)/36,s=Math.sqrt(1-lat*lat),n=new T.Vector3(Math.cos(a)*s,lat,Math.sin(a)*s);const b=blobs[Math.floor(i/36)%4];
  if(kind===2){const height=(i%28)/28*1.45,r=.65*(1-height/1.9);dummy.position.set(Math.cos(a)*r,height,Math.sin(a)*r);dummy.scale.set(.13,.24,.2);}else{dummy.position.set(b[0]+n.x*b[3]*.94,b[1]+n.y*b[3]*.79,b[2]+n.z*b[3]*.93);const scale=.22+(i%5)*.018;dummy.scale.set(scale,scale,scale);}
  dummy.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),n);dummy.rotateZ(a);dummy.updateMatrix();leaves.setMatrixAt(i,dummy.matrix);
 }
 leaves.instanceMatrix.needsUpdate=true;leaves.castShadow=true;leaves.receiveShadow=true;leaves.userData.fineFoliage=true;leaves.userData.seasonalFoliage=true;crown.add(leaves);
 compact(crown);return g;
}
function lamp(parent,x,z){const g=group(parent,x,.05,z);cylinder(g,0,0,0,.055,.09,1.18,'#6b7667',7);box(g,0,1.18,0,.25,.33,.25,seasonal.glass);cone(g,0,1.51,0,.22,.19,'#65776b',4);for(const a of [-1,1])for(const b of [-1,1])box(g,a*.12,1.18,b*.12,.027,.35,.027,'#687565');}
function pathStone(p,x,z,size=.4){const tone='#'+new T.Color('#d9caa9').offsetHSL(0,0,Math.sin(x*29+z*17)*.035).getHexString();const m=trimBox(p,x,.075,z,size,.045,size*.88,finishMaterial(material(tone),'stone'));m.rotation.y=Math.sin(x*12+z*7)*.18}
export function createIsland(slots){
 const root=new T.Group(),land=group(root),scenery=group(root),dynamic=group(root);root.userData.dynamic=dynamic;
 // Sculpted edges and grass replace the original square voxel grid.
 const r=18.5,n=96,shape=new T.Shape();
 for(let i=0;i<=n;i++){const a=i/n*Math.PI*2,rr=r*(1+.025*Math.sin(a*5)+.018*Math.cos(a*9)),x=Math.cos(a)*rr,z=Math.sin(a)*rr*.82;i?shape.lineTo(x,z):shape.moveTo(x,z)}
 const soilGeo=new T.ExtrudeGeometry(shape,{depth:1.15,steps:1,bevelEnabled:true,bevelThickness:.21,bevelSize:.12,bevelSegments:2,curveSegments:2});soilGeo.rotateX(-Math.PI/2);mesh(land,soilGeo,'#b9a484',0,-1.35,0);
 const grassGeo=new T.ShapeGeometry(shape,2);grassGeo.rotateX(-Math.PI/2);const grass=mesh(land,grassGeo,seasonal.grass,0,.03,0);grass.receiveShadow=true;grass.castShadow=false;
 const shore=mesh(land,new T.CylinderGeometry(1,1,.16,96),material('#d8c798'),0,-1.2,0,18.9,1,15.55);shore.castShadow=false;
 for(let i=0;i<70;i++){const a=i/70*Math.PI*2;const m=mesh(land,icoGeo,i%3?'#b7ac8e':'#c8b89a',Math.cos(a)*18.25,-.54,Math.sin(a)*14.97,.43,.26+(i%4)*.1,.44);m.rotation.set(a,.3,a*.2)}
 // Cobblestone promenade and a sunken pond with a little footbridge.
 for(let i=-15;i<=15;i++){pathStone(scenery,i*.38,0,.35);pathStone(scenery,i*.38,.38,.34)}
 for(let i=-12;i<=12;i++){pathStone(scenery,.02,i*.4,.35);pathStone(scenery,.4,i*.4,.34)}
 const pond=mesh(scenery,new T.CircleGeometry(1,40),seasonal.water,4.23,.09,-2.62,1.73,1.2,1);pond.rotation.x=-Math.PI/2;root.userData.pond=pond;
 for(let i=0;i<19;i++){const a=i/19*Math.PI*2;const m=mesh(scenery,icoGeo,'#bdbb9a',4.23+Math.cos(a)*1.8,.12,-2.62+Math.sin(a)*1.25,.23,.15,.18);m.rotation.y=a}
 const bridge=group(scenery,3.17,.11,-2.65);bridge.rotation.y=-.15;
 for(let i=0;i<9;i++){const z=(i-4)*.22,y=.13+Math.cos((i-4)/5)*.19;box(bridge,0,y,z,.84,.085,.18,'#a98a62');for(const x of [-.44,.44]){box(bridge,x,y,z,.045,.48,.045,'#8e7957');if(i<8)beam(bridge,[x,y+.49,z],[x,.13+Math.cos((i-3)/5)*.19+.49,z+.22],.03,'#9b855e')}}
 for(let i=0;i<7;i++){const a=i*2.4;const pad=mesh(scenery,new T.CircleGeometry(.15,10),material('#83a66e'),4.55+Math.cos(a)*.8,.11,-2.6+Math.sin(a)*.55);pad.rotation.x=-Math.PI/2;if(i%3===0)sphere(scenery,pad.position.x,.17,pad.position.z,.09,.065,.09,seasonal.flower)}
 const spots=[[-5.6,-2.5,1.3,1],[-4.8,-3.9,1.1,0],[-3.4,-4.8,1.4,1],[-1.4,-5,1.1,2],[.7,-5.1,1.2,0],[3.5,-4.8,.8,2],[5.9,.4,1.35,0],[5.2,3.1,1.1,1],[3.6,4.55,1.2,0],[2.7,4.8,.8,1],[-2.1,4.8,1.1,2],[-5.1,4,.85,1],[-6.1,.8,1.1,0]];
 for(const s of spots)tree(dynamic,...s);
 for(let i=0;i<72;i++){
  const a=i*2.399,rr=5.45+(i%5)*.22,x=Math.cos(a)*rr,z=Math.sin(a)*rr*.8;
  if(x>2.5&&z<-1.2)continue;
  sphere(scenery,x,.16,z,.12,.12,.13,seasonal.leaves);if(i%2===0)sphere(scenery,x,.26,z,.08,.06,.08,seasonal.flower);
 }
 for(const [x,z] of [[-3.8,.7],[3.8,.8],[.8,3.7],[.8,-3.8]])lamp(scenery,x,z);
 const bench=group(scenery,-3.85,.07,1.3);for(const x of [-.42,.42]){box(bench,x,0,0,.065,.34,.4,'#798471');box(bench,x,.32,-.16,.05,.4,.05,'#798471')}for(let i=0;i<3;i++)box(bench,0,.33,-.15+i*.14,1.08,.045,.11,'#b99a6d');box(bench,0,.58,-.18,1.08,.15,.06,'#b99a6d');
 // Subtle outlined plots remain usable visual affordances on the lawn.
 const plots=[];for(let i=0;i<slots.length;i++){
  const [x,z]=slots[i],g=group(scenery,x,.09,z);const tile=trimBox(g,0,0,0,2.13,.025,1.97,'#9cac78');tile.receiveShadow=true;
  for(const s of [-1,1])for(const t of [-1,1]){box(g,s*.91,.035,t*.82,.2,.026,.04,'#e5dbb5');box(g,s*.91,.035,t*.82,.04,.026,.2,'#e5dbb5')}
  box(g,0,.05,0,.27,.025,.05,'#d5d5aa');box(g,0,.05,0,.05,.025,.27,'#d5d5aa');g.userData.plot=i;plots.push(g);
 }
 root.userData.plots=plots;compact(land);
 // Keep plots independently hideable while merging the fixed scenery.
 for(const p of plots)p.removeFromParent();compact(scenery);for(const p of plots)scenery.add(p);
 for(const t of dynamic.children)compact(t);
 return root;
}
export function applySeason(root,season,weather){const isSnow=season==='winter'||weather==='snow';root.traverse(o=>{if(o.userData.snow)o.visible=isSnow;if(o.userData.seasonalFoliage)o.visible=!isSnow;});}
export function animateModel(root,time,wind,dusk){root.traverse(o=>{if(o.userData.rotor)o.rotation.z=-time*(.45+wind*.45);if(o.userData.flag){o.rotation.y=Math.sin(time*3+o.position.y)*(.12+wind*.26);o.rotation.z=Math.sin(time*2.7)*.05}if(o.userData.sway){o.rotation.z=Math.sin(time*1.3+o.userData.phase)*(.025+wind*.095);o.rotation.x=Math.cos(time*.9+o.userData.phase)*(.018+wind*.055)}if(o.userData.lantern)o.userData.lantern.intensity=dusk*1.5});}
export function disposeModel(root){root.traverse(o=>{if(o.isMesh&&!o.geometry.userData.shared&&![boxGeo,sphereGeo,icoGeo,tileGeo,pollenGeo].includes(o.geometry))o.geometry.dispose()})}
export {mesh,box,sphere,cylinder,cone,beam,group,roof,windowFrame,door,flowers,fence,tree,lamp,trimBox,snow};
