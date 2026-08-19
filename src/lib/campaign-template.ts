export type CampaignTemplate={id:string;name:string;channel:string;subject?:string;body:string;variables:string[]};
export function templateReady(t:CampaignTemplate){return Boolean(t.name.trim()&&t.body.trim()&&t.channel);}
