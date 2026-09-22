import assert from 'node:assert/strict';
import {GameState,catalog} from './dist/state.js';
import {SaveStore,SAVE_KEY,validateSave} from './dist/save.js';
import {FishingGame,fishSpecies,chooseFish,makeFish} from './dist/fishing.js';
import {resident,strollResident,animateResident,turnResident} from './dist/residents.js';
import * as T from './dist/vendor/three.module.min.js';
const climate={season:'spring',weatherChoice:'wind',sunHour:16,autoDay:true,autoCycle:false};
const memory=()=>{const map=new Map();return {getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v)}};
const snap=(state,fish)=>({version:1,savedAt:Date.now(),state:{coins:state.coins,buildings:state.buildings,gatherCooldown:state.gatherCooldown},fishing:fish.snapshot(),climate});
const state=new GameState();assert.equal(state.income,36);state.tick(60);assert.equal(state.coins,156);state.paused=true;state.tick(60);assert.equal(state.coins,156);assert.equal(state.gather(),0);state.paused=false;assert.equal(state.gather(),3);assert.equal(state.gather(),0);state.tick(8);assert.equal(state.gather(),3);
const b=state.build('garden');assert(b);state.coins=1000;assert(state.upgrade(b));const fish=new FishingGame(()=>.1),storage=memory(),store=new SaveStore(storage);store.load();assert(store.write(snap(state,fish)));const reloaded=new SaveStore(storage).load();assert.equal(reloaded.state.buildings.at(-1).level,2);assert.equal(reloaded.state.coins,state.coins);assert.equal(reloaded.state.gatherCooldown,8);
const earlier=JSON.parse(storage.getItem(SAVE_KEY));state.coins-=1;assert(store.write(snap(state,fish)));storage.setItem(SAVE_KEY,'{corrupt');const recovery=new SaveStore(storage);assert.equal(recovery.load().state.coins,earlier.state.coins);assert(recovery.recovered);
for(const bad of [null,{}, {...earlier,version:9},{...earlier,state:{...earlier.state,coins:NaN}},{...earlier,fishing:{collection:[null]}}])assert.equal(validateSave(bad),false);
const blockedStorage={getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}};const blocked=new SaveStore(blockedStorage);assert.equal(blocked.load(),null);assert.equal(blocked.write(earlier),false);
const raceStorage=memory(),one=new SaveStore(raceStorage),two=new SaveStore(raceStorage);one.load();two.load();assert(one.write(earlier));assert.equal(two.write(earlier),false);assert(two.blocked);
assert.equal(fishSpecies.length,28);assert.equal(new Set(fishSpecies.map(f=>f.id)).size,28);
let all=new Set();for(const spot of ['pier','beach','rocks'])for(let i=0;i<10000;i++)all.add(chooseFish(spot,{season:'summer',weather:'rain',hour:23},()=>i/10000).id);assert.equal(all.size,28);
for(const species of fishSpecies){
 const full=new FishingGame(()=>.5);full.open(species.spots[0]);full.cast({season:'summer',weather:'sun',hour:12});full.fish=species;
 for(let i=0;i<4000&&full.phase!=='caught';i++){if(full.phase==='bite')full.press();if(full.phase==='reel'){if(full.tension>.7)full.release();else if(full.tension<.32)full.press();}full.update(.02);}assert.equal(full.phase,'caught',species.id+' full reel cycle');
 const fg=new FishingGame(()=>.5);fg.fish=species;fg.phase='reel';fg.elapsed=0;fg.tension=.4;fg.progress=.99;fg.danger=0;fg.slack=0;fg.held=true;fg.update(.1);assert.equal(fg.phase,'caught');assert.equal(fg.collection.get(species.id).count,1);
 const restored=new FishingGame();restored.restore(fg.snapshot());assert.equal(restored.catch.fish.id,species.id);const reward=restored.settle(true);assert(reward>species.price*.8);assert.equal(restored.settle(true),0);assert.equal(restored.collection.get(species.id).count,1);
 const model=makeFish(new T.Group(),species);let count=0;model.traverse(m=>{if(m.isMesh){count++;for(const x of m.geometry.attributes.position.array)assert(Number.isFinite(x))}});assert(count>0);
}
const n=resident(new T.Group(),{name:'测试居民'}),path=[[0,0],[2,0],[2,2],[0,2]];let walking=0,resting=0,maxStep=0;for(let i=0;i<1800;i++){const old=n.position.clone();const walk=strollResident(n,path,i/60,1/60,.4);animateResident(n,i/60,walk);if(walk)walking++;else resting++;if(i)maxStep=Math.max(maxStep,old.distanceTo(n.position));}assert(walking>0&&resting>0);assert(maxStep<=.4/60+.000001);
n.rotation.y=Math.PI-.01;turnResident(n,-Math.PI+.01,.016);assert(Math.abs(n.rotation.y-(Math.PI-.01))<.01);
console.log('PASS: slower income, gather cooldown, build/upgrade persistence, corrupt-backup recovery, blocked storage, multi-tab conflict, all 28 encounters and finite models, pending catch restoration and one-time rewards, staggered pauses and smooth turns.');
