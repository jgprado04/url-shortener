import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserUrlRepository } from "./repository/user-url.repository";
import { UserUrl, UserUrlSchema } from "./user-url.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserUrl.name, schema: UserUrlSchema }]),
  ],
  providers: [UserUrlRepository],
  exports: [UserUrlRepository],
})
export class UserUrlModule {}
