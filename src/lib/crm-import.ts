export function importJson<T>(text:string):T[]{const value=JSON.parse(text);if(!Array.isArray(value))throw new Error("IMPORT_ARRAY_REQUIRED");return value as T[];}
