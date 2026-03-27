import { number, object, string } from "yup";

export interface IEnvSchema {
  PORT: number;
  JWT_SECRET: string;
  MONGODB_URI: string;
  MONGODB_DATABASE: string;
  REDIS_HOST: string;
  REDIS_PORT: number;
  SHORT_CODE_ALPHABET: string;
}

export const envSchema = object<IEnvSchema>({
  PORT: number().default(3000).required("PORT is required").transform(Number),
  JWT_SECRET: string().strict().required("JWT_SECRET is required"),
  MONGODB_URI: string().strict().required("MONGODB_URI is required"),
  MONGODB_DATABASE: string().strict().required("MONGODB_DATABASE is required"),
  REDIS_HOST: string().strict().required("REDIS_HOST is required"),
  REDIS_PORT: number()
    .default(6379)
    .required("REDIS_PORT is required")
    .transform(Number),
  SHORT_CODE_ALPHABET: string()
    .strict()
    .length(62, "SHORT_CODE_ALPHABET must have exactly 62 characters")
    .required("SHORT_CODE_ALPHABET is required"),
});
