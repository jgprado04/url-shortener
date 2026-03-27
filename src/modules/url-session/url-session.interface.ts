import { DeleteResult, QueryFilter, UpdateQuery, UpdateResult } from "mongoose";

import { UrlSession, UrlSessionDocument } from "./url-session.schema";

export interface IUrlSessionRepository {
  findOneBy(
    filter: QueryFilter<UrlSessionDocument>,
  ): Promise<UrlSessionDocument | null>;
  save(data: Partial<UrlSession>): Promise<UrlSessionDocument>;
  updateOneBy(
    filter: QueryFilter<UrlSessionDocument>,
    dataUpdate: UpdateQuery<UrlSessionDocument>,
  ): Promise<UpdateResult>;
  deleteOneBy(filter: QueryFilter<UrlSessionDocument>): Promise<DeleteResult>;
}
