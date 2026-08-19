export type Channel = "whatsapp" | "social" | "email" | "calling";
export interface ProviderAdapter { send(input:{to:string;body:string;campaignId?:string}):Promise<{externalId:string;status:string}>; }
const configured=(channel:Channel)=>channel==="whatsapp"?Boolean(process.env.WHATSAPP_ACCESS_TOKEN):channel==="email"?Boolean(process.env.EMAIL_PROVIDER_API_KEY):channel==="social"?Boolean(process.env.META_ACCESS_TOKEN||process.env.X_API_KEY):false;
export const mockProvider:ProviderAdapter={async send(input){return {externalId:`mock-${Date.now()}`,status:"queued"};}};
export function providerFor(channel:Channel):ProviderAdapter{return mockProvider;}
export function providerStatus(channel:Channel){return {channel,configured:configured(channel),mode:configured(channel)?"provider-ready":"mock"};}
