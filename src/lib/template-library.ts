export type MessageTemplate={id:string;name:string;channel:string;body:string;variables:string[]};
const templates:MessageTemplate[]=[];
export function addTemplate(t:MessageTemplate){templates.push(t);return t;}
export function listTemplates(channel?:string){return channel?templates.filter(t=>t.channel===channel):templates;}
