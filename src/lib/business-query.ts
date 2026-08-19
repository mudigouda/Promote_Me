export type BusinessQuery={location:string;category:string;radiusKm:number;requirePhone?:boolean;limit?:number};
export function normalizeBusinessQuery(q:BusinessQuery){return {...q,location:q.location.trim(),category:q.category.trim(),radiusKm:Math.min(100,Math.max(1,q.radiusKm)),limit:Math.min(500,Math.max(1,q.limit||50))};}
