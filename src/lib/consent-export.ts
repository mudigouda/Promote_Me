import {toCsv} from "./export";
export function exportConsentAudit(rows:Array<{contactId:string;channel:string;action:string;source:string;at:Date}>){return toCsv(rows.map(x=>({...x,at:x.at.toISOString()})));}
