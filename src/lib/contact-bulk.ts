import {ContactRecord} from "./contact-record";
export function assignContacts(rows:ContactRecord[],ids:string[],ownerId:string){const set=new Set(ids);return rows.map(x=>set.has(x.id)?{...x,ownerId,updatedAt:new Date()}:x);}
