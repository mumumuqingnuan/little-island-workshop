const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {pathToFileURL}=require('node:url');
const esbuild=require(process.env.ESBUILD_MODULE||'esbuild');
(async()=>{const dir=fs.mkdtempSync(path.join(os.tmpdir(),'island-tests-'));try{const file=path.join(dir,'test.mjs');esbuild.buildSync({entryPoints:[path.join(__dirname,'test-v17.js')],outfile:file,bundle:true,platform:'node',format:'esm'});await import(pathToFileURL(file).href);}finally{fs.rmSync(dir,{recursive:true,force:true});}})().catch(e=>{console.error(e);process.exitCode=1;});
