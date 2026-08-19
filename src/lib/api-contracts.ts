export type ApiError={error:string;code?:string;details?:unknown};
export function ok<T>(data:T){return {data};}
export function fail(error:string,code="BAD_REQUEST"):ApiError{return {error,code};}
