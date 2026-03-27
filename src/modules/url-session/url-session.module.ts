import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UrlSessionRepository } from "./repository/url-session.repository";
import { UrlSession, UrlSessionSchema } from "./url-session.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UrlSession.name, schema: UrlSessionSchema },
    ]),
  ],
  providers: [UrlSessionRepository],
  exports: [UrlSessionRepository],
})
export class UrlSessionModule {}
