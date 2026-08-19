export function suggestions(query:string,items:string[],limit=5){const q=query.toLowerCase().trim();return items.filter(x=>x.toLowerCase().includes(q)).slice(0,Math.max(1,limit));}
