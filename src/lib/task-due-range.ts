import {TaskRecord} from "./task-record";
export function dueBetween(rows:TaskRecord[],from:Date,to:Date){return rows.filter(x=>x.dueAt&&x.dueAt>=from&&x.dueAt<=to);}
