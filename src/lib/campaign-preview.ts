export type Preview={channel:string;recipient:string;body:string;subject?:string};
export function buildPreview(channel:string,recipient:string,body:string,subject?:string):Preview{return {channel,recipient,body,subject};}
