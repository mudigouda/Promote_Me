import {DocumentRecord} from './document-record';
export function searchDocuments(items:DocumentRecord[],q:string){const s=q.trim().toLowerCase();return !s?items:items.filter(x=>[x.name,x.mimeType,x.ownerId,x.contactId,x.dealId].some(v=>String(v||'').toLowerCase().includes(s)));}
