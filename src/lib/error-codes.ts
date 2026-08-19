export const errorCodes={VALIDATION:"VALIDATION_ERROR",NOT_FOUND:"NOT_FOUND",UNAUTHORIZED:"UNAUTHORIZED",FORBIDDEN:"FORBIDDEN",CONFLICT:"CONFLICT",INTERNAL:"INTERNAL_ERROR"} as const;
export type ErrorCode=typeof errorCodes[keyof typeof errorCodes];
