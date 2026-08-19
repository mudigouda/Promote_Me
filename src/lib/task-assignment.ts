import {TaskRecord} from "./task-record";
export function assignTask(row:TaskRecord,assigneeId:string){return {...row,assigneeId,updatedAt:new Date()};}
