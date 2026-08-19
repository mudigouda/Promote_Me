import {BusinessResult} from "./business-finder";
export function filterBusinesses(items:BusinessResult[],q:{category?:string;hasPhone?:boolean}){return items.filter(x=>(!q.category||x.category?.toLowerCase()===q.category.toLowerCase())&&(!q.hasPhone||Boolean(x.phone)));}
