import {DocumentRecord} from "./document-record";
export function documentsOwnedBy(rows:DocumentRecord[],ownerId:string){return rows.filter(x=>x.ownerId===ownerId);}
