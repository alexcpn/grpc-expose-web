"use strict";
// A TypeScipt. WebClient for GRPC
// Based on https://github.com/improbable-eng/grpc-web/blob/master/example/ts/src/index.ts
exports.__esModule = true;
var grpc_web_client_1 = require("grpc-web-client");
var your_service_pb_service_1 = require("../generated/your_service_pb_service");
var your_service_pb_1 = require("../generated/your_service_pb");
function getResponse() {
    var stringMessage = new your_service_pb_1.StringMessage();
    stringMessage.setValue("hello");
    grpc_web_client_1.grpc.invoke(your_service_pb_service_1.YourService.Echo, {
        request: stringMessage,
        host: "http://localhost:8001",
        onHeaders: function (headers) {
            console.log("Echo.onHeaders", headers);
        },
        onMessage: function (message) {
            console.log("Echo.onMessage", message.toObject());
            var elt = document.getElementById("greeting");
            elt.innerText = message.toString();
        },
        onEnd: function (code, msg, trailers) {
            console.log("Echo.onEnd", code, msg, trailers);
        }
    });
}
getResponse();
