export function ownedBy<T extends {ownerId?:string}>(rows:T[],ownerId:string){return rows.filter(x=>x.ownerId===ownerId);}
