export type AnalyticsEvent={name:string;campaignId?:string;contactId?:string;channel?:string;value?:number;at:Date};
export function groupByEvent(events:AnalyticsEvent[]){return events.reduce<Record<string,number>>((a,e)=>(a[e.name]=(a[e.name]||0)+1,a),{});}
