const assert=require('node:assert/strict'), vm=require('node:vm'), fs=require('node:fs'), path=require('node:path');
const code=fs.readFileSync(path.join(__dirname,'music.js'),'utf8');
class Element {
 constructor(){this.events={};this.attrs={};this.value='35';this.textContent='';}
 addEventListener(k,f){(this.events[k]||=[]).push(f);}
 emit(k,e={}){for(const f of this.events[k]||[])f({type:k,...e});}
 setAttribute(k,v){this.attrs[k]=v;}
 getAttribute(k){return this.attrs[k];}
 hasAttribute(k){return Object.hasOwn(this.attrs,k);}
 removeAttribute(k){delete this.attrs[k];}
}
function rig({blocked=false,hidden=false,preloaded=false,gameLoading=false}={}){
 const audio=new Element();Object.assign(audio,{paused:true,readyState:0,error:null,pending:[],loads:0});
 Object.defineProperty(audio,'src',{set:v=>audio.attrs.src=v});
 if(preloaded) audio.attrs.src='https://example.test/game/island-canon-fast-v1.m4a';
 audio.load=()=>{audio.loads++;audio.error=null;};
 audio.pause=()=>{audio.paused=true;audio.emit('pause');};
 audio.play=()=>{audio.paused=false;return new Promise((resolve,reject)=>audio.pending.push({resolve,reject}));};
 const button=new Element(),slider=new Element(),status=new Element(),doc=new Element(),win=new Element();
 const loadingScreen=new Element();loadingScreen.hidden=false;loadingScreen.style={opacity:''};
 const elements={loading:gameLoading?loadingScreen:null,islandMusic:audio,musicToggle:button,musicVolume:slider,musicStatus:status};
 doc.currentScript={src:'https://example.test/game/music.js?v=4'};doc.getElementById=k=>elements[k];doc.hidden=hidden;
 Object.defineProperty(win,'AudioContext',{get(){throw new Error('Native music must not use AudioContext');}});
 vm.runInNewContext(code,{document:doc,window:win,URL,Promise,Number,Math,String,localStorage:{getItem:()=>null,setItem(){}}});
 return{audio,button,slider,status,doc,win};
}
const flush=()=>new Promise(r=>setImmediate(r));
const denied=()=>Object.assign(new Error('gesture required'),{name:'NotAllowedError'});
(async()=>{
 const island=rig({gameLoading:true});assert.equal(island.audio.loads,0,'game scripts get startup bandwidth');assert.equal(island.audio.pending.length,0);island.doc.emit('island-ready');assert.equal(island.audio.loads,1);assert.equal(island.audio.pending.length,1,'music starts as soon as the island renders');
 const quick=rig({gameLoading:true});quick.doc.emit('pointerup',{target:{closest:()=>null}});assert.equal(quick.audio.pending.length,1,'capture a gesture before the first game frame');quick.doc.emit('island-ready');assert.equal(quick.audio.pending.length,1,'do not restart native playback already requested by a gesture');
 const earlyButton=rig({gameLoading:true});assert.equal(earlyButton.button.textContent,'♫ 开启音乐');earlyButton.button.emit('click');assert.equal(earlyButton.audio.pending.length,1,'the initial music button starts audio rather than turning it off');
 const early=rig({preloaded:true});assert.equal(early.audio.loads,0,'do not restart a download begun by the HTML parser');
 const a=rig();assert.equal(a.audio.preload,'auto');assert.equal(a.audio.loads,1);
 assert.equal(a.audio.attrs.src,'https://example.test/game/island-canon-fast-v1.m4a');assert.equal(a.audio.pending.length,1);
 a.audio.readyState=4;a.audio.pending[0].resolve();await flush();assert.match(a.status.textContent,/正在播放/);
 a.button.emit('click');assert.equal(a.audio.paused,true);
 a.doc.emit('pointerup');a.doc.emit('click');a.doc.emit('keydown',{key:'ArrowRight'});
 a.doc.hidden=true;a.doc.emit('visibilitychange');a.doc.hidden=false;a.doc.emit('visibilitychange');
 assert.equal(a.audio.pending.length,1,'manual off must survive gestures and tab changes');
 const b=rig({blocked:true});b.audio.pending[0].reject(denied());await flush();
 assert.match(b.status.textContent,/开启声音/);assert.equal(b.button.getAttribute('aria-busy'),'false');
 b.doc.emit('pointerup',{target:{closest:()=>({})}});assert.equal(b.audio.pending.length,1,'music controls must not accidentally unlock');
 b.doc.emit('pointerup',{target:{closest:()=>null}});assert.equal(b.audio.pending.length,2);
 b.audio.readyState=4;b.audio.pending[1].resolve();await flush();assert.match(b.status.textContent,/正在播放/);
 b.slider.value='0';b.slider.emit('input');assert.equal(b.audio.volume,0);assert.equal(b.audio.muted,true);assert.match(b.status.textContent,/音量为零/);
 b.slider.value='55';b.slider.emit('input');assert.equal(b.audio.volume,.55);assert.equal(b.audio.muted,false);
 b.doc.hidden=true;b.doc.emit('visibilitychange');assert.equal(b.audio.paused,true);
 b.doc.hidden=false;b.doc.emit('visibilitychange');b.audio.pending[2].resolve();await flush();assert.equal(b.audio.paused,false);

 const c=rig();c.button.emit('click');c.audio.pending[0].reject(new Error('cancelled'));await flush();
 assert.equal(c.button.textContent,'♫ 开启音乐');assert.equal(c.audio.paused,true);
 const d=rig({hidden:true});assert.equal(d.audio.loads,1);assert.equal(d.audio.pending.length,0);
 d.doc.hidden=false;d.doc.emit('visibilitychange');assert.equal(d.audio.pending.length,1);
 d.audio.pending[0].reject(new Error('network failure'));await flush();assert.equal(d.button.textContent,'♫ 重试音乐');
 d.button.emit('click');d.audio.readyState=4;d.audio.pending[1].resolve();await flush();assert.match(d.status.textContent,/正在播放/);
 console.log('PASS: native audio output without AudioContext, mute visibility, early gesture capture, eager loading/autoplay, blocked-policy fallback, first game gesture, manual-off protection, volume, visibility resume, cancellation, hidden startup and error retry.');
})().catch(e=>{console.error(e);process.exitCode=1;});
