import {BusinessResult} from "./business-finder";
export type SavedBusiness=BusinessResult&{savedAt:Date;listId?:string};
export function saveBusiness(item:BusinessResult,listId?:string):SavedBusiness{return {...item,savedAt:new Date(),listId};}
