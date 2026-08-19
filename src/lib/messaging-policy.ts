export type MessagePolicy={maxLength:number;allowedChannels:string[]};
export function validateMessage(channel:string,body:string,p:MessagePolicy){const errors:string[]=[];if(!p.allowedChannels.includes(channel))errors.push("CHANNEL_NOT_ALLOWED");if(!body.trim())errors.push("EMPTY_MESSAGE");if(body.length>p.maxLength)errors.push("MESSAGE_TOO_LONG");return {valid:errors.length===0,errors};}
