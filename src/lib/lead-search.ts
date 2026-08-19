import {LeadRecord} from "./lead-record";
export function searchLeads(rows:LeadRecord[],query:string){const q=query.trim().toLowerCase();if(!q)return rows;return rows.filter(x=>[x.id,x.contactId,x.stage,x.ownerId,x.source].some(v=>String(v||"").toLowerCase().includes(q)));}
