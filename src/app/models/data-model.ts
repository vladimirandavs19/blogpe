import { AuthorModel } from "./author-model";
import { ShortPostModel } from "./short-post-model";
import { TagModel } from "./tag-model";

export interface DataModel extends ShortPostModel {
  status: string;
  created: Date;
  updated: Date;
  published: Date;
  body: string;
  summary: string;
  seo_title: string;
  meta_description: string;
  featured_image_alt: string;
  url: string;
  author: AuthorModel;
  tags: TagModel[];
  categories: TagModel[];
}
