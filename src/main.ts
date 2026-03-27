import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { env } from "./core/configs/.env/env.validation";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT);
}

void bootstrap().then(() => {
  console.info(`Server running on port ${env.PORT}`);
});
