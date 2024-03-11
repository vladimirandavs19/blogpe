import { DataModel } from "./data-model";

export interface TagModel {
  name: string;
  slug: string;
  count: number;
  recent_posts: DataModel[];
}
