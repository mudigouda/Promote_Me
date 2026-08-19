import {TaskRecord} from "./task-record";
export function tasksForDay(rows:TaskRecord[],day:Date){return rows.filter(x=>x.dueAt?.toDateString()===day.toDateString()).sort((a,b)=>(a.dueAt?.getTime()||0)-(b.dueAt?.getTime()||0));}
