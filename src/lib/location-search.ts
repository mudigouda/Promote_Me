export type LocationQuery={latitude:number;longitude:number;radiusKm:number;category?:string};
export function validLocationQuery(q:LocationQuery){return Number.isFinite(q.latitude)&&Number.isFinite(q.longitude)&&q.radiusKm>0&&q.radiusKm<=100;}
