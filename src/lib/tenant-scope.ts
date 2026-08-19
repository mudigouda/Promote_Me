export function requireBusinessScope<T extends {businessId?:string}>(rows:T[],businessId:string){return rows.filter(row=>row.businessId===businessId);}
export function assertBusinessScope(resource:{businessId?:string},businessId:string){if(resource.businessId!==businessId)throw new Error("RESOURCE_OUTSIDE_BUSINESS_SCOPE");return resource;}
