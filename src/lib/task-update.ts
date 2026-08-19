import {TaskRecord} from "./task-record";
export function updateTask(row:TaskRecord,patch:Partial<TaskRecord>){return {...row,...patch,id:row.id,createdAt:row.createdAt,updatedAt:new Date()};}
