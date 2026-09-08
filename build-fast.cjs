// Rebuild the public fast entry without modifying the archived modular game.
// npm install --no-save esbuild@0.27.7 && node build-fast.cjs
const fs = require('node:fs/promises');
const path = require('node:path');
const esbuild = require(process.env.ESBUILD_MODULE || 'esbuild');

esbuild.build({
  absWorkingDir: __dirname,
  entryPoints: ['dist/game.js'],
  outfile: 'game-fast-v1.js',
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2020'],
  legalComments: 'inline',
  plugins: [{ name: 'fast-assets', setup(build) {
    build.onLoad({ filter: /\/game\.js$/ }, async args => {
      let code = await fs.readFile(args.path, 'utf8');
      const textureStart = "void Promise.all([loadArtTextures(renderer),loadDetailTextures(renderer)]).catch(error=>console.warn('Some texture detail is unavailable.',error));";
      if (!code.includes(textureStart) || !code.includes("$('loading').style.opacity='0';")) throw new Error('Game startup changed; review the fast-entry integration.');
      code = code.replace(textureStart, `function queueTextureDetail(){
        const song=document.getElementById('islandMusic');let started=false,timer;
        const start=()=>{if(started)return;started=true;clearTimeout(timer);
          if(song){song.removeEventListener('canplay',start);song.removeEventListener('error',start);}
          ${textureStart}
        };
        if(!song || song.readyState>=3){start();return;}
        song.addEventListener('canplay',start,{once:true});song.addEventListener('error',start,{once:true});
        timer=setTimeout(start,1500);
      }`);
      code = code.replace("$('loading').style.opacity='0';", "$('loading').style.opacity='0';document.dispatchEvent(new Event('island-ready'));queueTextureDetail();");
      return { contents: code, loader: 'js', resolveDir: path.dirname(args.path) };
    });
    build.onLoad({ filter: /\/(surfaces|detail-textures)\.js$/ }, async args => {
      let code = await fs.readFile(args.path, 'utf8');
      code = code.replace('./assets/handpaint-atlas.webp', '../paint-fast-v1.webp')
        .replace("'./assets/'+file", "'../'+file")
        .replace('textile-atlas-v6.webp', 'textile-fast-v1.webp')
        .replace('botanical-atlas-v6.webp', 'botanical-fast-v1.webp')
        .replaceAll('import.meta.url', 'document.baseURI');
      // The entry's base points to dist/; optimized assets are one level above.
      return { contents: code, loader: 'js', resolveDir: path.dirname(args.path) };
    });
  }}],
}).then(async () => {
  // Deliver the startup code in the document response: no extra script round trip.
  const bundleFile = path.join(__dirname, 'game-fast-v1.js');
  const bundle = (await fs.readFile(bundleFile, 'utf8')).replace(/[\t ]+$/gm, '').replace(/<\/script/gi, '<\\/script');
  await fs.writeFile(bundleFile, bundle);
  const entry = path.join(__dirname, 'index.html');
  let html = await fs.readFile(entry, 'utf8');
  html = html.replace('<link rel="modulepreload" href="../game-fast-v1.js">\n', '');
  const inline = '<!-- fast-game:start --><script type="module">\n' + bundle + '\n</script><!-- fast-game:end -->';
  html = html.includes('<!-- fast-game:start -->')
    ? html.replace(/<!-- fast-game:start -->[\s\S]*?<!-- fast-game:end -->/, () => inline)
    : html.replace('<script type="module" src="../game-fast-v1.js"></script>', () => inline);
  await fs.writeFile(entry, html);
}).catch(error => { console.error(error); process.exitCode = 1; });
