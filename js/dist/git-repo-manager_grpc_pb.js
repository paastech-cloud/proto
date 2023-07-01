// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var git$repo$manager_pb = require('./git-repo-manager_pb.js');

function serialize_gitrepomanager_RepositoryRequest(arg) {
  if (!(arg instanceof git$repo$manager_pb.RepositoryRequest)) {
    throw new Error('Expected argument of type gitrepomanager.RepositoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gitrepomanager_RepositoryRequest(buffer_arg) {
  return git$repo$manager_pb.RepositoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gitrepomanager_RepositoryResponse(arg) {
  if (!(arg instanceof git$repo$manager_pb.RepositoryResponse)) {
    throw new Error('Expected argument of type gitrepomanager.RepositoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gitrepomanager_RepositoryResponse(buffer_arg) {
  return git$repo$manager_pb.RepositoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GitRepoManagerService = exports.GitRepoManagerService = {
  createRepository: {
    path: '/gitrepomanager.GitRepoManager/CreateRepository',
    requestStream: false,
    responseStream: false,
    requestType: git$repo$manager_pb.RepositoryRequest,
    responseType: git$repo$manager_pb.RepositoryResponse,
    requestSerialize: serialize_gitrepomanager_RepositoryRequest,
    requestDeserialize: deserialize_gitrepomanager_RepositoryRequest,
    responseSerialize: serialize_gitrepomanager_RepositoryResponse,
    responseDeserialize: deserialize_gitrepomanager_RepositoryResponse,
  },
  deleteRepository: {
    path: '/gitrepomanager.GitRepoManager/DeleteRepository',
    requestStream: false,
    responseStream: false,
    requestType: git$repo$manager_pb.RepositoryRequest,
    responseType: git$repo$manager_pb.RepositoryResponse,
    requestSerialize: serialize_gitrepomanager_RepositoryRequest,
    requestDeserialize: deserialize_gitrepomanager_RepositoryRequest,
    responseSerialize: serialize_gitrepomanager_RepositoryResponse,
    responseDeserialize: deserialize_gitrepomanager_RepositoryResponse,
  },
};

exports.GitRepoManagerClient = grpc.makeGenericClientConstructor(GitRepoManagerService);
