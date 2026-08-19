import {DealRecord} from "./deal-record";
export function searchDeals(rows:DealRecord[],query:string){const q=query.trim().toLowerCase();if(!q)return rows;return rows.filter(x=>[x.name,x.contactId,x.stage,x.ownerId].some(v=>String(v||"").toLowerCase().includes(q)));}
