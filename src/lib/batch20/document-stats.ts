import {DocumentRecord} from './document-record';
export function documentStats(items:DocumentRecord[]){return {count:items.length,totalBytes:items.reduce((n,x)=>n+x.sizeBytes,0),mimeTypes:[...new Set(items.map(x=>x.mimeType))]};}
