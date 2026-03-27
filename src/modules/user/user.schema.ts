import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { USER_ROLES, USER_STATUS_ENUM } from "./user.constant";

export type UserDocument = HydratedDocument<User>; // Armazena os dados normais de um User, e os dados de um document padrão do mongodb

@Schema({
  _id: false,
  timestamps: true,
  collection: "users",
})
export class User {
  @Prop({
    type: String,
    unique: true,
    default: uuidv4,
  })
  id: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, unique: true, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Number, required: true })
  age: number;

  @Prop({ type: [String], enum: USER_ROLES, default: "MEMBER" })
  roles: [string];

  @Prop({
    type: String,
    enum: Object.values(USER_STATUS_ENUM),
    default: USER_STATUS_ENUM.ACTIVE,
  })
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ id: 1, email: 1 });
