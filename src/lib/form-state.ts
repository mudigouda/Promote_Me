export type FormState<T>={values:T;errors:Record<string,string>;submitting:boolean;dirty:boolean};
export function clearErrors<T>(state:FormState<T>){return {...state,errors:{}};}
