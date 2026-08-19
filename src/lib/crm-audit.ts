export type CrmAudit={id:string;entity:string;entityId:string;action:string;actorId?:string;at:Date;changes?:Record<string,unknown>};
export function auditEvent(entity:string,entityId:string,action:string,actorId?:string,changes?:Record<string,unknown>):CrmAudit{return {id:crypto.randomUUID(),entity,entityId,action,actorId,at:new Date(),changes};}
