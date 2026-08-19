export type TaskPriority="LOW"|"MEDIUM"|"HIGH"|"URGENT";
export function priorityRank(p:TaskPriority){return {LOW:1,MEDIUM:2,HIGH:3,URGENT:4}[p];}
