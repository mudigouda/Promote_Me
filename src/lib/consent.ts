export type ConsentRecord={channel:string;granted:boolean;source:string;at:Date};
export function canContact(records:ConsentRecord[],channel:string){const r=records.filter(x=>x.channel===channel).sort((a,b)=>b.at.getTime()-a.at.getTime())[0];return Boolean(r?.granted);}
