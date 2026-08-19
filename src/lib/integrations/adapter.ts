export type Channel = "WHATSAPP" | "EMAIL" | "SMS" | "META" | "X";
export type SendRequest = { to:string; body:string; subject?:string; mediaUrl?:string };
export type SendResult = { accepted:boolean; channel:Channel; provider:string; messageId?:string; error?:string };
export interface ChannelAdapter { send(input:SendRequest):Promise<SendResult>; health():Promise<{configured:boolean;provider:string}> }

export function getAdapter(channel:Channel):ChannelAdapter {
  const configured = ({WHATSAPP:process.env.WHATSAPP_ACCESS_TOKEN,EMAIL:process.env.EMAIL_PROVIDER_API_KEY,SMS:process.env.SMS_PROVIDER_API_KEY,META:process.env.META_ACCESS_TOKEN,X:process.env.X_API_KEY} as Record<string,string|undefined>)[channel];
  return { async health(){return {configured:Boolean(configured),provider:channel}}, async send(){ if(!configured)return {accepted:false,channel,provider:channel,error:"Provider credentials are not configured"}; return {accepted:true,channel,provider:channel}; } };
}
