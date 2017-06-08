"use strict";
// package: example
// file: your_service.proto
exports.__esModule = true;
var your_service_pb = require("./your_service_pb");
var YourService = (function () {
    function YourService() {
    }
    return YourService;
}());
YourService.serviceName = "example.YourService";
exports.YourService = YourService;
(function (YourService) {
    var Echo = (function () {
        function Echo() {
        }
        return Echo;
    }());
    Echo.methodName = "Echo";
    Echo.service = YourService;
    Echo.requestStream = false;
    Echo.responseStream = false;
    Echo.requestType = your_service_pb.StringMessage;
    Echo.responseType = your_service_pb.StringMessage;
    YourService.Echo = Echo;
})(YourService = exports.YourService || (exports.YourService = {}));
exports.YourService = YourService;
