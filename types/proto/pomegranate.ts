/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "pomegranate";

export interface StartDeploymentRequest {
  deployment_uuid: string;
  project_uuid: string;
  user_uuid: string;
}

export interface RestartDeploymentRequest {
  deployment_uuid: string;
  project_uuid: string;
  user_uuid: string;
}

export interface DeleteDeploymentRequest {
  deployment_uuid: string;
  project_uuid: string;
  user_uuid: string;
}

export interface StopDeploymentRequest {
  deployment_uuid: string;
  project_uuid: string;
}

export interface DeploymentStatusRequest {
  deployment_uuid: string;
  project_uuid: string;
}

export interface ApplyConfigDeploymentRequest {
  deployment_uuid: string;
  project_uuid: string;
  user_uuid: string;
  config: string;
}

export interface DeploymentLogRequest {
  deployment_uuid: string;
  project_uuid: string;
}

export interface DeploymentStatRequest {
  deployment_uuid: string;
  project_uuid: string;
}

export interface ResponseMessage {
  message: string;
}

export interface ResponseMessageStatus {
  message: string;
  status: string;
}

export interface DeploymentStats {
  message: string;
  cpu_usage: number;
  memory_usage: number;
  memory_limit: number;
}

export const POMEGRANATE_PACKAGE_NAME = "pomegranate";

export interface PomegranateClient {
  startDeployment(request: StartDeploymentRequest): Observable<ResponseMessage>;

  restartDeployment(request: RestartDeploymentRequest): Observable<ResponseMessage>;

  deleteDeployment(request: DeleteDeploymentRequest): Observable<ResponseMessage>;

  stopDeployment(request: StopDeploymentRequest): Observable<ResponseMessage>;

  deploymentStatus(request: DeploymentStatusRequest): Observable<ResponseMessageStatus>;

  deploymentLog(request: DeploymentLogRequest): Observable<ResponseMessage>;

  deploymentStat(request: DeploymentStatRequest): Observable<DeploymentStats>;

  applyConfigDeployment(request: ApplyConfigDeploymentRequest): Observable<ResponseMessage>;
}

export interface PomegranateController {
  startDeployment(
    request: StartDeploymentRequest,
  ): Promise<ResponseMessage> | Observable<ResponseMessage> | ResponseMessage;

  restartDeployment(
    request: RestartDeploymentRequest,
  ): Promise<ResponseMessage> | Observable<ResponseMessage> | ResponseMessage;

  deleteDeployment(
    request: DeleteDeploymentRequest,
  ): Promise<ResponseMessage> | Observable<ResponseMessage> | ResponseMessage;

  stopDeployment(
    request: StopDeploymentRequest,
  ): Promise<ResponseMessage> | Observable<ResponseMessage> | ResponseMessage;

  deploymentStatus(
    request: DeploymentStatusRequest,
  ): Promise<ResponseMessageStatus> | Observable<ResponseMessageStatus> | ResponseMessageStatus;

  deploymentLog(
    request: DeploymentLogRequest,
  ): Promise<ResponseMessage> | Observable<ResponseMessage> | ResponseMessage;

  deploymentStat(
    request: DeploymentStatRequest,
  ): Promise<DeploymentStats> | Observable<DeploymentStats> | DeploymentStats;

  applyConfigDeployment(
    request: ApplyConfigDeploymentRequest,
  ): Promise<ResponseMessage> | Observable<ResponseMessage> | ResponseMessage;
}

export function PomegranateControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "startDeployment",
      "restartDeployment",
      "deleteDeployment",
      "stopDeployment",
      "deploymentStatus",
      "deploymentLog",
      "deploymentStat",
      "applyConfigDeployment",
    ];
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
