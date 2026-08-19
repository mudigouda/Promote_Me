export type Suppression={phone?:string;email?:string;reason:string};
export function isSuppressed(contact:{phone?:string;email?:string},list:Suppression[]){return list.some(x=>(x.phone&&x.phone===contact.phone)||(x.email&&x.email.toLowerCase()===contact.email?.toLowerCase()));}
