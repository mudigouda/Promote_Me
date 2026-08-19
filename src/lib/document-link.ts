export type DocumentLink={documentId:string;entityType:"contact"|"lead"|"deal";entityId:string};
export function linkDocument(documentId:string,entityType:DocumentLink["entityType"],entityId:string):DocumentLink{return {documentId,entityType,entityId};}
