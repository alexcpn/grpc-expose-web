// package: example
// file: your_service.proto

import * as your_service_pb from "./your_service_pb";
export class YourService {
  static serviceName = "example.YourService";
}
export namespace YourService {
  export class Echo {
    static readonly methodName = "Echo";
    static readonly service = YourService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = your_service_pb.StringMessage;
    static readonly responseType = your_service_pb.StringMessage;
  }
}
