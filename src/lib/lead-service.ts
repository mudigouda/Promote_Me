import {LeadRecord,normalizeLead} from "./lead-record";
export function createLead(input:Partial<LeadRecord>):LeadRecord{const now=new Date();const x=normalizeLead(input);return {id:input.id||crypto.randomUUID(),contactId:String(input.contactId||""),stage:input.stage||"NEW",score:x.score||0,value:x.value||0,ownerId:input.ownerId,source:input.source,createdAt:now,updatedAt:now};}
