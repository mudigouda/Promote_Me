export function apiErrorCode(error:unknown){if(error instanceof Error&&error.message.endsWith("_REQUIRED"))return "VALIDATION_ERROR";return "INTERNAL_ERROR";}
