import os
import redis
import sys
import hashlib
import datetime

sys.path.append(os.path.join(os.path.dirname(__file__),'..','common'))

import news_api_client
from cloudAMPQ_client import CloudAMPQClient

REDIS_HOST = 'localhost'
REDIS_PORT = 6379

SCRAPE_NEWS_TASK_QUEUE_URL = 'amqp://gvmlmvjt:LfyDfz6Ago5EYhNGMOgv4EFhC5DGjG6D@shark.rmq.cloudamqp.com/gvmlmvjt'
SCRAPE_NEWS_TASK_QUEUE_NAME = 'smart-news-scrape-task'

NEWS_TIMEOUT_IN_SECONDS = 3600 * 24 
SLEEP_IN_SECONDS = 600

NEWS_SOURCES = [
    'cnn',
    'cbc-news',
]
redis_client = redis.StrictRedis(REDIS_HOST, REDIS_PORT)
CloudAMPQ_client = CloudAMPQClient(SCRAPE_NEWS_TASK_QUEUE_URL,SCRAPE_NEWS_TASK_QUEUE_NAME)

while True:
    news_list = news_api_client.getNewsFromSource(NEWS_SOURCES)
    num_of_new = 0
    for news in news_list:
        news_digest = hashlib.md5(news['title'].encode('utf-8')).digest().encode('base 64')
        if redis_client.get(news_digest) is None:
            num_of_new = num_of_new + 1 
            news['digest'] = news 
            if news['publishedAt'] is None: 
                news['publishedAt'] = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
            
            redis_client.set(news_digest, news)
            redis_client.expire(news_digest, NEWS_TIMEOUT_IN_SECONDS)   

            CloudAMPQ_client.sendMessage(news)
    print ("Fetched %d new news ." % num_of_new)
    CloudAMPQ_client.sleep(SLEEP_IN_SECONDS)


