export type Approval={status:"PENDING"|"APPROVED"|"REJECTED";reviewerId?:string;note?:string;at?:Date};
export function approve(a:Approval,reviewerId:string,note?:string){return {...a,status:"APPROVED" as const,reviewerId,note,at:new Date()};}
export function reject(a:Approval,reviewerId:string,note?:string){return {...a,status:"REJECTED" as const,reviewerId,note,at:new Date()};}
