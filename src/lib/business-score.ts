export type BusinessScore={rating?:number;distanceKm?:number;hasPhone:boolean;hasAddress:boolean;categoryMatch:boolean};
export function scoreBusiness(x:BusinessScore){return Math.round((x.rating??0)*10+(x.hasPhone?20:0)+(x.hasAddress?15:0)+(x.categoryMatch?35:0)+Math.max(0,20-Math.min(20,x.distanceKm??20)));}
