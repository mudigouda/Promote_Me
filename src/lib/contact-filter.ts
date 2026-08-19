import {ContactRecord} from "./contact-record";
export function filterContacts(rows:ContactRecord[],f:{ownerId?:string;source?:string}){return rows.filter(x=>(!f.ownerId||x.ownerId===f.ownerId)&&(!f.source||x.source===f.source));}
