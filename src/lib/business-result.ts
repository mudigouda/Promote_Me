import {BusinessResult} from "./business-finder";
export function businessResultRow(x:BusinessResult){return {businessName:x.name,address:x.address||"",phone:x.phone||"",latitude:x.latitude??null,longitude:x.longitude??null,category:x.category||"",source:x.source};}
