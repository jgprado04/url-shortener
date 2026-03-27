import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type UrlSessionDocument = HydratedDocument<UrlSession>;

@Schema({
  _id: false,
  timestamps: true,
  collection: "url_sessions",
})
export class UrlSession {
  @Prop({
    type: String,
    unique: true,
    default: uuidv4,
  })
  id: string;

  @Prop({ type: String, required: true })
  user_url_id: string;

  @Prop({ type: String, required: true })
  short_code: string;

  @Prop({ type: String, required: true })
  device_info: string;

  @Prop({ type: String, required: true })
  ip_adress: string;
}

export const UrlSessionSchema = SchemaFactory.createForClass(UrlSession);

UrlSessionSchema.index({ id: 1 });
UrlSessionSchema.index({ user_url_id: 1, short_code: 1 });
