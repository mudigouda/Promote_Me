export function filterByOwner<T extends {ownerId?:string}>(rows:T[],ownerId?:string){return ownerId?rows.filter(x=>x.ownerId===ownerId):rows;}
