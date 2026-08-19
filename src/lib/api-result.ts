export function pageResult<T>(items:T[],page:number,pageSize:number){return {items,page,pageSize,total:items.length};}
