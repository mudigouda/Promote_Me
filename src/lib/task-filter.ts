import {TaskRecord} from "./task-record";
export function filterTasks(rows:TaskRecord[],filters:{status?:TaskRecord["status"];priority?:TaskRecord["priority"];assigneeId?:string}){return rows.filter(x=>(!filters.status||x.status===filters.status)&&(!filters.priority||x.priority===filters.priority)&&(!filters.assigneeId||x.assigneeId===filters.assigneeId));}
