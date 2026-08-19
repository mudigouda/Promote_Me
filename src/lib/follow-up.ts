export type FollowUp={contactId:string;ownerId:string;channel:string;dueAt:Date;reason:string;status:"OPEN"|"DONE"|"SNOOZED"};
export function dueFollowUps(items:FollowUp[],now=new Date()){return items.filter(x=>x.status==="OPEN"&&x.dueAt<=now);}
