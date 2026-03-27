import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  DeleteResult,
  Model,
  QueryFilter,
  UpdateQuery,
  UpdateResult,
} from "mongoose";

import { IUrlSessionRepository } from "../url-session.interface";
import { UrlSession, UrlSessionDocument } from "../url-session.schema";

@Injectable()
export class UrlSessionRepository implements IUrlSessionRepository {
  constructor(
    @InjectModel(UrlSession.name)
    private readonly urlSessionModel: Model<UrlSessionDocument>,
  ) {}

  async findOneBy(
    filter: QueryFilter<UrlSessionDocument>,
  ): Promise<UrlSessionDocument | null> {
    return this.urlSessionModel.findOne(filter);
  }

  async save(data: Partial<UrlSession>): Promise<UrlSessionDocument> {
    const created = new this.urlSessionModel(data);
    return created.save();
  }

  async updateOneBy(
    filter: QueryFilter<UrlSessionDocument>,
    dataUpdate: UpdateQuery<UrlSessionDocument>,
  ): Promise<UpdateResult> {
    return this.urlSessionModel.updateOne(filter, dataUpdate);
  }

  async deleteOneBy(
    filter: QueryFilter<UrlSessionDocument>,
  ): Promise<DeleteResult> {
    return this.urlSessionModel.deleteOne(filter);
  }
}
