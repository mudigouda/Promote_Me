const keys=new Map<string,number>();
export function claimIdempotency(key:string,ttlMs=86400000){const now=Date.now(),expires=keys.get(key);if(expires&&expires>now)return false;keys.set(key,now+ttlMs);return true;}
