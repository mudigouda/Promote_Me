export type Metrics={contacts:number;leads:number;campaigns:number;sent:number;delivered:number;replies:number;conversions:number;revenue:number};
export function dashboardMetrics(m:Metrics){return {...m,deliveryRate:m.sent?m.delivered/m.sent:0,replyRate:m.sent?m.replies/m.sent:0,conversionRate:m.sent?m.conversions/m.sent:0,revenuePerConversion:m.conversions?m.revenue/m.conversions:0};}
