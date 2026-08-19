export function chunk<T>(rows:T[],size=100){const n=Math.max(1,Math.min(1000,size));const out:T[][]=[];for(let i=0;i<rows.length;i+=n)out.push(rows.slice(i,i+n));return out;}
