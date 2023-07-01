"use strict";

const grpc = require("@grpc/grpc-js");
const {
  RepositoryRequest,
  RepositoryResponse,
  serialize_gitrepomanager_RepositoryRequest,
  deserialize_gitrepomanager_RepositoryRequest,
  serialize_gitrepomanager_RepositoryResponse,
  deserialize_gitrepomanager_RepositoryResponse,
} = require("./dist/git-repo-manager_grpc_pb.js");

module.exports = {
  grpc,
  RepositoryRequest,
  RepositoryResponse,
  serialize_gitrepomanager_RepositoryRequest,
  deserialize_gitrepomanager_RepositoryRequest,
  serialize_gitrepomanager_RepositoryResponse,
  deserialize_gitrepomanager_RepositoryResponse,
};
