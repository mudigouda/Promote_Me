import {LeadRecord} from "./lead-record";
export function deleteLead(rows:LeadRecord[],id:string){return rows.filter(x=>x.id!==id);}
