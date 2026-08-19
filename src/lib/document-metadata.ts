export type DocumentMetadata={id:string;name:string;mimeType:string;sizeBytes:number;uploadedBy:string;uploadedAt:Date;tags:string[]};
export function validDocument(m:DocumentMetadata){return m.name.trim().length>0&&m.sizeBytes>=0&&m.mimeType.length>0;}
