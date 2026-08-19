export function exactFilter<T>(rows:T[],field:keyof T,value:unknown){return rows.filter(x=>x[field]===value);}
