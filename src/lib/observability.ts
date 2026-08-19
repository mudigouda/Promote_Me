export type Metric={name:string;value:number;tags?:Record<string,string>};
export function timing(name:string,start:number,tags?:Record<string,string>):Metric{return {name,value:Date.now()-start,tags};}
export function counter(name:string,value=1,tags?:Record<string,string>):Metric{return {name,value,tags};}
