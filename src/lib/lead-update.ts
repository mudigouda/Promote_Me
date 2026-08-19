import {LeadRecord,normalizeLead} from "./lead-record";
export function updateLead(row:LeadRecord,patch:Partial<LeadRecord>){const clean=normalizeLead(patch);return {...row,...clean,id:row.id,contactId:row.contactId,createdAt:row.createdAt,updatedAt:new Date()};}
