import {ContactRecord} from "./contact-record";
export class ContactRepositoryMemory{private rows=new Map<string,ContactRecord>();list(){return [...this.rows.values()];}get(id:string){return this.rows.get(id)||null;}save(row:ContactRecord){this.rows.set(row.id,row);return row;}remove(id:string){this.rows.delete(id);}}
