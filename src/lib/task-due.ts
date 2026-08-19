import {TaskRecord} from "./task-record";
export function overdueTasks(rows:TaskRecord[],now=new Date()){return rows.filter(x=>x.status!=="DONE"&&x.dueAt&&x.dueAt<now);}
