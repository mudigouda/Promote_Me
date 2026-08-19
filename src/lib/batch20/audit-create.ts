import {AuditEvent} from './audit-event';
export function audit(action:string,entity:string,entityId:string,actorId?:string):AuditEvent{return {id:crypto.randomUUID(),action,entity,entityId,actorId,at:new Date()};}
