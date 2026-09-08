import * as T from './vendor/three.module.min.js';
import {createBuilding,createIsland,applySeason,animateModel,disposeModel,seasonal,material} from './models.js?v=7';
import {GameState,catalog,slots} from './state.js?v=7';
import {createLife,animateLife,dressBuilding,animateCloth,reactTo} from './life.js?v=7';
import {createSky,dayAmount} from './sky.js?v=7';
import {loadArtTextures,updateSurfaceWeather,softParticles} from './surfaces.js?v=7';
import {addFinesse,animateFinesse,finishBuilding,animateBuildingFine} from './finesse.js?v=7';
import {createAdventure} from './adventure.js?v=7';
import {loadDetailTextures,updateDetailWind} from './detail-textures.js?v=7';
const $=id=>document.getElementById(id),canvas=$('world'),state=new GameState();
const mobile=()=>innerWidth<=760;
const seasonData={
 spring:{name:'春',caption:'SPRING · 春日来信',grass:'#9fbd79',leaf:'#97b775',leaf2:'#e3b6bc',flower:'#f2c1c4',water:'#83c8d2',sky:'#c7e2e5'},
 summer:{name:'夏',caption:'SUMMER · 风过青野',grass:'#87ae67',leaf:'#6e9a64',leaf2:'#a9bc76',flower:'#eac881',water:'#60bacc',sky:'#acd4e0'},
 autumn:{name:'秋',caption:'AUTUMN · 金色远行',grass:'#b9b17b',leaf:'#c5a066',leaf2:'#c58663',flower:'#e3b27f',water:'#84b9c0',sky:'#d8dbcf'},
 winter:{name:'冬',caption:'WINTER · 雪落无声',grass:'#e0e8df',leaf:'#9aaa9b',leaf2:'#b5c0b4',flower:'#ccd7da',water:'#b4d5dd',sky:'#d2e0e8'}
};
const weatherNames={sun:'晴天',cloud:'多云',wind:'起风',rain:'下雨',snow:'飘雪'};
let season='spring',weather='wind',weatherChoice='wind',sunHour=16,autoDay=true,autoCycle=false,cycleElapsed=0,worldTime=0,last=performance.now(),nextUI=0;
let azimuth=.72,azimuthTarget=.72,elevation=.69,elevationTarget=.69,zoom=mobile()?.44:.58,zoomTarget=zoom,toastTimer;
let renderer,fineQuality=true;function renderRatio(){return fineQuality?Math.min(mobile()?2:2.5,Math.max(1.75,(devicePixelRatio||1)*1.25)):Math.min(mobile()?1.25:1.5,devicePixelRatio||1);}
try{renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});}catch(error){$('loading').hidden=true;$('renderError').hidden=false;throw error}
renderer.setPixelRatio(renderRatio());renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.08;
await Promise.all([loadArtTextures(renderer),loadDetailTextures(renderer)]).catch(error=>console.warn('Some texture detail is unavailable.',error));
const scene=new T.Scene();scene.background=new T.Color('#c7e2e5');scene.fog=new T.Fog('#c7e2e5',65,145);const outdoorFog=scene.fog,outdoor=new T.Group();scene.add(outdoor);
const camera=new T.OrthographicCamera(-12,12,10,-10,.1,240),target=new T.Vector3(0,.7,0),targetGoal=target.clone();scene.add(camera);const sky=createSky(camera);
const hemisphere=new T.HemisphereLight('#e6f1f4','#b2ad98',2.2);scene.add(hemisphere);
const sun=new T.DirectionalLight('#fff1cf',3.2);sun.position.set(-12,19,9);sun.castShadow=true;sun.shadow.mapSize.set(mobile()?2048:4096,mobile()?2048:4096);Object.assign(sun.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:125});sun.shadow.bias=-.00012;sun.shadow.normalBias=.018;sun.shadow.radius=3;sun.shadow.camera.updateProjectionMatrix();scene.add(sun);scene.add(sun.target);
const fill=new T.DirectionalLight('#cadfea',.45);fill.position.set(8,8,-12);scene.add(fill);
const moonLight=new T.DirectionalLight('#a6bfdc',0);moonLight.position.set(-9,15,7);scene.add(moonLight);
const island=createIsland(slots);outdoor.add(island);const life=createLife(outdoor);const finesse=addFinesse(outdoor,island,slots);
const built=new Map(),bursts=[];
const ring=new T.Mesh(new T.RingGeometry(1.32,1.37,56),new T.MeshBasicMaterial({color:'#ffe39d',transparent:true,opacity:.9,side:T.DoubleSide,depthWrite:false}));ring.rotation.x=-Math.PI/2;ring.position.y=.15;ring.visible=false;outdoor.add(ring);

