import assert from 'node:assert/strict';
import * as T from './dist/vendor/three.module.min.js';
import {createSky} from './dist/sky.js';
import {createLife,animateLife,wishOnMeteor,reactTo} from './dist/life.js';
const sky=createSky(new T.OrthographicCamera(-12,12,8,-8,.1,240));sky.resize(24,16);
const life=createLife(new T.Group());life.stargazing=true;
const star=life.actors.find(a=>a.userData.actor.role==='astronomer');
sky.setStargazing(true,0);assert.equal(sky.stargazing,true);
assert.equal(sky.update(0,22,'sun',.15).showerStarted,false);
assert.equal(sky.update(1.79,22,'sun',.15).meteorTotal,0);
let fired=sky.update(1.8,22,'sun',.15);assert.equal(fired.showerStarted,true);assert.equal(fired.meteorTotal,6);
const starts=sky.meteors.map(m=>m.start);assert(new Set(starts).size===6);
assert(wishOnMeteor(life,1.8));animateLife(life,1.8,.15,1,'sun');
for(let t=1.9;t<4.5;t+=.1)animateLife(life,t,.15,1,'sun');
const peak=sky.update(4,22,'sun',.15);assert.equal(peak.showerStarted,false);
assert.equal(sky.meteors.filter(m=>m.mesh.visible).length,6,'all six cross together');
assert.equal(reactTo(star,4),star.userData.wishText);
const positions=sky.meteors.map(m=>m.mesh.position.toArray());
sky.update(4,22,'sun',.15);assert.deepEqual(sky.meteors.map(m=>m.mesh.position.toArray()),positions,'paused shower is stable');
for(const m of sky.meteors){assert(m.uniforms.uOpacity.value>0);assert(m.mesh.scale.x>0);}
sky.resize(7.32,14.64);sky.update(4,22,'sun',.15);
for(const m of sky.meteors){assert(Math.abs(m.mesh.position.x)<7.32/2);assert(Math.abs(m.mesh.position.y)<14.64/2);}
sky.update(8,22,'sun',.15);assert(sky.meteors.every(m=>!m.mesh.visible),'pool clears after shower');
assert.equal(sky.update(20,22,'sun',.15).showerStarted,true,'another shower follows');
sky.update(21,12,'sun',.15);assert(sky.meteors.every(m=>!m.mesh.visible),'daylight cancels meteors');
sky.update(22,22,'rain',.5);assert(sky.meteors.every(m=>!m.mesh.visible),'rain cancels meteors');
sky.setStargazing(false,22);assert.equal(sky.stargazing,false);sky.update(23,22,'sun',.15);
assert.equal(sky.update(32,22,'sun',.15).meteorTotal,13,'ambient night returns to one meteor');
console.log('PASS: six staggered meteors, repeat cadence, pause, portrait bounds, daylight/rain cancellation, exit to ambient sky, resident wish integration.');
