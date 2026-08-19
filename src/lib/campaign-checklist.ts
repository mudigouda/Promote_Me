export type CampaignChecklist={audience:boolean;template:boolean;consent:boolean;approval:boolean;schedule:boolean};
export function campaignReady(c:CampaignChecklist){return Object.values(c).every(Boolean);}
