const buckets=new Map<string,{count:number;reset:number}>();
export function rateLimit(key:string,limit=60,windowMs=60_000){const now=Date.now(),b=buckets.get(key);if(!b||b.reset<=now){buckets.set(key,{count:1,reset:now+windowMs});return {allowed:true,remaining:limit-1};}b.count++;return {allowed:b.count<=limit,remaining:Math.max(0,limit-b.count),reset:b.reset};}
