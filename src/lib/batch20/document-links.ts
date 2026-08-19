import {DocumentRecord} from './document-record';
export function documentsForContact(items:DocumentRecord[],contactId:string){return items.filter(x=>x.contactId===contactId);}
export function documentsForDeal(items:DocumentRecord[],dealId:string){return items.filter(x=>x.dealId===dealId);}
