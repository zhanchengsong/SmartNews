import pika
import json
class CloudAMPQClient :

    def __init__(self, cloud_ampq_url, queue_name):
        self.cloud_ampq_url = cloud_ampq_url
        self.queue_name = queue_name
        self.params = pika.URLParameters(self.cloud_ampq_url)
        self.params.socket_timeout = 3 
        self.connection = pika.BlockingConnection(self.params)
        self.channel = self.connection.channel()
        self.channel.queue_declare(queue=queue_name)
    

    def sendMessage(self,message):
        self.channel.basic_publish(exchange='', routing_key=self.queue_name, body=json.dumps(message))
        print(f"[X] Sent message to {self.queue_name} with {message}")

    def getMessage(self):
        method_frame,header_frame, body=self.channel.basic_get(self.queue_name)
        if method_frame:
            print(f"[o] Received message from {self.queue_name} with message {body}")
            self.channel.basic_ack(method_frame.delivery_tag)
            return json.loads(body)

        else: 
            print("No message")
            return None

    def sleep(self,seconds):
        self.connection.sleep(seconds)


    