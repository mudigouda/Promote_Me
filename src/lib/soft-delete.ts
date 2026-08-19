export type SoftDeleted={deletedAt?:Date};
export function softDelete<T extends SoftDeleted>(row:T){return {...row,deletedAt:new Date()};}
export function activeOnly<T extends SoftDeleted>(rows:T[]){return rows.filter(x=>!x.deletedAt);}
