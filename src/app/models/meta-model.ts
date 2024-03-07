import { ShortPostModel } from "./short-post-model";

export interface MetaModel {
  next_page: string;
  previous_page: string;
  next_post?:ShortPostModel;
  previous_post?:ShortPostModel;
  count: number;
}