// Light-responsive ocean with gentle geometric waves and moving specular reflections.
const waterUniforms={uTime:{value:0},uLight:{value:new T.Vector3(-.4,.8,.3)},uColor:{value:new T.Color('#73b9c8')},uSun:{value:new T.Color('#fff0ce')},uStrength:{value:1},uNight:{value:0},uResolution:{value:new T.Vector2(1,1)}};
const seaMaterial=new T.ShaderMaterial({uniforms:waterUniforms,transparent:true,depthWrite:false,vertexShader:`
 varying vec3 vWorld; uniform float uTime;
 void main(){ vec3 p=position; p.y+=sin(p.x*.55+uTime*.55)*.045+cos(p.z*.43+uTime*.4)*.03; vec4 world=modelMatrix*vec4(p,1.);vWorld=world.xyz;gl_Position=projectionMatrix*viewMatrix*world; }
`,fragmentShader:`
 varying vec3 vWorld; uniform float uTime; uniform vec3 uColor; uniform vec3 uLight; uniform vec3 uSun; uniform float uStrength; uniform float uNight; uniform vec2 uResolution;
 void main(){ vec3 n=normalize(vec3(-cos(vWorld.x*.55+uTime*.55)*.025,1.,sin(vWorld.z*.43+uTime*.4)*.013)); vec3 v=normalize(cameraPosition-vWorld);float fresnel=pow(1.-max(dot(n,v),0.),3.); float sparkle=pow(max(dot(n,normalize(uLight+v)),0.),100.); float ripples=sin(vWorld.x*3.2+vWorld.z*2.7+uTime*.65)*sin(vWorld.z*2.4-uTime*.4);vec3 col=uColor*(.9+ripples*.023)+vec3(.13,.17,.15)*fresnel*(1.-uNight*.8)+uSun*sparkle*.32*uStrength;float skyFade=1.-smoothstep(.55,.76,gl_FragCoord.y/uResolution.y);gl_FragColor=vec4(col,skyFade);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }
`});
const seaGeo=new T.PlaneGeometry(190,190,65,65);seaGeo.rotateX(-Math.PI/2);const sea=new T.Mesh(seaGeo,seaMaterial);sea.position.y=-1.12;outdoor.add(sea);
// Thin shoreline ripples are geometric circles, animated at a very low amplitude.
const shoreline=[];for(let i=0;i<3;i++){const m=new T.Mesh(new T.RingGeometry(18.9+i*.4,18.95+i*.4,96),new T.MeshBasicMaterial({color:'#e5f2db',transparent:true,opacity:.21-i*.04,side:T.DoubleSide,depthWrite:false}));m.rotation.x=-Math.PI/2;m.scale.y=.83;m.position.y=-1.075+i*.004;outdoor.add(m);shoreline.push(m)}

