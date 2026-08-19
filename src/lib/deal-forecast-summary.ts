import {DealRecord} from "./deal-record";
export function dealForecastSummary(rows:DealRecord[]){return {count:rows.length,total:rows.reduce((s,x)=>s+x.value,0),weighted:rows.reduce((s,x)=>s+x.value*x.probability,0)};}
