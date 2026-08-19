import {createHmac,timingSafeEqual} from "crypto";
export function signWebhook(payload:string,secret:string){return createHmac("sha256",secret).update(payload).digest("hex");}
export function verifyWebhook(payload:string,signature:string,secret:string){const expected=signWebhook(payload,secret);if(expected.length!==signature.length)return false;return timingSafeEqual(Buffer.from(expected),Buffer.from(signature));}
