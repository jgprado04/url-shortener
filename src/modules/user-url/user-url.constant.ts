export const UserUrlValidationRules = {
  originalUrl: {
    MAX_LENGTH: 2048,
  },
  shortCode: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 32,
  },
  accessCount: {
    MIN: 0,
  },
};

export enum UserUrlStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
