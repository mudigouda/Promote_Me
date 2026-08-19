export type CrmActivity={id:string;entity:string;entityId:string;type:string;summary:string;at:Date};
export function createActivity(entity:string,entityId:string,type:string,summary:string):CrmActivity{return {id:crypto.randomUUID(),entity,entityId,type,summary,at:new Date()};}
