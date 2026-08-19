import {BusinessResult} from "./business-finder";
export function businessExportRows(items:BusinessResult[]){return items.map(x=>({businessName:x.name,address:x.address||"",latitude:x.latitude??"",longitude:x.longitude??"",phone:x.phone||"",category:x.category||"",source:x.source}));}
