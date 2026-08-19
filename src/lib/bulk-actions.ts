export type BulkAction="DELETE"|"ARCHIVE"|"ADD_TO_CAMPAIGN"|"ASSIGN"|"EXPORT";
export function validateBulkAction(action:string,ids:string[]){if(!ids.length)throw new Error("NO_ITEMS_SELECTED");if(!["DELETE","ARCHIVE","ADD_TO_CAMPAIGN","ASSIGN","EXPORT"].includes(action))throw new Error("UNSUPPORTED_BULK_ACTION");return true;}
