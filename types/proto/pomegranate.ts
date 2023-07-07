/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "pomegranate";

export enum ContainerStatus {
  STATUS_UNKNOWN = 0,
  STATUS_STARTING = 1,
  STATUS_RUNNING = 2,
  STATUS_STOPPING = 3,
  STATUS_STOPPED = 4,
  UNRECOGNIZED = -1,
}

export interface DeployRequest {
  container_name: string;
  image_name: string;
  image_tag: string;
  env_vars: { [key: string]: string };
}

export interface DeployRequest_EnvVarsEntry {
  key: string;
  value: string;
}

export interface StopDeployRequest {
  container_name: string;
}

export interface DeleteImageRequest {
  container_name: string;
}

export interface GetLogsRequest {
  container_name: string;
}

export interface GetLogsResponse {
  logs: string;
}

export interface GetStatisticsRequest {
  container_name: string;
}

export interface GetStatisticsResponse {
  cpu_usage: number;
  memory_usage: number;
  memory_limit: number;
}

export interface GetStatusRequest {
  container_name: string[];
}

export interface GetStatusResponse {
  container_statuses: GetStatusResponse_SingleContainerStatus[];
}

export interface GetStatusResponse_SingleContainerStatus {
  container_name: string;
  container_status: ContainerStatus;
}

export interface EmptyResponse {
}

export const POMEGRANATE_PACKAGE_NAME = "pomegranate";

export interface PomegranateClient {
  deploy(request: DeployRequest): Observable<EmptyResponse>;

  stopDeploy(request: StopDeployRequest): Observable<EmptyResponse>;

  deleteImage(request: DeleteImageRequest): Observable<EmptyResponse>;

  getLogs(request: GetLogsRequest): Observable<GetLogsResponse>;

  getStatistics(request: GetStatisticsRequest): Observable<GetStatisticsResponse>;

  getStatus(request: GetStatusRequest): Observable<GetStatusResponse>;
}

export interface PomegranateController {
  deploy(request: DeployRequest): Promise<EmptyResponse> | Observable<EmptyResponse> | EmptyResponse;

  stopDeploy(request: StopDeployRequest): Promise<EmptyResponse> | Observable<EmptyResponse> | EmptyResponse;

  deleteImage(request: DeleteImageRequest): Promise<EmptyResponse> | Observable<EmptyResponse> | EmptyResponse;

  getLogs(request: GetLogsRequest): Promise<GetLogsResponse> | Observable<GetLogsResponse> | GetLogsResponse;

  getStatistics(
    request: GetStatisticsRequest,
  ): Promise<GetStatisticsResponse> | Observable<GetStatisticsResponse> | GetStatisticsResponse;

  getStatus(request: GetStatusRequest): Promise<GetStatusResponse> | Observable<GetStatusResponse> | GetStatusResponse;
}

export function PomegranateControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["deploy", "stopDeploy", "deleteImage", "getLogs", "getStatistics", "getStatus"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("Pomegranate", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("Pomegranate", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const POMEGRANATE_SERVICE_NAME = "Pomegranate";
