import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

import { UserUrlStatus } from "./user-url.constant";

export type UserUrlDocument = HydratedDocument<UserUrl>;

@Schema({
  _id: false,
  timestamps: true,
  collection: "user_urls",
})
export class UserUrl {
  @Prop({
    type: String,
    unique: true,
    default: uuidv4,
  })
  id: string;

  @Prop({ type: String, required: true })
  user_id: string;

  @Prop({ type: String, required: true })
  original_url: string;

  @Prop({ type: String, required: true })
  short_code: string;

  @Prop({ type: Number, required: true, default: 0 })
  access_count: number;

  @Prop({
    type: String,
    enum: Object.values(UserUrlStatus),
    default: UserUrlStatus.ACTIVE,
  })
  status: UserUrlStatus;

  @Prop({ type: Boolean, required: true, default: false })
  is_rated: boolean;
}

export const UserUrlSchema = SchemaFactory.createForClass(UserUrl);

UserUrlSchema.index({ id: 1 });
UserUrlSchema.index({ user_id: 1, short_code: 1 });
UserUrlSchema.index({ short_code: 1 }, { unique: true });
