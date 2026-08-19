export function updateIds<T extends {id:string}>(rows:T[],ids:string[],patch:Partial<T>){const set=new Set(ids);return rows.map(x=>set.has(x.id)?{...x,...patch}:x);}
