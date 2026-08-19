import {DocumentRecord} from "./document-record";
export function deleteDocument(rows:DocumentRecord[],id:string){return rows.filter(x=>x.id!==id);}
