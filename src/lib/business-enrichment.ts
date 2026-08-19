import {BusinessResult} from "./business-finder";
export function enrichBusiness(base:BusinessResult,extra:Partial<BusinessResult>):BusinessResult{return {...base,...extra,name:extra.name||base.name,address:extra.address||base.address,phone:extra.phone||base.phone};}
