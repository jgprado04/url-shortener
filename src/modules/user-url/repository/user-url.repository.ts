import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  DeleteResult,
  Model,
  QueryFilter,
  UpdateQuery,
  UpdateResult,
} from "mongoose";

import { IUserUrlRepository } from "../user-url.interface";
import { UserUrl, UserUrlDocument } from "../user-url.schema";

@Injectable()
export class UserUrlRepository implements IUserUrlRepository {
  constructor(
    @InjectModel(UserUrl.name)
    private readonly userUrlModel: Model<UserUrlDocument>,
  ) {}

  async findOneBy(
    filter: QueryFilter<UserUrlDocument>,
  ): Promise<UserUrlDocument | null> {
    return this.userUrlModel.findOne(filter);
  }

  async save(data: Partial<UserUrl>): Promise<UserUrlDocument> {
    const created = new this.userUrlModel(data);
    return created.save();
  }

  async updateOneBy(
    filter: QueryFilter<UserUrlDocument>,
    dataUpdate: UpdateQuery<UserUrlDocument>,
  ): Promise<UpdateResult> {
    return this.userUrlModel.updateOne(filter, dataUpdate);
  }

  async deleteOneBy(
    filter: QueryFilter<UserUrlDocument>,
  ): Promise<DeleteResult> {
    return this.userUrlModel.deleteOne(filter);
  }
}
