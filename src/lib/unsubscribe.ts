export type Unsubscribe={contactId:string;channel:string;at:Date;reason?:string};
export function optedOut(contactId:string,channel:string,items:Unsubscribe[]){return items.some(x=>x.contactId===contactId&&x.channel===channel);}
