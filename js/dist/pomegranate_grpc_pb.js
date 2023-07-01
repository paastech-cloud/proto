// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pomegranate_pb = require('./pomegranate_pb.js');

function serialize_pomegranate_ApplyConfigDeploymentRequest(arg) {
  if (!(arg instanceof pomegranate_pb.ApplyConfigDeploymentRequest)) {
    throw new Error('Expected argument of type pomegranate.ApplyConfigDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pomegranate_ApplyConfigDeploymentRequest(buffer_arg) {
  return pomegranate_pb.ApplyConfigDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pomegranate_DeleteDeploymentRequest(arg) {
  if (!(arg instanceof pomegranate_pb.DeleteDeploymentRequest)) {
    throw new Error('Expected argument of type pomegranate.DeleteDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pomegranate_DeleteDeploymentRequest(buffer_arg) {
  return pomegranate_pb.DeleteDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pomegranate_DeploymentStatusRequest(arg) {
  if (!(arg instanceof pomegranate_pb.DeploymentStatusRequest)) {
    throw new Error('Expected argument of type pomegranate.DeploymentStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pomegranate_DeploymentStatusRequest(buffer_arg) {
  return pomegranate_pb.DeploymentStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pomegranate_ResponseMessage(arg) {
  if (!(arg instanceof pomegranate_pb.ResponseMessage)) {
    throw new Error('Expected argument of type pomegranate.ResponseMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pomegranate_ResponseMessage(buffer_arg) {
  return pomegranate_pb.ResponseMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pomegranate_RestartDeploymentRequest(arg) {
  if (!(arg instanceof pomegranate_pb.RestartDeploymentRequest)) {
    throw new Error('Expected argument of type pomegranate.RestartDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pomegranate_RestartDeploymentRequest(buffer_arg) {
  return pomegranate_pb.RestartDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pomegranate_StartDeploymentRequest(arg) {
  if (!(arg instanceof pomegranate_pb.StartDeploymentRequest)) {
    throw new Error('Expected argument of type pomegranate.StartDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pomegranate_StartDeploymentRequest(buffer_arg) {
  return pomegranate_pb.StartDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pomegranate_StopDeploymentRequest(arg) {
  if (!(arg instanceof pomegranate_pb.StopDeploymentRequest)) {
    throw new Error('Expected argument of type pomegranate.StopDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pomegranate_StopDeploymentRequest(buffer_arg) {
  return pomegranate_pb.StopDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PomegranateService = exports.PomegranateService = {
  startDeployment: {
    path: '/pomegranate.Pomegranate/StartDeployment',
    requestStream: false,
    responseStream: false,
    requestType: pomegranate_pb.StartDeploymentRequest,
    responseType: pomegranate_pb.ResponseMessage,
    requestSerialize: serialize_pomegranate_StartDeploymentRequest,
    requestDeserialize: deserialize_pomegranate_StartDeploymentRequest,
    responseSerialize: serialize_pomegranate_ResponseMessage,
    responseDeserialize: deserialize_pomegranate_ResponseMessage,
  },
  restartDeployment: {
    path: '/pomegranate.Pomegranate/RestartDeployment',
    requestStream: false,
    responseStream: false,
    requestType: pomegranate_pb.RestartDeploymentRequest,
    responseType: pomegranate_pb.ResponseMessage,
    requestSerialize: serialize_pomegranate_RestartDeploymentRequest,
    requestDeserialize: deserialize_pomegranate_RestartDeploymentRequest,
    responseSerialize: serialize_pomegranate_ResponseMessage,
    responseDeserialize: deserialize_pomegranate_ResponseMessage,
  },
  deleteDeployment: {
    path: '/pomegranate.Pomegranate/DeleteDeployment',
    requestStream: false,
    responseStream: false,
    requestType: pomegranate_pb.DeleteDeploymentRequest,
    responseType: pomegranate_pb.ResponseMessage,
    requestSerialize: serialize_pomegranate_DeleteDeploymentRequest,
    requestDeserialize: deserialize_pomegranate_DeleteDeploymentRequest,
    responseSerialize: serialize_pomegranate_ResponseMessage,
    responseDeserialize: deserialize_pomegranate_ResponseMessage,
  },
  stopDeployment: {
    path: '/pomegranate.Pomegranate/StopDeployment',
    requestStream: false,
    responseStream: false,
    requestType: pomegranate_pb.StopDeploymentRequest,
    responseType: pomegranate_pb.ResponseMessage,
    requestSerialize: serialize_pomegranate_StopDeploymentRequest,
    requestDeserialize: deserialize_pomegranate_StopDeploymentRequest,
    responseSerialize: serialize_pomegranate_ResponseMessage,
    responseDeserialize: deserialize_pomegranate_ResponseMessage,
  },
  deploymentStatus: {
    path: '/pomegranate.Pomegranate/DeploymentStatus',
    requestStream: false,
    responseStream: false,
    requestType: pomegranate_pb.DeploymentStatusRequest,
    responseType: pomegranate_pb.ResponseMessage,
    requestSerialize: serialize_pomegranate_DeploymentStatusRequest,
    requestDeserialize: deserialize_pomegranate_DeploymentStatusRequest,
    responseSerialize: serialize_pomegranate_ResponseMessage,
    responseDeserialize: deserialize_pomegranate_ResponseMessage,
  },
  applyConfigDeployment: {
    path: '/pomegranate.Pomegranate/ApplyConfigDeployment',
    requestStream: false,
    responseStream: false,
    requestType: pomegranate_pb.ApplyConfigDeploymentRequest,
    responseType: pomegranate_pb.ResponseMessage,
    requestSerialize: serialize_pomegranate_ApplyConfigDeploymentRequest,
    requestDeserialize: deserialize_pomegranate_ApplyConfigDeploymentRequest,
    responseSerialize: serialize_pomegranate_ResponseMessage,
    responseDeserialize: deserialize_pomegranate_ResponseMessage,
  },
};

exports.PomegranateClient = grpc.makeGenericClientConstructor(PomegranateService);
