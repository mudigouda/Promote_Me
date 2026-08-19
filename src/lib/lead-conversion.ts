export function conversionRate(leads:number,won:number){return leads>0?won/leads:0;}
export function funnelRates(stages:Record<string,number>){const keys=Object.keys(stages);return Object.fromEntries(keys.map((k,i)=>[k,i===0?1:stages[keys[i-1]]?stages[k]/stages[keys[i-1]]:0]));}
