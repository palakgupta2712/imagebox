/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImageModel = /* GraphQL */ `
  query GetImageModel($id: ID!) {
    getImageModel(id: $id) {
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
export const listImageModels = /* GraphQL */ `
  query ListImageModels(
    $filter: ModelImageModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncImageModels = /* GraphQL */ `
  query SyncImageModels(
    $filter: ModelImageModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImageModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
