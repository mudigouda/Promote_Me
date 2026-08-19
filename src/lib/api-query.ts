export type ApiQuery={search?:string;page?:number;pageSize?:number;sort?:string;direction?:"asc"|"desc"};
export function normalizeApiQuery(q:ApiQuery){return {...q,search:q.search?.trim(),page:Math.max(1,q.page||1),pageSize:Math.min(500,Math.max(1,q.pageSize||25))};}
