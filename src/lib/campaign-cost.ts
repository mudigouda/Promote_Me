export type CostInput={sent:number;costPerMessage:number;setupCost?:number};
export function estimateCampaignCost(x:CostInput){return x.sent*x.costPerMessage+(x.setupCost||0);}
export function costPerConversion(cost:number,conversions:number){return conversions>0?cost/conversions:0;}
export function roi(revenue:number,cost:number){return cost>0?(revenue-cost)/cost:0;}
