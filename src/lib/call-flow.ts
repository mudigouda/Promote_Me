export type CallOutcome="CONNECTED"|"NO_ANSWER"|"BUSY"|"CALLBACK"|"WRONG_NUMBER"|"NOT_INTERESTED";
export function nextCallAction(outcome:CallOutcome){if(outcome==="CALLBACK")return "SCHEDULE_CALLBACK";if(outcome==="CONNECTED")return "LOG_RESULT";if(outcome==="NO_ANSWER"||outcome==="BUSY")return "RETRY_LATER";if(outcome==="WRONG_NUMBER")return "SUPPRESS_PHONE";return "CLOSE_LEAD";}
