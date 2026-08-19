import {BusinessResult} from "./business-finder";
export type BusinessList={id:string;name:string;items:BusinessResult[];createdAt:Date};
export function createBusinessList(id:string,name:string,items:BusinessResult[]):BusinessList{return {id,name,items:[...items],createdAt:new Date()};}
