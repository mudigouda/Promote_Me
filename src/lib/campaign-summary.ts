import {CampaignRecipient} from "./campaign-recipient";
export function campaignSummary(items:CampaignRecipient[]){return items.reduce<Record<string,number>>((a,x)=>(a[x.status]=(a[x.status]||0)+1,a),{});}
