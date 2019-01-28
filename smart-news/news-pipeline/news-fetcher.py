import sys 
import os 
from goose import Goose
sys.path.append( os.path.join(os.path.dirname(__file__),'..','common'))
sys.path.append( os.path.join(os.path.dirname(__file__),'.','scrappers' ))

import cnn_scraper
from cloudAMPQ_client import CloudAMPQClient

DEDUPE_NEWS_TASK_QUEUE_URL = 'amqp://asvjopom:hVP3aTrgb5JV3ZRMggobe2d8E2Vb-DW_@cat.rmq.cloudamqp.com/asvjopom'
DEDUPE_NEWS_TASK_QUEUE_NAME = "smart-news-dedupe-news-task-queue"
SCRAPE_NEWS_TASK_QUEUE_URL = 'amqp://gvmlmvjt:LfyDfz6Ago5EYhNGMOgv4EFhC5DGjG6D@shark.rmq.cloudamqp.com/gvmlmvjt'
SCRAPE_NEWS_TASK_QUEUE_NAME = "smart-news-scrape-task-queue"

SLEEP_TIME_IN_SECONDS = 5

dedupe_news_queue_client = CloudAMPQClient(DEDUPE_NEWS_TASK_QUEUE_URL, DEDUPE_NEWS_TASK_QUEUE_NAME)
scrape_news_queue_client = CloudAMPQClient(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)

def handle_message(msg):
    if msg is None or not isinstance(msg, dict):
        print ('message is broken')
        return

    task = msg
    g = Goose()
    article = g.extract(url=task['url'])

    print (article.cleaned_text)

    task['text'] = article.cleaned_text

    dedupe_news_queue_client.sendMessage(task)

while True:
    # fetch msg from queue
    if scrape_news_queue_client is not None:
        msg = scrape_news_queue_client.getMessage()
        if msg is not None:
            # Handle message
            try:
                handle_message(msg)
            except Exception as e:
                print (e)
                pass
        scrape_news_queue_client.sleep(SLEEP_TIME_IN_SECONDS)
