export function toggleId(ids:string[],id:string){return ids.includes(id)?ids.filter(x=>x!==id):[...ids,id];}
