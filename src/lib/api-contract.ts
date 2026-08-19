export type ApiMeta={page?:number;pageSize?:number;total?:number;requestId?:string};
export type ApiResponse<T>={data:T;error?:never;meta?:ApiMeta}|{data?:never;error:{code:string;message:string};meta?:ApiMeta};
export function ok<T>(data:T,meta?:ApiMeta):ApiResponse<T>{return {data,meta};}
export function fail(code:string,message:string,meta?:ApiMeta):ApiResponse<never>{return {error:{code,message},meta};}
