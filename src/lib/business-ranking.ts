export type BusinessRankInput={rating?:number;distanceKm?:number;hasPhone?:boolean;categoryMatch?:boolean};
export function rankBusiness(x:BusinessRankInput){return (x.categoryMatch?40:0)+(x.hasPhone?20:0)+Math.max(0,20-Math.min(20,x.distanceKm??20))+(x.rating??0)*4;}
