export function requireFound<T>(value:T|null|undefined,message="Resource not found"){if(value==null)throw new Error(message);return value;}
