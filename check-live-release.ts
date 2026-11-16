// Runs without project dependencies in the shared GitHub asset repository.
import {readFileSync} from 'node:fs';
import {Script,runInNewContext} from 'node:vm';
const core=readFileSync('core/vocabCore.js','utf8');
new Script(core);
const version=/VOCAB_CORE_VERSION = '([^']+)'/.exec(core)?.[1];
if(!version)throw new Error('Missing core version');
const helpers=core.slice(0,core.indexOf('var packError'));
for(const code of ['km','pt','ja']){
 const window:Record<string,any>={};
 runInNewContext(readFileSync(`lang/${code}/pack.js`,'utf8'),{window});
 const error=runInNewContext(helpers+';validateVocabPack(L)',{window});
 if(error)throw new Error(`${code}: ${error}`);
 const pack=window['VOCAB_LANG'];
 if(pack.code!==code)throw new Error('Pack identity mismatch');
 if(!pack.backendUrl?.startsWith('https://script.google.com/macros/s/'))throw new Error('Missing Sheet deployment');
 if(!readFileSync(`lang/${code}/pack.css`,'utf8').trim())throw new Error('Missing pack style');
}
console.log(`Shared runtime ${version} and all three packs validated`);