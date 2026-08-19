export function sortBy<T>(rows:T[],key:(x:T)=>string|number){return [...rows].sort((a,b)=>String(key(a)).localeCompare(String(key(b)),undefined,{numeric:true}));}
