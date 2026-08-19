export type AuditEntry={actorId:string;action:string;resource:string;resourceId?:string;at:Date;metadata?:Record<string,unknown>};
export function auditEntry(actorId:string,action:string,resource:string,resourceId?:string,metadata?:Record<string,unknown>):AuditEntry{return {actorId,action,resource,resourceId,at:new Date(),metadata};}
