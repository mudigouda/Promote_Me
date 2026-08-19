export type CampaignRow={campaignId:string;name:string;status:string;sent:number;delivered:number;replied:number;converted:number;revenue:number};
export function campaignSummary(rows:CampaignRow[]){return rows.map(r=>({...r,deliveryRate:r.sent?r.delivered/r.sent:0,replyRate:r.sent?r.replied/r.sent:0,conversionRate:r.sent?r.converted/r.sent:0}));}
