/* tool-estadiamento-kdigo · ELUCENIA · https://github.com/Elucenia/tool-estadiamento-kdigo
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"estadiamento-kdigo","title":"Estadiamento KDIGO da doença renal crônica","fields":[["tfg","TFG estimada (ou medida)","num",{"min":1,"max":200,"unit":"mL/min/1,73 m²","ph":"52"}],["rac","Relação albumina/creatinina urinária (RAC)","num",{"min":0,"max":10000,"step":0.1,"unit":"mg/g","ph":"45"}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var s=function(a){return a>=90?0:a>=60?1:a>=45?2:a>=30?3:a>=15?4:5};
var d=["G1","G2","G3a","G3b","G4","G5"];
var l=["normal ou alta","levemente diminuída","leve a moderadamente diminuída","moderada a gravemente diminuída","gravemente diminuída","falência renal"];
a.def("estadiamento-kdigo",function(a){var e=s(a.tfg),o=a.rac<30?0:a.rac<=300?1:2,r=[[0,1,2],[0,1,2],[1,2,3],[2,3,3],[3,3,3],[3,3,3]][e][o],i=d[e]+" "+["A1","A2","A3"][o],n=[];return e<=1&&0===o&&n.push("G1 ou G2 com A1 só é doença renal crônica se houver outro marcador de lesão renal (sedimento, imagem, histologia) por mais de 3 meses."),(e>=4||2===o)&&n.push("TFG &lt; 30 ou albuminúria A3: encaminhar ao nefrologista (KDIGO)."),{main:[i,""],label:"Categoria KDIGO (TFG e albuminúria)",level:["low","mid","high","high"][r],verdict:i+": "+["baixo risco","risco moderadamente aumentado","alto risco","muito alto risco"][r],rows:[["TFG",d[e]+" · "+l[e]],["Albuminúria",["A1","A2","A3"][o]+" · "+["normal a levemente aumentada","moderadamente aumentada","gravemente aumentada"][o]],["Monitorização sugerida",[["1*","1","2"],["1*","1","2"],["1","2","3"],["2","3","3"],["3","3","4 ou mais"],["4 ou mais","4 ou mais","4 ou mais"]][e][o]+" vez(es) por ano"]],note:n.join(" "),raw:{g:d[e],a:["A1","A2","A3"][o],risk:r}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
