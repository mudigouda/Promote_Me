import {ContactRecord} from "./contact-record";
export function mergeContacts(a:ContactRecord,b:ContactRecord){return {...a,email:a.email||b.email,phone:a.phone||b.phone,company:a.company||b.company,updatedAt:new Date()};}
