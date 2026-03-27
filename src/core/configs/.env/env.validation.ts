import "dotenv/config";
import { envSchema, IEnvSchema } from "./env.schema";

const env = envSchema.validateSync(process.env) as IEnvSchema;

export { env };
