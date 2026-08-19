export type Task={id:string;title:string;ownerId?:string;contactId?:string;dueAt?:Date;status:"OPEN"|"DONE"};
export function dueTasks(tasks:Task[],now=new Date()){return tasks.filter(t=>t.status==="OPEN"&&t.dueAt&&t.dueAt<=now);}
