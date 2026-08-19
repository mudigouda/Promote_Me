export type RevenueRecord={amount:number;currency:string;status:"PENDING"|"WON"|"REFUNDED";at:Date};
export function totalWon(records:RevenueRecord[]){return records.filter(x=>x.status==="WON").reduce((s,x)=>s+x.amount,0);}
