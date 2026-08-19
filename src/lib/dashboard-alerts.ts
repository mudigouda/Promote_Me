export type Alert={type:"CAMPAIGN_FAILED"|"LEAD_OVERDUE"|"TASK_OVERDUE"|"PROVIDER_DOWN"|"CONSENT_MISSING";message:string;severity:"INFO"|"WARNING"|"CRITICAL"};
export function criticalAlerts(alerts:Alert[]){return alerts.filter(a=>a.severity==="CRITICAL");}
