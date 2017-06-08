// A TypeScipt. WebClient for GRPC
// Based on https://github.com/improbable-eng/grpc-web/blob/master/example/ts/src/index.ts

import { grpc, BrowserHeaders } from "grpc-web-client";
import { YourService } from "../generated/your_service_pb_service"
import {StringMessage} from "../generated/your_service_pb"

function getResponse(){
        
    const stringMessage = new StringMessage();
    stringMessage.setValue("hello");
    grpc.invoke(YourService.Echo ,{
        request :stringMessage,
        host : "http://localhost:8001",
        onHeaders: (headers: BrowserHeaders) => {
            console.log("Echo.onHeaders", headers);
        },
        onMessage: (message: StringMessage) => {
            console.log("Echo.onMessage", message.toObject());
            const elt = document.getElementById("greeting");
            elt.innerText = message.toString();
        },
        onEnd: (code: grpc.Code, msg: string, trailers: BrowserHeaders) => {
            console.log("Echo.onEnd", code, msg, trailers);
        }
    })
    
}

getResponse();

