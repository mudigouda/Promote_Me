import {BusinessResult} from "./business-finder";
export function dedupeBusinessResults(items:BusinessResult[]){const seen=new Set<string>();return items.filter(x=>{const key=`${x.name.trim().toLowerCase()}|${(x.address||"").trim().toLowerCase()}|${x.phone||""}`;if(seen.has(key))return false;seen.add(key);return true;});}
