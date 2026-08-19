export type CrmPage={page:number;pageSize:number;search:string;sort?:string;direction?:"asc"|"desc"};
export const defaultCrmPage:CrmPage={page:1,pageSize:25,search:"",sort:"createdAt",direction:"desc"};
