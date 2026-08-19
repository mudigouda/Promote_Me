export type ProviderConfig={channel:string;enabled:boolean;configured:boolean;displayName:string};
export function providerStatus(channel:string,displayName=channel):ProviderConfig{return {channel,displayName,enabled:true,configured:Boolean(process.env[`${channel}_API_KEY`]||process.env[`${channel}_ACCESS_TOKEN`])};}
