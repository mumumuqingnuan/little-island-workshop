import * as T from './vendor/three.module.min.js';
export function dayAmount(hour){const height=Math.sin((hour-6)/24*Math.PI*2);return T.MathUtils.smoothstep(height,-.12,.2)}
export function createSky(camera){
 const root=new T.Group();camera.add(root);let width=22,height=16;
 const uniforms={uTop:{value:new T.Color('#91c6df')},uBottom:{value:new T.Color('#e2e9dc')}};
 const backdrop=new T.Mesh(new T.PlaneGeometry(1,1),new T.ShaderMaterial({uniforms,depthWrite:false,vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;uniform vec3 uTop;uniform vec3 uBottom;void main(){gl_FragColor=vec4(mix(uBottom,uTop,smoothstep(.28,1.,vUv.y)),1.);\n#include <colorspace_fragment>\n}'}));backdrop.position.z=-130;backdrop.renderOrder=-100;root.add(backdrop);
 let seed=79371;function rand(){seed=(1664525*seed+1013904223)>>>0;return seed/4294967296}
 const starCount=230,starBase=[],positions=new Float32Array(starCount*3),sizes=new Float32Array(starCount),phases=new Float32Array(starCount);
 for(let i=0;i<starCount;i++){starBase.push([(rand()-.5)*.98,.12+rand()*.37]);sizes[i]=1.2+rand()*2.4;phases[i]=rand()*6.28}
 const sg=new T.BufferGeometry();sg.setAttribute('position',new T.BufferAttribute(positions,3));sg.setAttribute('size',new T.BufferAttribute(sizes,1));sg.setAttribute('phase',new T.BufferAttribute(phases,1));
 const starUniforms={uTime:{value:0},uOpacity:{value:0},uPixel:{value:Math.min(globalThis.devicePixelRatio||1,2)}};
 const stars=new T.Points(sg,new T.ShaderMaterial({uniforms:starUniforms,transparent:true,depthWrite:false,vertexShader:'attribute float size;attribute float phase;uniform float uTime;uniform float uPixel;varying float vLight;void main(){vLight=.55+.45*sin(uTime*.9+phase);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=size*uPixel;}',fragmentShader:'uniform float uOpacity;varying float vLight;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.93,.95,1.,(1.-smoothstep(.02,.5,d))*vLight*uOpacity);}'}));stars.frustumCulled=false;root.add(stars);
 const moonUniforms={uOpacity:{value:0}};
 const moon=new T.Mesh(new T.PlaneGeometry(1,1),new T.ShaderMaterial({uniforms:moonUniforms,transparent:true,depthWrite:false,vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;uniform float uOpacity;void main(){vec2 p=(vUv-.5)*2.;float r=dot(p,p);if(r>1.)discard;vec3 n=vec3(p,sqrt(1.-r));float lit=smoothstep(-.13,.37,dot(n,normalize(vec3(-.75,.35,.33))));float crater=sin(p.x*27.+p.y*11.)*sin(p.y*34.-p.x*5.)*.025;vec3 c=mix(vec3(.12,.17,.25),vec3(.98,.94,.78),lit)+crater*lit;gl_FragColor=vec4(c,uOpacity*(1.-smoothstep(.94,1.,r)));}'}));moon.position.z=-105;root.add(moon);
 const sun=new T.Mesh(new T.CircleGeometry(.5,40),new T.MeshBasicMaterial({color:'#f3d59b',transparent:true,opacity:.85,depthWrite:false,toneMapped:false}));sun.position.z=-105;root.add(sun);
 const cloudGeo=new T.SphereGeometry(1,10,7),clouds=[];
 for(let i=0;i<6;i++){const g=new T.Group(),mat=new T.MeshBasicMaterial({color:'#fffbed',transparent:true,opacity:.86,depthWrite:false,toneMapped:false});for(let k=0;k<5;k++){const m=new T.Mesh(cloudGeo,mat);m.position.set((k-2)*.63,Math.sin(k*2+i)*.14,Math.cos(k)*.06);m.scale.set(.8,.3+(k%3)*.09,.3);g.add(m)}g.userData.phase=i/6;g.userData.material=mat;root.add(g);clouds.push(g)}
 // Reuse a small pool: a shower adds at most six draw calls and no per-frame geometry.
 const meteorGeometry=new T.PlaneGeometry(1,1),meteors=[];
 for(let i=0;i<6;i++){
  const uniforms={uOpacity:{value:0}};
  const mesh=new T.Mesh(meteorGeometry,new T.ShaderMaterial({uniforms,transparent:true,depthWrite:false,vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;uniform float uOpacity;void main(){float trail=pow(vUv.x,1.8)*(1.-smoothstep(0.,.5,abs(vUv.y-.5)));float head=exp(-length((vUv-vec2(.92,.5))*vec2(18.,3.))*2.);gl_FragColor=vec4(.99,.95,.79,max(trail,head)*uOpacity);}'}));
  mesh.position.z=-103;mesh.visible=false;mesh.frustumCulled=false;root.add(mesh);meteors.push({mesh,uniforms,start:-100,x:0,y:0,duration:2.6});
 }
 let cloudPhase=0,lastSkyTime=0,nextMeteor=Infinity,wasNight=false,meteorTotal=0,showerTotal=0,stargazing=false;
 function setStargazing(enabled,time){
  if(enabled===stargazing)return;stargazing=enabled;nextMeteor=enabled?time+1.8:time+24;
  for(const m of meteors)m.start=-100;
 }
 function startMeteors(time){
  const count=stargazing?6:1;showerTotal++;
  for(let i=0;i<count;i++){const m=meteors[i];m.start=time+i*.27;m.x=-.05+i*.072+rand()*.04;m.y=.34+rand()*.1;m.duration=3.2+rand()*.4;m.length=.12+rand()*.055;meteorTotal++;}
 }
 function resize(w,h){width=w;height=h;backdrop.scale.set(w*1.02,h*1.02,1);for(let i=0;i<starCount;i++){positions[i*3]=starBase[i][0]*w;positions[i*3+1]=starBase[i][1]*h;positions[i*3+2]=-116}sg.attributes.position.needsUpdate=true;moon.position.set(w*(w/h<.8?-.18:.19),h*(w/h<.8?.4:.355),-105);moon.scale.setScalar(Math.min(w*.065,h*.12));sun.scale.setScalar(Math.min(w*.06,h*.09))}
 function update(time,hour,weather,wind){
  cloudPhase+=Math.min(.25,Math.max(0,time-lastSkyTime))*(.009+wind*.014);lastSkyTime=time;
  const day=dayAmount(hour),night=1-day,cloudiness=weather==='rain'?.95:weather==='snow'?.8:weather==='cloud'?.67:.12;
  const warmth=Math.max(0,1-Math.abs(Math.sin((hour-6)/24*Math.PI*2))/.5)*day;
  uniforms.uTop.value.set('#97cce2').lerp(new T.Color('#d1bac0'),warmth*.6).lerp(new T.Color('#16243c'),night);
  uniforms.uBottom.value.set('#e6eddf').lerp(new T.Color('#e6bd93'),warmth*.6).lerp(new T.Color('#3a5068'),night);
  uniforms.uTop.value.lerp(new T.Color(night?'#26384e':'#adbfc9'),cloudiness*.5);
  starUniforms.uOpacity.value=night*(1-cloudiness*.93);starUniforms.uTime.value=time;stars.visible=night>.08;moon.visible=night>.03;moonUniforms.uOpacity.value=night*(1-cloudiness*.75);
  sun.visible=hour>5.7&&hour<18.5;sun.material.opacity=day*(1-cloudiness*.7);const phase=(hour-6)/12;sun.position.set((phase-.5)*width*.66,(.2+Math.sin(phase*Math.PI)*.16)*height,-105);
  for(let i=0;i<clouds.length;i++){const g=clouds[i],speed=.009+wind*.014;const u=((i/4+cloudPhase)%1.5)-.75;g.position.set(u*width,(.24+(i%3)*.075)*height,-80+i);g.scale.setScalar(width*(.04+(i%2)*.012));g.userData.material.color.set(night?'#526582':'#fff7e8');g.userData.material.opacity=(night?.67:.84)*(weather==='sun'&&i>3?.45:1)}
  const clearNight=night>.78&&cloudiness<.4;let showerStarted=false;
  if(clearNight&&!wasNight)nextMeteor=time+(stargazing?1.8:5+rand()*3);
  if(!clearNight){nextMeteor=Infinity;for(const m of meteors)m.start=-100;}wasNight=clearNight;
  if(clearNight&&time>=nextMeteor){startMeteors(time);nextMeteor=time+(stargazing?14+rand()*4:22+rand()*22);showerStarted=true;}
  for(const m of meteors){const age=time-m.start;const visible=clearNight&&age>=0&&age<m.duration;m.mesh.visible=visible;
   if(visible){const dx=-width*.29,dy=-height*.16,len=width*m.length,angle=Math.atan2(dy,dx),f=age/m.duration;m.mesh.position.set(m.x*width+dx*f-Math.cos(angle)*len/2,(m.y-(height>width*1.3?.18:0))*height+dy*f-Math.sin(angle)*len/2,-103);m.mesh.rotation.z=angle;m.mesh.scale.set(len,Math.max(height*.004,width*.0018),1);m.uniforms.uOpacity.value=Math.pow(Math.sin(f*Math.PI),.65)*.95;}
  }
  return {day,night,meteorTotal,showerTotal,showerStarted};
 }
 return {root,stars,moon,sun,clouds,meteors,setStargazing,resize,update,get stargazing(){return stargazing},get meteorTotal(){return meteorTotal}};
}
