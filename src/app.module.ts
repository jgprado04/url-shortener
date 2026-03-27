import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { env } from "./core/configs/.env/env.validation";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(`${env.MONGODB_URI}/${env.MONGODB_DATABASE}`, {
      connectionFactory: (connection) => {
        connection.on("connected", () => {
          console.info("MongoDB conectado", "Mongoose");
        });
        return connection;
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
