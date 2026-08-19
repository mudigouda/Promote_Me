export type BusinessSearch={id:string;location:string;category:string;radiusKm:number;createdAt:Date;resultCount:number};
export function searchLabel(s:BusinessSearch){return `${s.category} near ${s.location}`;}
