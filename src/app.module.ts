import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { env } from "./core/configs/.env/env.validation";
import { UrlSessionModule } from "./modules/url-session/url-session.module";
import { UserModule } from "./modules/user/user.module";
import { UserUrlModule } from "./modules/user-url/user-url.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(`${env.MONGODB_URI}/${env.MONGODB_DATABASE}`, {
      connectionFactory: (connection) => {
        console.info("Banco de Dados conectado");
        return connection;
      },
    }),
    UserModule,
    UserUrlModule,
    UrlSessionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
