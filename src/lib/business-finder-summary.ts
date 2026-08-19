import {BusinessResult} from "./business-finder";
export function finderSummary(items:BusinessResult[]){return {total:items.length,categories:[...new Set(items.map(x=>x.category).filter(Boolean))],sources:[...new Set(items.map(x=>x.source))],withPhone:items.filter(x=>Boolean(x.phone)).length};}
