export type ResettableStore={clear:()=>void};
export function resetData(stores:ResettableStore[]){stores.forEach(store=>store.clear());return {reset:true,stores:stores.length,at:new Date()};}
