export const UserValidationRules = {
  name: {
    MAX_LENGTH: 100,
    MIN_LENGTH: 5,
  },
  password: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 32,
  },
  age: {
    MIN: 18,
    MAX: 100,
  },
};

export enum USER_STATUS_ENUM {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  CANCELED = "CANCELED",
}

export enum USER_ROLES {
  MEMBER = "MEMBER",
  PREMIUM = "PREMIUM",
  ADM = "ADMINISTRATOR",
}
