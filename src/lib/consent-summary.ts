export function consentSummary(records:Array<{channel:string;granted:boolean}>){return records.reduce<Record<string,boolean>>((a,r)=>(a[r.channel]=r.granted,a),{});}
