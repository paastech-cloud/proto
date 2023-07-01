/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "gitrepomanager";

export interface RepositoryRequest {
  repositoryPath: string;
}

export interface RepositoryResponse {
  message: string;
}

function createBaseRepositoryRequest(): RepositoryRequest {
  return { repositoryPath: "" };
}

export const RepositoryRequest = {
  encode(message: RepositoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repositoryPath !== "") {
      writer.uint32(10).string(message.repositoryPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepositoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepositoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repositoryPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RepositoryRequest {
    return { repositoryPath: isSet(object.repositoryPath) ? String(object.repositoryPath) : "" };
  },

  toJSON(message: RepositoryRequest): unknown {
    const obj: any = {};
    message.repositoryPath !== undefined && (obj.repositoryPath = message.repositoryPath);
    return obj;
  },

  create<I extends Exact<DeepPartial<RepositoryRequest>, I>>(base?: I): RepositoryRequest {
    return RepositoryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RepositoryRequest>, I>>(object: I): RepositoryRequest {
    const message = createBaseRepositoryRequest();
    message.repositoryPath = object.repositoryPath ?? "";
    return message;
  },
};

function createBaseRepositoryResponse(): RepositoryResponse {
  return { message: "" };
}

export const RepositoryResponse = {
  encode(message: RepositoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepositoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepositoryResponse();
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

  fromJSON(object: any): RepositoryResponse {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: RepositoryResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<RepositoryResponse>, I>>(base?: I): RepositoryResponse {
    return RepositoryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RepositoryResponse>, I>>(object: I): RepositoryResponse {
    const message = createBaseRepositoryResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export interface GitRepoManager {
  CreateRepository(request: RepositoryRequest): Promise<RepositoryResponse>;
  DeleteRepository(request: RepositoryRequest): Promise<RepositoryResponse>;
}

export const GitRepoManagerServiceName = "gitrepomanager.GitRepoManager";
export class GitRepoManagerClientImpl implements GitRepoManager {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || GitRepoManagerServiceName;
    this.rpc = rpc;
    this.CreateRepository = this.CreateRepository.bind(this);
    this.DeleteRepository = this.DeleteRepository.bind(this);
  }
  CreateRepository(request: RepositoryRequest): Promise<RepositoryResponse> {
    const data = RepositoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateRepository", data);
    return promise.then((data) => RepositoryResponse.decode(_m0.Reader.create(data)));
  }

  DeleteRepository(request: RepositoryRequest): Promise<RepositoryResponse> {
    const data = RepositoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteRepository", data);
    return promise.then((data) => RepositoryResponse.decode(_m0.Reader.create(data)));
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
