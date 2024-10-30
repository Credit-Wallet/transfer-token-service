export const StatusCode = {
  SUCCESS: { code: 0, type: 'SUCCESS' },
  BACKEND: { code: 500, type: 'BACKEND' },
  NOT_FOUND: { code: 404, type: 'NOT_FOUND' },
  UNAUTHORIZED: { code: 401, type: 'UNAUTHORIZED' },
  FORBIDDEN: { code: 403, type: 'FORBIDDEN' },
  BAD_REQUEST: { code: 400, type: 'BAD_REQUEST' },
  LOGIN_ERROR: { code: 402, type: 'LOGIN_ERROR' },
  VALIDATION_ERROR: { code: 422, type: 'VALIDATION_ERROR' },
  OLD_PASSWORD_IS_INCORRECT: { code: 423, type: 'OLD_PASSWORD_IS_INCORRECT' },
  REGISTER_ERROR: { code: 405, type: 'REGISTER_ERROR' },
  CONFIRM_PASSWORD_IS_INCORRECT: { code: 424, type: 'CONFIRM_PASSWORD_IS_INCORRECT' },
  EXPIRED_OTP: { code: 425, type: 'EXPIRED_TOKEN' },
  SERVICE_NOT_FOUND: { code: 700, type: 'SERVICE_NOT_FOUND' },
  USER_IS_DEACTIVE: { code: 426, type: 'USER_IS_DEACTIVE' },
  MAX_WALLET: { code: 427, type: 'MAX_WALLET' },
  FILE_IS_NOT_VALID: { code: 428, type: 'FILE_IS_NOT_VALID' },
}