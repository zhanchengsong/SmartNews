import pyjsonrpc

def testBasic():
    http_client = pyjsonrpc.HttpClient(
        url = "http://localhost:4040"
    )
    print http_client.call("add",4,5)
    print http_client.call("getNews")


if __name__ == '__main__':
    testBasic()
