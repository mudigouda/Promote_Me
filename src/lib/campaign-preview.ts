import {renderTemplate} from "./template-variables";
export type Preview={channel:string;recipient:string;body:string;subject?:string};
export function buildPreview(channel:string,recipient:string,body:string,subject?:string):Preview{return {channel,recipient,body,subject};}
export function previewCampaign(body:string,sample:Record<string,unknown>){return renderTemplate(body,sample);}
