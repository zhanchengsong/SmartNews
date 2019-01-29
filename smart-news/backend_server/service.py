import pyjsonrpc
import sys 
import os
from bson.json_util import dumps
sys.path.append(os.path.join(os.path.dirname(__file__),'../','common'))
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
        results = dumps(db['news'].find())

        return results



http_server = pyjsonrpc.ThreadingHttpServer(
    server_address = (SERVER_HOST, SERVER_PORT),
    RequestHandlerClass = RequestHandler

)

print("Python RPC listening on: " + SERVER_HOST + str ( SERVER_PORT) )
http_server.serve_forever()