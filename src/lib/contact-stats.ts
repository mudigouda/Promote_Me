import {ContactRecord} from "./contact-record";
export function contactStats(rows:ContactRecord[]){return {total:rows.length,withEmail:rows.filter(x=>Boolean(x.email)).length,withPhone:rows.filter(x=>Boolean(x.phone)).length,withCompany:rows.filter(x=>Boolean(x.company)).length};}
