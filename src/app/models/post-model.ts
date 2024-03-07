import { DataModel } from "./data-model";
import { MetaModel } from "./meta-model";

export interface PostModel {
  meta: MetaModel;
  data: DataModel[];
}
