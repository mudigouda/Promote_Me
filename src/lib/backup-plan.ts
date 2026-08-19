export type BackupPlan={frequency:"DAILY"|"WEEKLY";retentionDays:number;encrypted:boolean;lastRun?:Date};
export function backupReady(plan:BackupPlan){return plan.encrypted&&plan.retentionDays>0;}
