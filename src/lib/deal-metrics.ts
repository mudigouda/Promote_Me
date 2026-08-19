import {DealRecord} from "./deal-record";
export function dealMetrics(rows:DealRecord[]){return {count:rows.length,value:rows.reduce((s,x)=>s+x.value,0),weighted:rows.reduce((s,x)=>s+x.value*x.probability,0)};}
