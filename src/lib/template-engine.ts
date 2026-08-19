export type Template={name:string;body:string;variables:string[]};
export function renderTemplate(body:string,data:Record<string,string|number|undefined>){return body.replace(/{{\s*([\w.]+)\s*}}/g,(_,key)=>String(data[key]??""));}
export function validateTemplate(body:string,required:string[]){return required.filter(v=>!new RegExp(`{{\\s*${v}\\s*}}`).test(body));}
