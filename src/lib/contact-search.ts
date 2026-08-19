import {ContactRecord} from "./contact-record";
export function searchContacts(rows:ContactRecord[],query:string){const q=query.trim().toLowerCase();if(!q)return rows;return rows.filter(x=>[x.name,x.email,x.phone,x.company].some(v=>String(v||"").toLowerCase().includes(q)));}
