export type CalendarCampaign={id:string;name:string;scheduledAt:Date;status:string};
export function campaignsForDay(items:CalendarCampaign[],day:Date){return items.filter(x=>x.scheduledAt.toDateString()===day.toDateString()).sort((a,b)=>a.scheduledAt.getTime()-b.scheduledAt.getTime());}
