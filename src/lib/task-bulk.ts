import {TaskRecord} from "./task-record";
export function completeTasks(rows:TaskRecord[],ids:string[]){const set=new Set(ids);return rows.map(x=>set.has(x.id)?{...x,status:"DONE" as const,updatedAt:new Date()}:x);}
