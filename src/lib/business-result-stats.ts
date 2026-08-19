import {BusinessResult} from "./business-finder";
export function businessStats(items:BusinessResult[]){return {total:items.length,withPhone:items.filter(x=>Boolean(x.phone)).length,withLocation:items.filter(x=>x.latitude!==undefined&&x.longitude!==undefined).length,withAddress:items.filter(x=>Boolean(x.address)).length};}
