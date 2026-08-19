export function scopeRows<T extends {businessId?:string}>(rows:T[],businessId:string){return rows.filter(x=>x.businessId===businessId);}
