import { DeleteResult, QueryFilter, UpdateQuery, UpdateResult } from "mongoose";

import { User, UserDocument } from "./user.schema";

export interface IUserRepository {
  findOneBy(filter: QueryFilter<UserDocument>): Promise<UserDocument | null>;
  save(data: Partial<User>): Promise<UserDocument>;
  findOneBy(filter: QueryFilter<UserDocument>): Promise<UserDocument | null>;
  updateOneBy(
    filter: QueryFilter<UserDocument>,
    dataUpdate: UpdateQuery<UserDocument>,
  ): Promise<UpdateResult>;
  deleteOneBy(filter: QueryFilter<UserDocument>): Promise<DeleteResult>;
}
