export type TimelineEvent={type:string;subject:string;at:Date;metadata?:Record<string,unknown>};
export function sortTimeline(events:TimelineEvent[]){return [...events].sort((a,b)=>b.at.getTime()-a.at.getTime());}
