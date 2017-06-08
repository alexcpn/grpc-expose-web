package main

import (
	"fmt"
	"log"
	"net/http"
	pb "test_proto/proto"

	"github.com/improbable-eng/grpc-web/go/grpcweb"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
)

const port = ":7001"

type server struct{}

func (s *server) Echo(ctx context.Context, in *pb.StringMessage) (*pb.StringMessage, error) {
	log.Println("Got a request")
	return &pb.StringMessage{Value: "Hello From a GRPC Method (GRPC WEB Go Server Served) " + in.Value}, nil
}

func main() {

	log.Println("Hello Go GRPC")
	/*	lis, err := net.Listen("tcp", port)
		if err != nil {
			log.Fatalf("failed to listen: %v", err)
		}*/
	s := grpc.NewServer()
	pb.RegisterYourServiceServer(s, &server{})
	wrappedServer := grpcweb.WrapServer(s)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		wrappedServer.ServeHTTP(resp, req)
		/*
			https://github.com/improbable-eng/grpc-web/tree/master/go/grpcweb
					wrappedServer.ServeHTTP(resp, req)
				}
				// Fall back to other servers.
				http.DefaultServeMux.ServeHTTP(resp, req)
		*/
	}
	httpServer := http.Server{
		Addr:    fmt.Sprintf(":%d", 8001),
		Handler: http.HandlerFunc(handler),
	}

	if err := httpServer.ListenAndServe(); err != nil {
		grpclog.Fatalf("failed starting http server: %v", err)
	}
	/*	reflection.Register(s)
		if err := s.Serve(lis); err != nil {
			log.Fatalf("failed to serve: %v", err)
		}*/

}
