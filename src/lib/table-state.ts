export type TableState={page:number;pageSize:number;search:string;sort:string;direction:"asc"|"desc"};
export const defaultTableState:TableState={page:1,pageSize:25,search:"",sort:"createdAt",direction:"desc"};
export function resetTable(){return {...defaultTableState};}
