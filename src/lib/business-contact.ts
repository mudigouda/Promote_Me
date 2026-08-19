import {BusinessResult} from "./business-finder";
export function contactPayload(b:BusinessResult){return {name:b.name,company:b.name,address:b.address||"",phone:b.phone||"",latitude:b.latitude,longitude:b.longitude,source:b.source};}
