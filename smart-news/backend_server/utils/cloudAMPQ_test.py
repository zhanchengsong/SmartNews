from cloudAMPQ_client import CloudAMPQClient

CLOUD_AMPQ_URL = "amqp://gvmlmvjt:LfyDfz6Ago5EYhNGMOgv4EFhC5DGjG6D@shark.rmq.cloudamqp.com/gvmlmvjt"
TEST_QUEUE_NAME = 'test'

def test_basic():
    client = CloudAMPQClient(CLOUD_AMPQ_URL, TEST_QUEUE_NAME)
    msg = {'test':'demo'} 
    client.sendMessage(msg)
    client.sleep(10)

    received_message = client.getMessage()
    print(received_message)

if '__name__' == '__main__':
    test_basic()
