import {TaskRecord} from "./task-record";
export function reminderDue(task:TaskRecord,minutesBefore=30,now=new Date()){if(!task.dueAt||task.status==="DONE")return false;const delta=task.dueAt.getTime()-now.getTime();return delta>=0&&delta<=minutesBefore*60000;}
