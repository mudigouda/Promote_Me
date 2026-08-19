export type DealRecord={id:string;contactId:string;name:string;stage:string;value:number;probability:number;ownerId?:string;expectedClose?:Date;createdAt:Date;updatedAt:Date};
export function normalizeDeal(input:Partial<DealRecord>){return {...input,name:String(input.name||"").trim(),value:Math.max(0,Number(input.value||0)),probability:Math.max(0,Math.min(1,Number(input.probability||0)))}};
