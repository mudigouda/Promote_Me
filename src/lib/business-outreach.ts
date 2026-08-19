import {BusinessResult} from "./business-finder";
export function outreachReady(b:BusinessResult){return Boolean(b.phone||b.address);}
export function outreachTargets(items:BusinessResult[]){return items.filter(outreachReady);}
