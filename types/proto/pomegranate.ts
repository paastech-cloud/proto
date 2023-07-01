/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "pomegranate";

export interface StartDeploymentRequest {
  deploymentUuid: string;
}

export interface RestartDeploymentRequest {
  deploymentUuid: string;
}

export interface DeleteDeploymentRequest {
  deploymentUuid: string;
}

export interface StopDeploymentRequest {
  deploymentUuid: string;
}

export interface DeploymentStatusRequest {
  deploymentUuid: string;
}

export interface ApplyConfigDeploymentRequest {
  config: string;
}

export interface ResponseMessage {
  message: string;
}

function createBaseStartDeploymentRequest(): StartDeploymentRequest {
  return { deploymentUuid: "" };
}

export const StartDeploymentRequest = {
  encode(message: StartDeploymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentUuid !== "") {
      writer.uint32(10).string(message.deploymentUuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartDeploymentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deploymentUuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartDeploymentRequest {
    return { deploymentUuid: isSet(object.deploymentUuid) ? String(object.deploymentUuid) : "" };
  },

  toJSON(message: StartDeploymentRequest): unknown {
    const obj: any = {};
    message.deploymentUuid !== undefined && (obj.deploymentUuid = message.deploymentUuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartDeploymentRequest>, I>>(base?: I): StartDeploymentRequest {
    return StartDeploymentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartDeploymentRequest>, I>>(object: I): StartDeploymentRequest {
    const message = createBaseStartDeploymentRequest();
    message.deploymentUuid = object.deploymentUuid ?? "";
    return message;
  },
};

function createBaseRestartDeploymentRequest(): RestartDeploymentRequest {
  return { deploymentUuid: "" };
}

export const RestartDeploymentRequest = {
  encode(message: RestartDeploymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentUuid !== "") {
      writer.uint32(10).string(message.deploymentUuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestartDeploymentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestartDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deploymentUuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestartDeploymentRequest {
    return { deploymentUuid: isSet(object.deploymentUuid) ? String(object.deploymentUuid) : "" };
  },

  toJSON(message: RestartDeploymentRequest): unknown {
    const obj: any = {};
    message.deploymentUuid !== undefined && (obj.deploymentUuid = message.deploymentUuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<RestartDeploymentRequest>, I>>(base?: I): RestartDeploymentRequest {
    return RestartDeploymentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RestartDeploymentRequest>, I>>(object: I): RestartDeploymentRequest {
    const message = createBaseRestartDeploymentRequest();
    message.deploymentUuid = object.deploymentUuid ?? "";
    return message;
  },
};

function createBaseDeleteDeploymentRequest(): DeleteDeploymentRequest {
  return { deploymentUuid: "" };
}

export const DeleteDeploymentRequest = {
  encode(message: DeleteDeploymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentUuid !== "") {
      writer.uint32(10).string(message.deploymentUuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDeploymentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deploymentUuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteDeploymentRequest {
    return { deploymentUuid: isSet(object.deploymentUuid) ? String(object.deploymentUuid) : "" };
  },

  toJSON(message: DeleteDeploymentRequest): unknown {
    const obj: any = {};
    message.deploymentUuid !== undefined && (obj.deploymentUuid = message.deploymentUuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteDeploymentRequest>, I>>(base?: I): DeleteDeploymentRequest {
    return DeleteDeploymentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDeploymentRequest>, I>>(object: I): DeleteDeploymentRequest {
    const message = createBaseDeleteDeploymentRequest();
    message.deploymentUuid = object.deploymentUuid ?? "";
    return message;
  },
};

function createBaseStopDeploymentRequest(): StopDeploymentRequest {
  return { deploymentUuid: "" };
}

export const StopDeploymentRequest = {
  encode(message: StopDeploymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentUuid !== "") {
      writer.uint32(10).string(message.deploymentUuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopDeploymentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deploymentUuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopDeploymentRequest {
    return { deploymentUuid: isSet(object.deploymentUuid) ? String(object.deploymentUuid) : "" };
  },

  toJSON(message: StopDeploymentRequest): unknown {
    const obj: any = {};
    message.deploymentUuid !== undefined && (obj.deploymentUuid = message.deploymentUuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<StopDeploymentRequest>, I>>(base?: I): StopDeploymentRequest {
    return StopDeploymentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StopDeploymentRequest>, I>>(object: I): StopDeploymentRequest {
    const message = createBaseStopDeploymentRequest();
    message.deploymentUuid = object.deploymentUuid ?? "";
    return message;
  },
};

function createBaseDeploymentStatusRequest(): DeploymentStatusRequest {
  return { deploymentUuid: "" };
}

export const DeploymentStatusRequest = {
  encode(message: DeploymentStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentUuid !== "") {
      writer.uint32(10).string(message.deploymentUuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deploymentUuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeploymentStatusRequest {
    return { deploymentUuid: isSet(object.deploymentUuid) ? String(object.deploymentUuid) : "" };
  },

  toJSON(message: DeploymentStatusRequest): unknown {
    const obj: any = {};
    message.deploymentUuid !== undefined && (obj.deploymentUuid = message.deploymentUuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeploymentStatusRequest>, I>>(base?: I): DeploymentStatusRequest {
    return DeploymentStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeploymentStatusRequest>, I>>(object: I): DeploymentStatusRequest {
    const message = createBaseDeploymentStatusRequest();
    message.deploymentUuid = object.deploymentUuid ?? "";
    return message;
  },
};

function createBaseApplyConfigDeploymentRequest(): ApplyConfigDeploymentRequest {
  return { config: "" };
}

export const ApplyConfigDeploymentRequest = {
  encode(message: ApplyConfigDeploymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== "") {
      writer.uint32(10).string(message.config);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplyConfigDeploymentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplyConfigDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplyConfigDeploymentRequest {
    return { config: isSet(object.config) ? String(object.config) : "" };
  },

  toJSON(message: ApplyConfigDeploymentRequest): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config);
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplyConfigDeploymentRequest>, I>>(base?: I): ApplyConfigDeploymentRequest {
    return ApplyConfigDeploymentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ApplyConfigDeploymentRequest>, I>>(object: I): ApplyConfigDeploymentRequest {
    const message = createBaseApplyConfigDeploymentRequest();
    message.config = object.config ?? "";
    return message;
  },
};

function createBaseResponseMessage(): ResponseMessage {
  return { message: "" };
}

export const ResponseMessage = {
  encode(message: ResponseMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseMessage {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ResponseMessage): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseMessage>, I>>(base?: I): ResponseMessage {
    return ResponseMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResponseMessage>, I>>(object: I): ResponseMessage {
    const message = createBaseResponseMessage();
    message.message = object.message ?? "";
    return message;
  },
};

export interface Pomegranate {
  StartDeployment(request: StartDeploymentRequest): Promise<ResponseMessage>;
  RestartDeployment(request: RestartDeploymentRequest): Promise<ResponseMessage>;
  DeleteDeployment(request: DeleteDeploymentRequest): Promise<ResponseMessage>;
  StopDeployment(request: StopDeploymentRequest): Promise<ResponseMessage>;
  DeploymentStatus(request: DeploymentStatusRequest): Promise<ResponseMessage>;
  ApplyConfigDeployment(request: ApplyConfigDeploymentRequest): Promise<ResponseMessage>;
}

export const PomegranateServiceName = "pomegranate.Pomegranate";
export class PomegranateClientImpl implements Pomegranate {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PomegranateServiceName;
    this.rpc = rpc;
    this.StartDeployment = this.StartDeployment.bind(this);
    this.RestartDeployment = this.RestartDeployment.bind(this);
    this.DeleteDeployment = this.DeleteDeployment.bind(this);
    this.StopDeployment = this.StopDeployment.bind(this);
    this.DeploymentStatus = this.DeploymentStatus.bind(this);
    this.ApplyConfigDeployment = this.ApplyConfigDeployment.bind(this);
  }
  StartDeployment(request: StartDeploymentRequest): Promise<ResponseMessage> {
    const data = StartDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StartDeployment", data);
    return promise.then((data) => ResponseMessage.decode(_m0.Reader.create(data)));
  }

  RestartDeployment(request: RestartDeploymentRequest): Promise<ResponseMessage> {
    const data = RestartDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RestartDeployment", data);
    return promise.then((data) => ResponseMessage.decode(_m0.Reader.create(data)));
  }

  DeleteDeployment(request: DeleteDeploymentRequest): Promise<ResponseMessage> {
    const data = DeleteDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteDeployment", data);
    return promise.then((data) => ResponseMessage.decode(_m0.Reader.create(data)));
  }

  StopDeployment(request: StopDeploymentRequest): Promise<ResponseMessage> {
    const data = StopDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StopDeployment", data);
    return promise.then((data) => ResponseMessage.decode(_m0.Reader.create(data)));
  }

  DeploymentStatus(request: DeploymentStatusRequest): Promise<ResponseMessage> {
    const data = DeploymentStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeploymentStatus", data);
    return promise.then((data) => ResponseMessage.decode(_m0.Reader.create(data)));
  }

  ApplyConfigDeployment(request: ApplyConfigDeploymentRequest): Promise<ResponseMessage> {
    const data = ApplyConfigDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ApplyConfigDeployment", data);
    return promise.then((data) => ResponseMessage.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
