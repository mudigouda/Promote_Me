import {CrmActivity} from "./crm-activity";
export function timeline(rows:CrmActivity[],entity:string,entityId:string){return rows.filter(x=>x.entity===entity&&x.entityId===entityId).sort((a,b)=>b.at.getTime()-a.at.getTime());}
