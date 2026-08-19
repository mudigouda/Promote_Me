import {BusinessResult} from "./business-finder";
export function toggleBusinessSelection(selected:BusinessResult[],item:BusinessResult){const key=`${item.name}|${item.address||item.phone||""}`;const exists=selected.some(x=>`${x.name}|${x.address||x.phone||""}`===key);return exists?selected.filter(x=>`${x.name}|${x.address||x.phone||""}`!==key):[...selected,item];}
