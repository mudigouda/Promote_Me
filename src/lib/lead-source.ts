export type LeadSource="BUSINESS_FINDER"|"IMPORT"|"WEBSITE"|"REFERRAL"|"MANUAL"|"CAMPAIGN";
export function sourceLabel(source:LeadSource){return source.replace(/_/g," ");}
