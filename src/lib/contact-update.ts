import {ContactRecord,normalizeContact} from "./contact-record";
export function updateContact(row:ContactRecord,patch:Partial<ContactRecord>){const clean=normalizeContact(patch);return {...row,...clean,id:row.id,createdAt:row.createdAt,updatedAt:new Date()};}
