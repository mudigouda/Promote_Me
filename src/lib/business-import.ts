import {dedupeBusinesses,BusinessResult} from "./business-finder";
export function prepareBusinesses(rows:BusinessResult[]){return dedupeBusinesses(rows).filter(x=>x.name.trim()&&x.address?.trim());}
