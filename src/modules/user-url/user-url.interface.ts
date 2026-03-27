import { DeleteResult, QueryFilter, UpdateQuery, UpdateResult } from "mongoose";

import { UserUrl, UserUrlDocument } from "./user-url.schema";

export interface IUserUrlRepository {
  findOneBy(
    filter: QueryFilter<UserUrlDocument>,
  ): Promise<UserUrlDocument | null>;
  save(data: Partial<UserUrl>): Promise<UserUrlDocument>;
  updateOneBy(
    filter: QueryFilter<UserUrlDocument>,
    dataUpdate: UpdateQuery<UserUrlDocument>,
  ): Promise<UpdateResult>;
  deleteOneBy(filter: QueryFilter<UserUrlDocument>): Promise<DeleteResult>;
}
