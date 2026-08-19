export type ActivityEvent={id:string;entityType:string;entityId:string;type:string;summary:string;actorId?:string;at:Date};
export function activity(entityType:string,entityId:string,type:string,summary:string,actorId?:string):ActivityEvent{return {id:crypto.randomUUID(),entityType,entityId,type,summary,actorId,at:new Date()};}
