/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImageModel = /* GraphQL */ `
  mutation CreateImageModel(
    $input: CreateImageModelInput!
    $condition: ModelImageModelConditionInput
  ) {
    createImageModel(input: $input, condition: $condition) {
      id
      title
      uploadedBy
      uploadedOn
      S3key
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateImageModel = /* GraphQL */ `
  mutation UpdateImageModel(
    $input: UpdateImageModelInput!
    $condition: ModelImageModelConditionInput
  ) {
    updateImageModel(input: $input, condition: $condition) {
      id
      title
      uploadedBy
      uploadedOn
      S3key
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteImageModel = /* GraphQL */ `
  mutation DeleteImageModel(
    $input: DeleteImageModelInput!
    $condition: ModelImageModelConditionInput
  ) {
    deleteImageModel(input: $input, condition: $condition) {
      id
      title
      uploadedBy
      uploadedOn
      S3key
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
