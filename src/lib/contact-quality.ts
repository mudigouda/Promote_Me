import {ContactRecord} from "./contact-record";
export function contactQuality(c:ContactRecord){return {hasEmail:Boolean(c.email),hasPhone:Boolean(c.phone),hasCompany:Boolean(c.company),score:(c.email?1:0)+(c.phone?1:0)+(c.company?1:0)};}
