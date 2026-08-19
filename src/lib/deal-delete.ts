import {DealRecord} from "./deal-record";
export function deleteDeal(rows:DealRecord[],id:string){return rows.filter(x=>x.id!==id);}
