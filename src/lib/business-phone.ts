export function hasUsablePhone(phone?:string){if(!phone)return false;const digits=phone.replace(/\D/g,"");return digits.length>=7&&digits.length<=15;}
export function phoneStatus(phone?:string){return hasUsablePhone(phone)?"AVAILABLE":"MISSING_OR_INVALID";}
