import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class ImageModel {
  readonly id: string;
  readonly title?: string;
  readonly uploadedBy?: string;
  readonly uploadedOn?: string;
  readonly S3key?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ImageModel>);
  static copyOf(source: ImageModel, mutator: (draft: MutableModel<ImageModel>) => MutableModel<ImageModel> | void): ImageModel;
}