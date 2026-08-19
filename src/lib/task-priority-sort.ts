import {TaskRecord} from "./task-record";
export function sortTasks(rows:TaskRecord[]){const rank={LOW:1,MEDIUM:2,HIGH:3,URGENT:4};return [...rows].sort((a,b)=>rank[b.priority]-rank[a.priority||("LOW" as const)]);}
