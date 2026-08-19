import {DocumentRecord} from "./document-record";
export function searchDocuments(rows:DocumentRecord[],query:string){const q=query.trim().toLowerCase();return !q?rows:rows.filter(x=>x.name.toLowerCase().includes(q)||x.mimeType.toLowerCase().includes(q));}
