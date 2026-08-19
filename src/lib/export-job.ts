export type ExportJob={id:string;resource:string;status:"QUEUED"|"RUNNING"|"COMPLETED"|"FAILED";createdAt:Date;downloadUrl?:string};
export function startExport(id:string,resource:string):ExportJob{return {id,resource,status:"QUEUED",createdAt:new Date()};}
