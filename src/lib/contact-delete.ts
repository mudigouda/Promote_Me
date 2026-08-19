import {ContactRecord} from "./contact-record";
export function deleteContact(rows:ContactRecord[],id:string){return rows.filter(x=>x.id!==id);}
