import {TaskRecord} from "./task-record";
export function completeTask(row:TaskRecord){return {...row,status:"DONE" as const,updatedAt:new Date()};}
