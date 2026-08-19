export type HealthCheck={name:string;ok:boolean;detail?:string};
export function summarizeHealth(checks:HealthCheck[]){return {ok:checks.every(x=>x.ok),checks};}
