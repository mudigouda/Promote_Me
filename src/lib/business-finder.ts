export type BusinessResult={name:string;address?:string;latitude?:number;longitude?:number;phone?:string;category?:string;source:string};
export function dedupeBusinesses(items:BusinessResult[]){const seen=new Set<string>();return items.filter(x=>{const key=`${x.name.toLowerCase()}|${x.address?.toLowerCase()||x.phone||""}`;if(seen.has(key))return false;seen.add(key);return true;});}
