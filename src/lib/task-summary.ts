import {TaskRecord} from "./task-record";
export function taskSummary(rows:TaskRecord[]){return {total:rows.length,open:rows.filter(x=>x.status==="OPEN").length,done:rows.filter(x=>x.status==="DONE").length,overdue:rows.filter(x=>x.status!=="DONE"&&x.dueAt&&x.dueAt<new Date()).length};}
