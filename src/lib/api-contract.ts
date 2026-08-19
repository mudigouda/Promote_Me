export type ApiResponse<T>={data:T;error?:never;meta?:Record<string,unknown>}|{data?:never;error:{code:string;message:string};meta?:Record<string,unknown>};
export function ok<T>(data:T,meta?:Record<string,unknown>):ApiResponse<T>{return {data,meta};}
export function fail(code:string,message:string):ApiResponse<never>{return {error:{code,message}};}
