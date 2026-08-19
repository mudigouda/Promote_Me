export type LeadIdentity={email?:string;phone?:string;businessName?:string};
export function duplicateKey(x:LeadIdentity){return (x.email||x.phone||x.businessName||"").trim().toLowerCase();}
export function findDuplicate(existing:LeadIdentity[],candidate:LeadIdentity){const key=duplicateKey(candidate);return existing.findIndex(x=>key&&duplicateKey(x)===key);}
