export function bulkUpdate<T>(rows:T[],ids:Set<string>,getId:(row:T)=>string,patch:Partial<T>){return rows.map(row=>ids.has(getId(row))?{...row,...patch}:row);}
