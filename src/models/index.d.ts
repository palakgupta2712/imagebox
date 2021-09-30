import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ImageModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ImageModel {
  readonly id: string;
  readonly title?: string;
  readonly uploadedBy?: string;
  readonly uploadedOn?: string;
  readonly S3key?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ImageModel, ImageModelMetaData>);
  static copyOf(source: ImageModel, mutator: (draft: MutableModel<ImageModel, ImageModelMetaData>) => MutableModel<ImageModel, ImageModelMetaData> | void): ImageModel;
}