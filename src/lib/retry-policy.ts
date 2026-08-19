export type RetryPolicy={maxAttempts:number;baseDelayMs:number;maxDelayMs:number};
export function nextRetry(attempt:number,p:RetryPolicy={maxAttempts:5,baseDelayMs:1000,maxDelayMs:60000}){if(attempt>=p.maxAttempts)return null;return Math.min(p.maxDelayMs,p.baseDelayMs*2**attempt);}
