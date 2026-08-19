export type AudienceFilter={field:string;operator:string;value:string};
export function filterContacts<T extends Record<string,unknown>>(contacts:T[],filters:AudienceFilter[]){return contacts.filter(c=>filters.every(f=>String(c[f.field]??"").toLowerCase().includes(f.value.toLowerCase())));}
