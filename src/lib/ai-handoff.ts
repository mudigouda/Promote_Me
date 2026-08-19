export type HandoffReason="HIGH_INTENT"|"COMPLAINT"|"CALL_REQUEST"|"HUMAN_REQUEST"|"LOW_CONFIDENCE";
export function shouldHandoff(reason:HandoffReason,confidence=1){return reason!=="LOW_CONFIDENCE"||confidence<0.6;}
