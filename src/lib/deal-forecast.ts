export type ForecastDeal={value:number;probability:number;stage:string};
export function weightedForecast(deals:ForecastDeal[]){return deals.reduce((sum,d)=>sum+d.value*Math.max(0,Math.min(1,d.probability)),0);}
