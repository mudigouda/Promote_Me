import {TaskRecord} from "./task-record";
export function deleteTask(rows:TaskRecord[],id:string){return rows.filter(x=>x.id!==id);}
