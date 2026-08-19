export type CampaignMetrics={sent:number;delivered:number;replied:number;converted:number;revenue:number;cost:number};
export function metrics(m:CampaignMetrics){return {...m,deliveryRate:m.sent?m.delivered/m.sent:0,replyRate:m.sent?m.replied/m.sent:0,conversionRate:m.sent?m.converted/m.sent:0,roi:m.cost?(m.revenue-m.cost)/m.cost:0};}
