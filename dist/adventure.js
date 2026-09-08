import * as T from './vendor/three.module.min.js';
import {places,createTown,animateTown} from './town.js?v=8';
import {createInterior,walkRoom,animateInterior} from './interiors.js?v=8';
import {FishingGame,fishSpecies,fishingSpots,createFishingRig,animateFishingRig} from './fishing.js?v=8';
import {greetResident} from './residents.js?v=8';
import {applySeason} from './models.js?v=8';

export function createAdventure({scene,outdoor,camera,state,goTo,captureView,notify,getClimate,getTime,setIndoor,clearSelection}){
 const $=id=>document.getElementById(id),town=createTown(outdoor),game=new FishingGame(),rig=createFishingRig(outdoor);
 let room=null,selected=null,fishingOpen=false,returnView=null,lastPhase='',lastUi=-1;
 const markers=[];for(const p of places){const el=document.createElement('button');el.type='button';el.className='place-marker';el.textContent=p.name;el.setAttribute('aria-label',`前往${p.name}`);el.onclick=()=>visit(p);$('placeMarkers').appendChild(el);markers.push({el,p});}
 const directory=$('directoryList');for(const p of places){const row=document.createElement('button');row.type='button';row.className='destination';row.innerHTML=`<span><small>${p.category}</small><strong>${p.name}</strong><em>${p.info}</em></span><b>前往</b>`;row.onclick=()=>{$('directory').close();visit(p);};directory.appendChild(row);}
 $('directoryOpen').onclick=()=>{$('directory').showModal();};$('directoryClose').onclick=()=>$('directory').close();
 $('placeClose').onclick=()=>{$('placePanel').hidden=true;selected=null;};
 $('placeEnter').onclick=()=>{if(!selected)return;if(selected.kind==='fishing')startFishing(selected.spot);else enter(selected);};
 $('roomExit').onclick=exit;$('fishClose').onclick=stopFishing;
 $('fishBookOpen').onclick=openBook;$('fishBookClose').onclick=()=>$('fishBook').close();$('fishBookButton').onclick=openBook;
 $('fishSell').onclick=()=>{state.coins+=game.settle(true);renderFishing();};$('fishRelease').onclick=()=>{game.settle(false);renderFishing();};
 const action=$('fishAction');
 function fishingAction(){if(state.paused)return;if(game.phase==='bite'||game.phase==='reel')game.press();else game.cast(getClimate());renderFishing();}
 action.addEventListener('pointerdown',e=>{e.preventDefault();action.setPointerCapture?.(e.pointerId);fishingAction();});
 for(const name of ['pointerup','pointercancel','lostpointercapture'])action.addEventListener(name,()=>game.release());
 action.onclick=e=>{if(e.detail===0){fishingAction();game.release();}};
 addEventListener('blur',()=>game.release());
 addEventListener('keydown',e=>{if(!fishingOpen||$('fishBook').open||$('directory').open)return;if(e.code==='Space'){e.preventDefault();if(!e.repeat)fishingAction();}if(e.key==='Escape')stopFishing();});
 addEventListener('keyup',e=>{if(e.code==='Space')game.release();});
 function closePanels(){clearSelection();$('placePanel').hidden=true;selected=null;}
 function visit(p){if(room)exit();if(fishingOpen)stopFishing();closePanels();selected=p;goTo([p.x,1,p.z],p.kind==='road'?1.5:p.kind==='fishing'?1.55:1.6,.33,.67);$('placeCategory').textContent=p.category;$('placeName').textContent=p.name;$('placeInfo').textContent=p.info;$('placeEnter').hidden=p.kind==='road';$('placeEnter').textContent=p.kind==='fishing'?'拿起钓竿':'进入室内';$('placePanel').hidden=false;}
 function enter(p){
  if(room)exit();stopFishing();returnView=captureView();closePanels();room=createInterior(scene,p);setIndoor(true);goTo([0,.35,0],innerWidth<=760?1.52:1.74,.32,.86);document.body.classList.add('interior');$('roomPanel').hidden=false;$('roomName').textContent=p.name;$('roomKind').textContent=p.category||'小镇住宅';$('roomHint').textContent='点地板走动 · 点家具查看或使用';$('roomInfo').textContent='家具和生活用品都可以走近看看。';$('placeMarkers').hidden=true;
 }
 function exit(){if(!room)return;room.dispose();room=null;setIndoor(false);document.body.classList.remove('interior');$('roomPanel').hidden=true;$('placeMarkers').hidden=false;if(returnView)goTo(returnView.p,returnView.zoom,returnView.angle,returnView.elevation);returnView=null;}
 function startFishing(spot='pier'){
  if(room)exit();closePanels();game.open(spot);fishingOpen=true;lastPhase='';rig.root.visible=true;document.body.classList.add('fishing');$('fishingPanel').hidden=false;const s=fishingSpots[spot];goTo([s.x,.3,s.z+1.3],innerWidth<=760?1.6:1.95,.45,.54);$('fishSpot').textContent=s.name;renderFishing();
 }
 function stopFishing(){if(!fishingOpen)return;if(game.catch)game.settle(false);game.cancel();fishingOpen=false;rig.root.visible=false;document.body.classList.remove('fishing');$('fishingPanel').hidden=true;}
 function openBook(){game.release();renderBook();$('fishBook').showModal();}
 function renderBook(){
  $('fishBookCount').textContent=`已遇见 ${game.collection.size} / ${fishSpecies.length} 种`;$('fishBookList').innerHTML='';
  for(const f of fishSpecies){const record=game.collection.get(f.id),el=document.createElement('article');el.className='fish-entry'+(record?' discovered':'');const hint=[f.spots.map(s=>fishingSpots[s].name).join(' · '),f.night?'夜间更容易遇到':f.season?({spring:'春',summer:'夏',autumn:'秋',winter:'冬'}[f.season]+'季更容易遇到'):f.weather==='rain'?'雨天更容易遇到':'全天可遇到'].join(' / ');el.innerHTML=`<div><strong>${f.name}</strong><small>${f.rarity}</small></div><p>${record?`${record.count} 次 · 最大 ${record.best} 厘米`:'尚未钓到'}</p><small>${hint}</small>`;$('fishBookList').appendChild(el);}
 }
 function renderFishing(){
  const phase=game.phase,busy=['casting','waiting'].includes(phase);$('fishMessage').textContent=state.paused?'游戏已暂停，继续后再钓鱼。':game.message;$('fishAction').textContent=phase==='bite'?'咬钩了 · 立刻提竿':phase==='reel'?(game.held?'正在收线 · 松开缓一缓':'按住收线'):busy?'等待咬钩…':phase==='escaped'?'再抛一次':'抛竿';$('fishAction').disabled=state.paused||busy||phase==='caught';$('fishAction').classList.toggle('bite',phase==='bite');$('fishMeters').hidden=phase!=='reel';$('fishActions').hidden=phase==='caught';$('fishResult').hidden=phase!=='caught';
  $('tensionFill').style.width=((game.tension||0)*100)+'%';$('tensionFill').style.background=(game.tension||0)>.85?'#c57b65':'#668f88';$('catchFill').style.width=((game.progress||0)*100)+'%';$('tensionValue').textContent=Math.round((game.tension||0)*100)+'%';$('catchValue').textContent=Math.round((game.progress||0)*100)+'%';
  $('fishCaught').textContent=game.catch?`${game.catch.fish.name} · ${game.catch.size} 厘米`:'';$('fishSell').textContent=game.catch?`售出 · +${game.catch.value} 金币`:'售出';$('fishCollection').textContent=`鱼获手册 ${game.collection.size} / ${fishSpecies.length}`;
 }
 function activateFurniture(item){if(!room)return;const d=item.userData.furniture;walkRoom(room,item.position.x,item.position.z);room.pending=item;$('roomInfo').textContent=`走向${d.label}……`;}
 function handleRoomRay(raycaster){if(!room)return;const hits=raycaster.intersectObjects([room.floor,...room.items,...room.npcs],true);for(const hit of hits){let node=hit.object;while(node&&!node.userData.floor&&!node.userData.furniture&&!node.userData.resident)node=node.parent;if(!node)continue;if(node.userData.floor){walkRoom(room,hit.point.x,hit.point.z);room.pending=null;$('roomInfo').textContent='沿着空地慢慢走。';}else if(node.userData.resident){node.rotation.y=Math.atan2(camera.position.x-node.position.x,camera.position.z-node.position.z);const text=greetResident(node,getTime());$('roomInfo').textContent=text;}else activateFurniture(node);break;}}
 function handleResident(npc){if(npc.userData.fishingSpot){startFishing(npc.userData.fishingSpot);notify('可以开始抛竿了。');}else{const p=npc.getWorldPosition(new T.Vector3());npc.rotation.y=.33;goTo([p.x,.8,p.z],Math.max(2.35,captureView().zoom),.33,.68);notify(greetResident(npc,getTime()));}}
 town.npcs.slice(0,3).forEach((n,i)=>n.userData.fishingSpot=['pier','beach','rocks'][i]);
 function update(dt,time,wind,night,season,weather){
  animateTown(town,time,wind,night,season,weather);animateInterior(room,time,state.paused?0:dt,night);
  if(room&&room.pending&&room.path.length===0){const d=room.pending.userData.furniture;const text=d.action?d.action():d.text;$('roomInfo').textContent=`${d.label}：${text}`;room.pending=null;}
  if(fishingOpen){if(!state.paused&&!$('fishBook').open&&!$('directory').open)game.update(dt);animateFishingRig(rig,game,time);if(game.phase!==lastPhase){lastPhase=game.phase;renderFishing();}}
  if(time-lastUi>.07||state.paused){lastUi=time;if(fishingOpen)renderFishing();updateMarkers();}
 }
 function updateMarkers(){
  if(room)return;const used=[],vw=innerWidth,vh=innerHeight;
  for(const {p,el} of markers){const v=new T.Vector3(p.x, ['hall','church'].includes(p.kind)?5:3.8,p.z).project(camera),x=(v.x+1)*vw/2,y=(1-v.y)*vh/2;const visible=!fishingOpen&&v.z>=-1&&v.z<=1&&x>55&&x<vw-55&&y>80&&y<vh-135&&!used.some(q=>Math.abs(q.x-x)<128&&Math.abs(q.y-y)<37);el.hidden=!visible;if(visible){el.style.transform=`translate(${x}px,${y}px) translate(-50%,-100%)`;used.push({x,y});}}
 }
 function climate(season,weather){applySeason(town.root,season,weather);}
 function key(e){if(!room)return false;if(e.key==='Escape'){exit();return true;}const d={w:[0,-.7],s:[0,.7],a:[-.7,0],d:[.7,0],ArrowUp:[0,-.7],ArrowDown:[0,.7],ArrowLeft:[-.7,0],ArrowRight:[.7,0]}[e.key];if(d){e.preventDefault();walkRoom(room,room.player.position.x+d[0],room.player.position.z+d[1]);room.pending=null;return true;}return false;}
 return {town,game,rig,visit,enter,exit,startFishing,stopFishing,handleRoomRay,handleResident,update,climate,key,updateMarkers,activateFurniture,get room(){return room;},get fishingOpen(){return fishingOpen;},get pickables(){return [...town.buildings,...town.npcs];}};
}