const rainCount=mobile()?260:600,rainArray=new Float32Array(rainCount*6),rainSeed=[];
let randomSeed=89437;function rand(){randomSeed=(1664525*randomSeed+1013904223)>>>0;return randomSeed/4294967296}
for(let i=0;i<rainCount;i++)rainSeed.push({x:(rand()-.5)*21,y:rand()*15,z:(rand()-.5)*18,s:.8+rand()*.5});
const rainGeo=new T.BufferGeometry();rainGeo.setAttribute('position',new T.BufferAttribute(rainArray,3));const rain=new T.LineSegments(rainGeo,new T.LineBasicMaterial({color:'#c2dce5',transparent:true,opacity:.6,depthWrite:false}));rain.frustumCulled=false;rain.visible=false;outdoor.add(rain);
const snowCount=mobile()?250:500,snowArray=new Float32Array(snowCount*3),snowSeed=[];
for(let i=0;i<snowCount;i++)snowSeed.push({x:(rand()-.5)*21,y:rand()*15,z:(rand()-.5)*18,s:.4+rand()*.7});
const snowGeo=new T.BufferGeometry();snowGeo.setAttribute('position',new T.BufferAttribute(snowArray,3));
const snowMaterial=new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{pixelRatio:{value:renderer.getPixelRatio()}},vertexShader:`uniform float pixelRatio;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=4.3*pixelRatio;}`,fragmentShader:`void main(){float d=length(gl_PointCoord-.5);float a=1.-smoothstep(.16,.5,d);gl_FragColor=vec4(1.,.997,.96,a*.88);}`});
const snowFall=new T.Points(snowGeo,snowMaterial);snowFall.frustumCulled=false;snowFall.visible=false;outdoor.add(snowFall);
const petalCount=60,petalArray=new Float32Array(petalCount*3);const petalGeo=new T.BufferGeometry();petalGeo.setAttribute('position',new T.BufferAttribute(petalArray,3));const petalMat=softParticles('#f0c9d0',3,.72);const petals=new T.Points(petalGeo,petalMat);petals.frustumCulled=false;outdoor.add(petals);

function updateBuilding(b,celebrate=false){
 if(built.has(b)){const old=built.get(b);outdoor.remove(old);disposeModel(old)}
 const model=createBuilding(b.type,b.level);dressBuilding(model,b.type);finishBuilding(model,b.type,b.level);const [x,z]=slots[b.slot];model.position.set(x,.085,z);model.userData.building=b;outdoor.add(model);built.set(b,model);island.userData.plots[b.slot].visible=false;applySeason(model,season,weather);
 if(celebrate){model.scale.setScalar(.84);model.userData.growing=true;model.userData.growStart=worldTime;createBurst(x,z)}
}
function createBurst(x,z){const a=new Float32Array(60*3),geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(a,3));const m=new T.Points(geo,softParticles('#ffe5a3',3,1,true));m.position.set(x,.6,z);outdoor.add(m);bursts.push({m,start:worldTime})}
for(const b of state.buildings)updateBuilding(b);
const adventure=createAdventure({scene,outdoor,camera,state,
 goTo:(p,z,a,e)=>{targetGoal.set(...p);zoomTarget=z;azimuthTarget=a;elevationTarget=e;},
 captureView:()=>({p:targetGoal.toArray(),zoom:zoomTarget,angle:azimuthTarget,elevation:elevationTarget}),
 notify,getClimate:()=>({season,weather,hour:sunHour}),getTime:()=>worldTime,
 clearSelection:()=>select(null),setIndoor:inside=>{outdoor.visible=!inside;sky.root.visible=!inside;scene.fog=inside?null:outdoorFog;ring.visible=false;}
});

