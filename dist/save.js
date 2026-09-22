import {catalog,slots} from './state.js?v=18';
export const SAVE_KEY='little-island-progress-v1';
const validNumber=(n,max)=>Number.isFinite(n)&&n>=0&&n<=max;
export function validateSave(s){try{return checkSave(s)}catch{return false}}
function checkSave(s){
 if(!s||s.version!==1||!validNumber(s.savedAt,1e15)||!s.state||!validNumber(s.state.coins,1e12))return false;
 const buildings=s.state.buildings;if(!Array.isArray(buildings)||buildings.length>slots.length)return false;
 const used=new Set();for(const b of buildings){if(!b||!Object.prototype.hasOwnProperty.call(catalog,b.type)||!Number.isInteger(b.slot)||b.slot<0||b.slot>=slots.length||used.has(b.slot)||!Number.isInteger(b.level)||b.level<1||b.level>5)return false;used.add(b.slot)}
 if(!validNumber(s.state.gatherCooldown,8)||!Array.isArray(s.fishing?.collection))return false;
 const seen=new Set();for(const [id,r] of s.fishing.collection){if(typeof id!=='string'||seen.has(id)||!r||!Number.isInteger(r.count)||r.count<1||r.count>1e9||!validNumber(r.best,1e5))return false;seen.add(id)}
 if(s.fishing.pending){const c=s.fishing.pending;if(typeof c.id!=='string'||!validNumber(c.size,1e5)||!validNumber(c.value,1e6)||!['pier','beach','rocks'].includes(c.spot))return false;}
 const c=s.climate;return !!c&&['spring','summer','autumn','winter'].includes(c.season)&&['sun','cloud','wind','rain','snow','auto'].includes(c.weatherChoice)&&validNumber(c.sunHour,24)&&typeof c.autoDay==='boolean'&&typeof c.autoCycle==='boolean';
}
export class SaveStore{
 constructor(storage){this.storage=storage;this.blocked=false;this.error='';this.lastRaw=null;}
 load(){
  try{const raw=this.storage.getItem(SAVE_KEY);this.lastRaw=raw;if(!raw)return null;
   try{const value=JSON.parse(raw);if(validateSave(value))return value;if(value?.version>1){this.blocked=true;this.error='存档来自较新版本，请刷新页面';return null}}catch{}
   const backup=this.storage.getItem(SAVE_KEY+'-backup');if(backup){try{const value=JSON.parse(backup);if(validateSave(value)){this.recovered=true;return value}}catch{}}
   this.blocked=true;this.error='存档无法读取，已保留原记录';return null;
  }catch{this.blocked=true;this.error='浏览器未允许保存，本次进度无法保留';return null}
 }
 write(value){
  if(this.blocked)return false;
  try{if(!validateSave(value))throw Error('Invalid save');
   if(this.storage.getItem(SAVE_KEY)!==this.lastRaw){this.blocked=true;this.error='另一窗口已更新存档，请刷新后继续';return false;}
   if(this.lastRaw){try{if(validateSave(JSON.parse(this.lastRaw)))this.storage.setItem(SAVE_KEY+'-backup',this.lastRaw)}catch{}}
   const raw=JSON.stringify(value);this.storage.setItem(SAVE_KEY,raw);this.lastRaw=raw;this.error='';return true;
  }catch{this.error='保存失败，请保留当前页面后重试';return false}
 }
}
