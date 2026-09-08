import * as T from './vendor/three.module.min.js';
const fallback=new T.DataTexture(new Uint8Array([180,180,180,255]),1,1,T.RGBAFormat);fallback.needsUpdate=true;
export const detailTextures={textile:{value:fallback},botanical:{value:fallback},textileReady:{value:0},botanicalReady:{value:0},time:{value:0},wind:{value:.5}};
export async function loadDetailTextures(renderer){
 const loader=new T.TextureLoader();
 return Promise.all([['textile','textile-atlas-v6.png'],['botanical','botanical-atlas-v6.png']].map(async([kind,file])=>{
  const texture=await loader.loadAsync(new URL('./assets/'+file,import.meta.url).href);texture.colorSpace=T.SRGBColorSpace;texture.generateMipmaps=true;texture.minFilter=T.LinearMipmapLinearFilter;texture.magFilter=T.LinearFilter;texture.anisotropy=Math.min(16,renderer.capabilities.getMaxAnisotropy());texture.wrapS=texture.wrapT=T.ClampToEdgeWrapping;detailTextures[kind].value=texture;detailTextures[kind+'Ready'].value=1;return texture;
 }));
}
export function updateDetailWind(time,wind){detailTextures.time.value=time;detailTextures.wind.value=wind;}
