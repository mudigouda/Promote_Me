import {TaskRecord} from "./task-record";
export function reopenTask(row:TaskRecord){return {...row,status:"OPEN" as const,updatedAt:new Date()};}
