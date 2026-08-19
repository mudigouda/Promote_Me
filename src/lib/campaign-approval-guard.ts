export function approvalRequired(status:string,requireApproval=true){if(!requireApproval)return false;return status!=="APPROVED";}
