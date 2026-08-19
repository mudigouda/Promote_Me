export type ConsentAudit={contactId:string;channel:string;action:"GRANTED"|"REVOKED";source:string;at:Date};
export function latestConsent(audits:ConsentAudit[],contactId:string,channel:string){return audits.filter(x=>x.contactId===contactId&&x.channel===channel).sort((a,b)=>b.at.getTime()-a.at.getTime())[0]||null;}
