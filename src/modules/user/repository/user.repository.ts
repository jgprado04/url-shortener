import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  DeleteResult,
  QueryFilter,
  Model,
  UpdateQuery,
  UpdateResult,
} from "mongoose";

import { IUserRepository } from "../user.interface";
import { User, UserDocument } from "../user.schema";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findOneBy(
    filter: QueryFilter<UserDocument>,
  ): Promise<UserDocument | null> {
    return this.userModel.findOne(filter);
  }

  async save(data: Partial<User>): Promise<UserDocument> {
    const created = new this.userModel(data);
    return created.save();
  }

  async updateOneBy(
    filter: QueryFilter<UserDocument>,
    dataUpdate: UpdateQuery<UserDocument>,
  ): Promise<UpdateResult> {
    return this.userModel.updateOne(filter, dataUpdate);
  }

  async deleteOneBy(filter: QueryFilter<UserDocument>): Promise<DeleteResult> {
    return this.userModel.deleteOne(filter);
  }
}
