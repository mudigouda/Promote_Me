export function removeIds<T extends {id:string}>(rows:T[],ids:string[]){const set=new Set(ids);return rows.filter(x=>!set.has(x.id));}
