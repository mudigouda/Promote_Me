import {DealRecord,normalizeDeal} from "./deal-record";
export function updateDeal(row:DealRecord,patch:Partial<DealRecord>){const clean=normalizeDeal(patch);return {...row,...clean,id:row.id,contactId:row.contactId,createdAt:row.createdAt,updatedAt:new Date()};}
