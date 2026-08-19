export type ResourceQuery={page?:number;pageSize?:number;search?:string;sort?:string;direction?:"asc"|"desc"};
export function normalizeQuery(q:ResourceQuery){return {page:Math.max(1,q.page||1),pageSize:Math.min(100,Math.max(1,q.pageSize||25)),search:(q.search||"").trim(),sort:q.sort||"createdAt",direction:q.direction||"desc"};}
