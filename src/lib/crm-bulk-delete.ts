export function bulkDelete<T extends {id:string}>(rows:T[],ids:Set<string>){return rows.filter(row=>!ids.has(row.id));}
