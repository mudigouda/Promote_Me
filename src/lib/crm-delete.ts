export function removeById<T extends {id:string}>(rows:T[],id:string){return rows.filter(x=>x.id!==id);}
