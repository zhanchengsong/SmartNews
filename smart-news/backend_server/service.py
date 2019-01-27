import pyjsonrpc
import sys 
import os
sys.path.append(os.path.join(os.path.dirname(__file__),'./','utils'))
import mongodb_client 

SERVER_HOST ='localhost'
SERVER_PORT = 4040

class RequestHandler(pyjsonrpc.HttpRequestHandler):
    @pyjsonrpc.rpcmethod
    def add(self, a, b):
        return a + b
    
    @pyjsonrpc.rpcmethod
    def getNews(self):
        db = mongodb_client.get_db()
        return list ( db['news'].find() ) 
http_server = pyjsonrpc.ThreadingHttpServer(
    server_address = (SERVER_HOST, SERVER_PORT),
    RequestHandlerClass = RequestHandler

)

print("Python RPC listening on: " + SERVER_HOST + str ( SERVER_PORT) )
http_server.serve_forever()