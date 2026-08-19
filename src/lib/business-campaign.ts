import {BusinessResult} from "./business-finder";
export function campaignAudienceFromBusinesses(items:BusinessResult[]){return items.filter(x=>Boolean(x.phone)).map(x=>({name:x.name,phone:x.phone!,company:x.name,source:x.source}));}
