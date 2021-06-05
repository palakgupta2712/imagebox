// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ImageModel } = initSchema(schema);

export {
  ImageModel
};