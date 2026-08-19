export const productionChecks=["DATABASE_PERSISTENCE","AUTHENTICATION","PROVIDER_CREDENTIALS","WEBHOOK_VERIFICATION","QUEUE_WORKER","RATE_LIMITING","AUDIT_LOGGING","BACKUPS","MONITORING","TESTS"] as const;
export type ProductionCheck=typeof productionChecks[number];
export function checklistStatus(done:Partial<Record<ProductionCheck,boolean>>){return productionChecks.map(name=>({name,done:done[name]===true}));}
