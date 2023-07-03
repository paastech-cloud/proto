/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "gitrepomanager";

export interface RepositoryRequest {
  repository_path: string;
}

export interface RepositoryResponse {
  message: string;
}

export const GITREPOMANAGER_PACKAGE_NAME = "gitrepomanager";

export interface GitRepoManagerClient {
  createRepository(request: RepositoryRequest): Observable<RepositoryResponse>;

  deleteRepository(request: RepositoryRequest): Observable<RepositoryResponse>;
}

export interface GitRepoManagerController {
  createRepository(
    request: RepositoryRequest,
  ): Promise<RepositoryResponse> | Observable<RepositoryResponse> | RepositoryResponse;

  deleteRepository(
    request: RepositoryRequest,
  ): Promise<RepositoryResponse> | Observable<RepositoryResponse> | RepositoryResponse;
}

export function GitRepoManagerControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createRepository", "deleteRepository"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("GitRepoManager", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("GitRepoManager", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const GIT_REPO_MANAGER_SERVICE_NAME = "GitRepoManager";
