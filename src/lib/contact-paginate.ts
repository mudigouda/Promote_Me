import {ContactRecord} from "./contact-record";
export function paginateContacts(rows:ContactRecord[],page=1,size=25){const p=Math.max(1,page),n=Math.max(1,size),start=(p-1)*n;return {items:rows.slice(start,start+n),page:p,size:n,total:rows.length};}
