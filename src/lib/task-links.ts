import {TaskRecord} from "./task-record";
export function linkedEntity(task:TaskRecord){if(task.dealId)return {type:"deal",id:task.dealId};if(task.leadId)return {type:"lead",id:task.leadId};if(task.contactId)return {type:"contact",id:task.contactId};return null;}
