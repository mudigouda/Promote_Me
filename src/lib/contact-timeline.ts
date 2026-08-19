export type ContactTimelineItem={id:string;contactId:string;type:string;summary:string;at:Date};
export function contactTimeline(items:ContactTimelineItem[],contactId:string){return items.filter(x=>x.contactId===contactId).sort((a,b)=>b.at.getTime()-a.at.getTime());}
