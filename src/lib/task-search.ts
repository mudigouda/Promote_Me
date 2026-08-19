import {TaskRecord} from "./task-record";
export function searchTasks(rows:TaskRecord[],query:string){const q=query.trim().toLowerCase();return !q?rows:rows.filter(x=>[x.title,x.contactId,x.leadId,x.dealId,x.assigneeId,x.priority,x.status].some(v=>String(v||"").toLowerCase().includes(q)));}
