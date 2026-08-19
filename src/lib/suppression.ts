export type Suppression={phone?:string;email?:string;reason:string;createdAt:Date};
export function isSuppressed(contact:{phone?:string|null;email?:string|null},list:Suppression[]){return list.some(x=>(x.phone&&x.phone===contact.phone)||(x.email&&x.email.toLowerCase()===String(contact.email||"").toLowerCase()));}
