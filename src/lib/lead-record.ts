export type LeadRecord={id:string;contactId:string;stage:string;score:number;value:number;ownerId?:string;source?:string;createdAt:Date;updatedAt:Date};
export function normalizeLead(input:Partial<LeadRecord>):Partial<LeadRecord>{return {...input,score:Math.max(0,Math.min(100,Number(input.score||0))),value:Math.max(0,Number(input.value||0))};}