const color=new T.Color(),skyColor=new T.Color(),directColor=new T.Color();
function setSeason(value){season=value;cycleElapsed=0;refreshClimate();notify(`${seasonData[value].name}天来了`)}
function currentAutoWeather(){const sets={spring:['sun','wind','rain'],summer:['sun','cloud','rain'],autumn:['sun','wind','cloud'],winter:['snow','cloud','sun']};return sets[season][Math.floor(cycleElapsed/20)%3]}
function refreshClimate(){
 weather=weatherChoice==='auto'?currentAutoWeather():weatherChoice;const s=seasonData[season],snowy=season==='winter'||weather==='snow';
 seasonal.grass.color.set(snowy?'#e1e8df':s.grass);seasonal.leaves.color.set(s.leaf);seasonal.leaves2.color.set(s.leaf2);seasonal.leafDetail.color.set(s.leaf);seasonal.leafDetail2.color.set(s.leaf2);seasonal.flower.color.set(s.flower);seasonal.water.color.set(snowy?'#bed9df':s.water);seasonal.water.roughness=snowy?.55:weather==='rain'?.48:.26;
 adventure.climate(season,weather);updateSurfaceWeather(weather);applySeason(island,season,weather);for(const model of built.values())applySeason(model,season,weather);
 rain.visible=weather==='rain';snowFall.visible=weather==='snow';petals.visible=(season==='spring'||season==='autumn')&&weather!=='rain'&&weather!=='snow';petalMat.color.set(season==='spring'?'#f1c4cf':'#caa15b');
 $('seasonCaption').textContent=s.caption;$('climateTitle').textContent=`${s.name} · ${weatherNames[weather]}`;
 document.querySelectorAll('[data-season]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.season===season)));
}
function updateLight(dt){
 const overcast=weather==='rain'?.83:weather==='snow'?.65:weather==='cloud'?.55:.08;
 const day=dayAmount(sunHour),night=1-day,altitude=Math.max(0,Math.sin((sunHour-6)/24*Math.PI*2)),warm=(1-T.MathUtils.smoothstep(altitude,.05,.7))*day;
 const theta=(sunHour-6)/24*Math.PI*2;const cx=target.x,cz=target.z;sun.position.set(cx+Math.cos(theta)*37,5+altitude*37,cz+Math.sin(theta)*15-19);sun.target.position.set(cx,0,cz);const shadowHalf=T.MathUtils.clamp(18/zoom,6,25);if(Math.abs(sun.shadow.camera.right-shadowHalf)>.03){Object.assign(sun.shadow.camera,{left:-shadowHalf,right:shadowHalf,top:shadowHalf,bottom:-shadowHalf});sun.shadow.camera.updateProjectionMatrix();}
 directColor.set('#fff2da').lerp(color.set('#efac79'),warm*.72);sun.color.copy(directColor);sun.intensity=T.MathUtils.lerp(sun.intensity,(.45+altitude*2.6)*(1-overcast*.84)*day,Math.min(1,dt*3));
 hemisphere.intensity=.4+day*(1.18-overcast*.08);hemisphere.color.set('#e6f0f2').lerp(color.set('#9cbbdf'),night);hemisphere.groundColor.set('#b3b793').lerp(color.set('#667789'),night);fill.intensity=.12+day*.26;moonLight.intensity=night*(.63-overcast*.26);
 skyColor.set(seasonData[season].sky).lerp(color.set('#b2c4d0'),overcast*.7).lerp(color.set('#d5bfb5'),warm*.58).lerp(color.set('#172c45'),night);scene.background.lerp(skyColor,Math.min(1,dt*3));outdoorFog.color.copy(scene.background);if(adventure.room)scene.background.set(night>.5?'#334758':'#adc2c4');
 seaMaterial.uniforms.uColor.value.lerp(color.set(seasonData[season].water).lerp(new T.Color('#849bab'),overcast*.55).lerp(new T.Color('#b4ac9c'),warm*.27).lerp(new T.Color('#233e5a'),night),Math.min(1,dt*3));waterUniforms.uLight.value.copy(night>.5?moonLight.position:sun.position.clone().sub(sun.target.position)).normalize();waterUniforms.uStrength.value=(1-overcast)*(.3+day*.7);waterUniforms.uSun.value.set(night>.5?'#b3c8e0':'#fff1ce');waterUniforms.uNight.value=night;
 seasonal.glass.emissiveIntensity=.1+night*2+overcast*.12;
 document.body.classList.toggle('night',night>.55);
 return night;
}
function updateWeather(dt){
 const wind=weather==='wind'?1:weather==='rain'?.58:.15;updateDetailWind(worldTime,wind);for(const effect of [rain,snowFall,petals])effect.position.set(target.x,0,target.z);
 if(rain.visible){for(let i=0;i<rainCount;i++){const r=rainSeed[i],y=((r.y-worldTime*9*r.s)%15+15)%15,x=r.x+y*.12;const n=i*6;rainArray[n]=x;rainArray[n+1]=y;rainArray[n+2]=r.z;rainArray[n+3]=x-.11;rainArray[n+4]=y-.55;rainArray[n+5]=r.z}rainGeo.attributes.position.needsUpdate=true}
 if(snowFall.visible){for(let i=0;i<snowCount;i++){const r=snowSeed[i],n=i*3;snowArray[n]=r.x+Math.sin(worldTime*.5+r.z)*.65;snowArray[n+1]=((r.y-worldTime*.85*r.s)%15+15)%15;snowArray[n+2]=r.z+Math.cos(worldTime*.3+r.x)*.42}snowGeo.attributes.position.needsUpdate=true}
 if(petals.visible){for(let i=0;i<petalCount;i++){const r=snowSeed[i],n=i*3;petalArray[n]=((r.x+worldTime*(.25+wind*1.1)+10)%20+20)%20-10;petalArray[n+1]=.4+((r.y-worldTime*.16)%5+5)%5;petalArray[n+2]=r.z*.6+Math.sin(worldTime+i)*.15}petalGeo.attributes.position.needsUpdate=true}
 for(let i=0;i<shoreline.length;i++){const r=shoreline[i];r.scale.set(1+Math.sin(worldTime*.4+i)*.01,.83*(1+Math.sin(worldTime*.4+i)*.01),1)}
 return wind;
}
function resize(){
 renderer.setSize(innerWidth,innerHeight,false);const aspect=innerWidth/innerHeight,viewWidth=(mobile()?18.3:Math.max(22,aspect*16))/zoom;camera.left=-viewWidth/2;camera.right=viewWidth/2;camera.top=viewWidth/aspect/2;camera.bottom=-viewWidth/aspect/2;camera.updateProjectionMatrix();sky.resize(viewWidth,viewWidth/aspect);waterUniforms.uResolution.value.set(innerWidth*renderer.getPixelRatio(),innerHeight*renderer.getPixelRatio());snowMaterial.uniforms.pixelRatio.value=renderer.getPixelRatio();
}
function updateCamera(dt){const k=Math.min(1,dt*8);target.lerp(targetGoal,k);azimuth=T.MathUtils.lerp(azimuth,azimuthTarget,k);elevation=T.MathUtils.lerp(elevation,elevationTarget,k);if(Math.abs(zoom-zoomTarget)>.001){zoom=T.MathUtils.lerp(zoom,zoomTarget,k);resize()}
 camera.position.set(target.x+Math.sin(azimuth)*45*Math.cos(elevation),target.y+45*Math.sin(elevation),target.z+Math.cos(azimuth)*45*Math.cos(elevation));camera.lookAt(target);camera.updateMatrixWorld();
}
function notify(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2600)}
function select(b){if(b)$('placePanel').hidden=true;state.selected=b;$('detail').hidden=!b;if(b){const [x,z]=slots[b.slot];ring.position.set(x,.16,z);ring.visible=true}else ring.visible=false;updateUI()}
function updateUI(){
 $('coins').textContent=Math.floor(state.coins).toLocaleString('zh-CN');$('income').textContent=state.paused?'已暂停':`+${state.income} / 秒`;$('pause').textContent=state.paused?'继续':'暂停';$('gather').disabled=state.paused;
 document.querySelectorAll('[data-build]').forEach(el=>el.disabled=!state.canBuild(el.dataset.build));
 const done=state.buildings.some(b=>b.type==='lighthouse'),count=state.buildings.length;
 $('questTitle').textContent='在小镇走一走';$('questText').textContent='进屋坐坐，或到海边钓一条鱼。';$('progress').style.width=(done?100:Math.min(75,count*25))+'%';$('lightButton').querySelector('small').textContent=done?'已点亮':count>=3?'500 · +30/秒':'建 3 座后解锁';
 const b=state.selected;if(b){$('enterBuilding').hidden=b.type==='garden';const t=catalog[b.type];$('buildingCategory').textContent=`${t.name} · 第 ${b.level} 阶 / 共 5 阶`;$('buildingName').textContent=t.titles[b.level-1];$('stars').textContent='✦'.repeat(b.level)+'✧'.repeat(5-b.level);$('buildingInfo').textContent=`每秒产出 ${t.income*b.level} 金币。`;$('appearance').textContent=b.level<5?`下阶：${t.details[b.level]}`:`已完成：${t.details[4]}`;$('upgrade').textContent=b.level<5?`升级 · ${state.upgradeCost(b)} 金币`:'已达最高阶';$('upgrade').disabled=!state.canUpgrade(b)}
 const clock=Math.floor(sunHour*60)%1440,hour=Math.floor(clock/60),minute=clock%60;$('timeLabel').textContent=`${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}`;$('sunTime').value=String(sunHour);$('dayButton').setAttribute('aria-pressed',String(dayAmount(sunHour)>.5));$('nightButton').setAttribute('aria-pressed',String(dayAmount(sunHour)<=.5));
}
$('gather').onclick=()=>{if(state.paused)return;state.gather();notify('+12 金币');updateUI()};
document.querySelectorAll('[data-build]').forEach(el=>el.onclick=()=>{const b=state.build(el.dataset.build);if(!b)return;updateBuilding(b,true);select(b);notify(`${catalog[b.type].titles[0]}建好了`) });
$('upgrade').onclick=()=>{const b=state.selected;if(!state.upgrade(b))return;updateBuilding(b,true);select(b);notify(`升级完成 · ${catalog[b.type].titles[b.level-1]}`)};
$('enterBuilding').onclick=()=>{const b=state.selected;if(!b||b.type==='garden')return;adventure.enter({id:'built-'+b.slot,name:catalog[b.type].titles[b.level-1],category:'我的小岛建筑',kind:b.type==='house'?(b.level>=4?'villa':'home'):b.type});};
$('buildToggle').onclick=()=>{const open=$('buildDock').hidden;$('buildDock').hidden=!open;$('buildToggle').setAttribute('aria-expanded',String(open));document.body.classList.toggle('build-open',open);};
$('close').onclick=()=>select(null);$('pause').onclick=()=>{state.paused=!state.paused;updateUI()};
$('left').onclick=()=>azimuthTarget-=Math.PI/4;$('right').onclick=()=>azimuthTarget+=Math.PI/4;
function changeZoom(n){zoomTarget=T.MathUtils.clamp(zoomTarget+n,.36,4.2)}$('zoomIn').onclick=()=>changeZoom(.15);$('zoomOut').onclick=()=>changeZoom(-.15);
$('qualityToggle').onclick=()=>{fineQuality=!fineQuality;renderer.setPixelRatio(renderRatio());const size=fineQuality?(mobile()?2048:4096):(mobile()?1024:2048);sun.shadow.mapSize.set(size,size);if(sun.shadow.map){sun.shadow.map.dispose();sun.shadow.map=null;}sun.shadow.needsUpdate=true;finesse.grass.count=fineQuality?finesse.grass.userData.fullCount:Math.floor(finesse.grass.userData.fullCount*.46);outdoor.traverse(o=>{if(o.userData.fineFoliage){if(!o.userData.fullCount)o.userData.fullCount=o.count;o.count=fineQuality?o.userData.fullCount:Math.ceil(o.userData.fullCount*.55);}});$('qualityToggle').textContent=fineQuality?'精细':'流畅';$('qualityToggle').setAttribute('aria-pressed',String(fineQuality));$('qualityToggle').setAttribute('aria-label','切换画质，当前为'+(fineQuality?'精细':'流畅'));resize();};
$('climateToggle').onclick=()=>{const hidden=!$('climateControls').hidden;$('climateControls').hidden=hidden;$('climateToggle').textContent=hidden?'展开':'收起';$('climateToggle').setAttribute('aria-expanded',String(!hidden))};
document.querySelectorAll('[data-season]').forEach(el=>el.onclick=()=>setSeason(el.dataset.season));
$('weather').onchange=e=>{weatherChoice=e.target.value;refreshClimate()};$('sunTime').oninput=e=>{sunHour=Number(e.target.value);autoDay=false;$('dayCycle').checked=false;updateUI()};$('seasonCycle').onchange=e=>{autoCycle=e.target.checked;cycleElapsed=0};
$('dayCycle').onchange=e=>autoDay=e.target.checked;
function setTime(h){sunHour=h;autoDay=false;$('dayCycle').checked=false;updateUI()}
$('dayButton').onclick=()=>setTime(12);$('nightButton').onclick=()=>setTime(22);
const views={all:{p:[0,.7,0],zoom:mobile()?.44:.58,angle:.72,elevation:.75},civic:{p:[-1.5,1,-8.2],zoom:1.1,angle:.2,elevation:.66},market:{p:[-10.4,1,2.7],zoom:1.55,angle:.18,elevation:.66},shops:{p:[9,1,-4.9],zoom:1.24,angle:.28,elevation:.66},homes:{p:[-9,1,6],zoom:1.6,angle:.24,elevation:.67},coast:{p:[2,.5,15],zoom:1.5,angle:.4,elevation:.58},willow:{p:[4.2,1,-2.65],zoom:1.85,angle:.68,elevation:.6},stars:{p:[.3,.8,4.8],zoom:1.85,angle:-.24,elevation:.5}};
document.querySelectorAll('[data-view]').forEach(el=>el.onclick=()=>{adventure.exit();adventure.stopFishing();$('placePanel').hidden=true;const view=views[el.dataset.view];if(el.dataset.view==='stars')setTime(22);targetGoal.set(...view.p);zoomTarget=view.zoom;azimuthTarget=view.angle;elevationTarget=view.elevation;select(null);document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===el)))});
const raycaster=new T.Raycaster(),pointer=new T.Vector2(),touches=new Map();let gesture=null,pinchDistance=0,pinching=false;
canvas.addEventListener('wheel',e=>{e.preventDefault();changeZoom(e.deltaY<0?.07:-.07)},{passive:false});
canvas.addEventListener('pointerdown',e=>{touches.set(e.pointerId,{x:e.clientX,y:e.clientY});canvas.setPointerCapture(e.pointerId);if(touches.size===1){pinching=false;gesture={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,moved:false}}else{pinching=true;if(gesture)gesture.moved=true;const a=[...touches.values()];pinchDistance=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)}});
canvas.addEventListener('pointermove',e=>{if(!touches.has(e.pointerId))return;touches.set(e.pointerId,{x:e.clientX,y:e.clientY});if(touches.size===2){const a=[...touches.values()],d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);changeZoom((d-pinchDistance)*.004);pinchDistance=d;return}if(!gesture||pinching)return;const dx=e.clientX-gesture.lastX,dy=e.clientY-gesture.lastY;if(Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)>5)gesture.moved=true;if(gesture.moved){azimuthTarget-=dx*.008;elevationTarget=T.MathUtils.clamp(elevationTarget+dy*.003,.35,1.03)}gesture.lastX=e.clientX;gesture.lastY=e.clientY});
canvas.addEventListener('pointerup',e=>{
 if(gesture&&!gesture.moved&&!pinching){const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);
  if(adventure.room)adventure.handleRoomRay(raycaster);
  else if(!adventure.fishingOpen){const hits=raycaster.intersectObjects([...life.actors,...built.values(),...adventure.pickables],true);let chosen=null;for(const hit of hits){let node=hit.object;while(node&&!node.userData.building&&!node.userData.actor&&!node.userData.place&&!node.userData.resident)node=node.parent;if(node){chosen=node;break;}}
   if(chosen?.userData.place)adventure.visit(chosen.userData.place);else if(chosen?.userData.resident&&!chosen.userData.actor){select(null);adventure.handleResident(chosen);}else if(chosen?.userData.actor){select(null);notify(reactTo(chosen,worldTime));}else select(chosen?.userData.building||null);
  }
 }
 touches.delete(e.pointerId);if(touches.size===0){gesture=null;pinching=false}
});
canvas.addEventListener('pointercancel',e=>{touches.delete(e.pointerId);gesture=null;pinching=touches.size>0});
canvas.addEventListener('keydown',e=>{if(adventure.key(e))return;if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-','Enter','Escape'].includes(e.key))e.preventDefault();if(e.key==='ArrowLeft')azimuthTarget-=.16;if(e.key==='ArrowRight')azimuthTarget+=.16;if(e.key==='ArrowUp')elevationTarget=Math.min(1.03,elevationTarget+.07);if(e.key==='ArrowDown')elevationTarget=Math.max(.35,elevationTarget-.07);if(e.key==='+')changeZoom(.1);if(e.key==='-')changeZoom(-.1);if(e.key==='Escape')select(null);if(e.key==='Enter'&&state.buildings.length)select(state.buildings[(state.buildings.indexOf(state.selected)+1)%state.buildings.length])});
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();state.paused=true;$('renderError').hidden=false});
addEventListener('resize',resize);document.addEventListener('visibilitychange',()=>last=performance.now());
function frame(now){
 const dt=Math.min((now-last)/1000,.25);last=now;state.tick(dt);if(!state.paused){worldTime+=dt;cycleElapsed+=dt;if(autoDay)sunHour=(sunHour+dt*24/180)%24;if(autoCycle&&cycleElapsed>=60){const names=Object.keys(seasonData);season=names[(names.indexOf(season)+1)%4];cycleElapsed=0;refreshClimate()}if(weatherChoice==='auto'&&weather!==currentAutoWeather())refreshClimate()}
 updateCamera(dt);const dusk=updateLight(dt),wind=updateWeather(dt);waterUniforms.uTime.value=worldTime;sky.update(worldTime,sunHour,weather,wind);animateModel(island,worldTime,wind,dusk);animateLife(life,worldTime,wind,dusk,weather);animateFinesse(finesse,worldTime,wind,dusk,season,weather,life.actors);
 for(const model of built.values()){animateModel(model,worldTime,wind,dusk);animateCloth(model,worldTime,wind);animateBuildingFine(model,worldTime,wind);if(model.userData.growing){const age=worldTime-model.userData.growStart;const s=age<.6?.84+.16*(1-Math.pow(1-age/.6,3)):1;model.scale.setScalar(s);if(age>=.6)model.userData.growing=false}}
 for(let i=bursts.length-1;i>=0;i--){const b=bursts[i],age=worldTime-b.start;if(age>1.8){outdoor.remove(b.m);b.m.geometry.dispose();b.m.material.dispose();bursts.splice(i,1);continue}const a=b.m.geometry.attributes.position.array;for(let j=0;j<60;j++){const angle=j*2.399;a[j*3]=Math.cos(angle)*age*(.3+j%4*.18);a[j*3+1]=age*(2+j%3*.35)-age*age*.75;a[j*3+2]=Math.sin(angle)*age*(.3+j%4*.18)}b.m.geometry.attributes.position.needsUpdate=true;b.m.material.opacity=1-age/1.8}

 adventure.update(dt,worldTime,wind,dusk,season,weather);renderer.render(scene,camera);if(now>=nextUI){updateUI();nextUI=now+140}requestAnimationFrame(frame);
}
refreshClimate();resize();updateCamera(1);updateLight(1);sky.update(0,sunHour,weather,1);animateLife(life,0,1,1-dayAmount(sunHour),weather);updateUI();if(mobile()){$('climateControls').hidden=true;$('climateToggle').textContent='展开';$('climateToggle').setAttribute('aria-expanded','false')}renderer.render(scene,camera);$('loading').style.opacity='0';setTimeout(()=>$('loading').hidden=true,450);requestAnimationFrame(frame);
