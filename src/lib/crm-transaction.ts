export function transaction<T>(work:()=>T){try{return {ok:true,value:work()};}catch(error){return {ok:false,error};}}
