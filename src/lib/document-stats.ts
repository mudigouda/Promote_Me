import {DocumentRecord} from "./document-record";
export function documentStats(rows:DocumentRecord[]){return {count:rows.length,totalBytes:rows.reduce((s,x)=>s+x.sizeBytes,0)};}
