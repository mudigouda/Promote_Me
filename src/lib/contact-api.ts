import {normalizeQuery} from "./api-resource";
export function contactQuery(input:{page?:number;pageSize?:number;search?:string}){return normalizeQuery({...input,sort:"createdAt"});}
