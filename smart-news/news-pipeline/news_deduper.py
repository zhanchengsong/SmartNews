import datetime
import os
import sys


from dateutil import parser
from sklearn.feature_extraction.text import TfidfVectorizer
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))

from cloudAMPQ_client import CloudAMPQClient
import recommandation_client
import mongodb_client
DEDUPE_NEWS_TASK_QUEUE_URL = 'amqp://asvjopom:hVP3aTrgb5JV3ZRMggobe2d8E2Vb-DW_@cat.rmq.cloudamqp.com/asvjopom'
DEDUPE_NEWS_TASK_QUEUE_NAME = "smart-news-dedupe-news-task-queue"
SLEEP_TIME_IN_SECONDS = 1

NEWS_TABLE_NAME = 'news'

SAME_NEWS_SIMILARITY_THRESHOLD = 0.9

cloudAMPQ_client = CloudAMPQClient(DEDUPE_NEWS_TASK_QUEUE_URL, DEDUPE_NEWS_TASK_QUEUE_NAME)

def handle_message(msg):
    print(msg)
    if msg is None or not isinstance(msg, dict):
        return
    task = msg
    text = str(task['text'])
    if text is None:
        return
    published_at = parser.parse(task['publishedAt'])
    published_at_day_begin = datetime.datetime(published_at.year, published_at.month, published_at.day, 0, 0, 0, 0)
    published_at_day_end = published_at_day_begin + datetime.timedelta(days=1)

    db = mongodb_client.get_db()
    recent_news_list = list ( db[NEWS_TABLE_NAME]\
        .find({'publishedAt': {'$gte': published_at_day_begin, '$lt': published_at_day_end}}) )
    print(recent_news_list)
    if recent_news_list is not None and len(recent_news_list) > 0:
        documents = [str(news['text']) for news in recent_news_list]
        documents.insert(0, text)
        print("documents")
        # use tfidf to calculate similarity
        tfidf = TfidfVectorizer().fit_transform(documents)
        pairwise_sim = tfidf * tfidf.T


        print pairwise_sim.A
        rows, _ = pairwise_sim.shape

        for row in range(1, rows):
            if pairwise_sim[row,0] > SAME_NEWS_SIMILARITY_THRESHOLD:
                print "Duplicated news. Ignore."
                return

    task['publishedAt'] = parser.parse(task['publishedAt'])
    title = task['title']
    if title is not None:
        topic = recommandation_client.classify(title)
        task['class'] = topic

    db[NEWS_TABLE_NAME].replace_one({'digest': task['digest']}, task, upsert=True)



while True: # Mean loop handling all the messages
    if cloudAMPQ_client is not None:
        msg = cloudAMPQ_client.getMessage()
        if msg is not None:
            print("[News-Deduper] RECV MSG : ")
            print(msg)
            try:
                handle_message(msg)
            except Exception as e:
                print e
                pass

        cloudAMPQ_client.sleep(SLEEP_TIME_IN_SECONDS)

