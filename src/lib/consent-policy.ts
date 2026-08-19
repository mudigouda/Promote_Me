export type ConsentPolicy={requiredChannels:string[];allowTransactionalWithoutMarketing:boolean};
export function marketingAllowed(channel:string,granted:boolean,policy:ConsentPolicy){if(!policy.requiredChannels.includes(channel))return true;return granted;}
