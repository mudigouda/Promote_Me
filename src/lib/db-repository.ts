export interface Repository<T>{list(query?:Record<string,unknown>):Promise<T[]>;get(id:string):Promise<T|null>;create(input:Partial<T>):Promise<T>;update(id:string,input:Partial<T>):Promise<T>;remove(id:string):Promise<void>}
export type RepositoryResult<T>={data:T[];total:number};
