export type AuditEvent={id:string;action:string;entity:string;entityId:string;actorId?:string;at:Date;metadata?:Record<string,unknown>};
export function audit(action:string,entity:string,entityId:string,actorId?:string,metadata?:Record<string,unknown>):AuditEvent{return {id:crypto.randomUUID(),action,entity,entityId,actorId,at:new Date(),metadata};}
