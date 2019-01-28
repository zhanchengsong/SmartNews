import requests
import json
NEWS_API_ENDPOINT = "https://newsapi.org/v2/"
NEWS_API_KEY= '3a95f27a8a8b489d8934e5021ba58391'
ARTICLES = 'everything'

def buildUrl (end_point = NEWS_API_ENDPOINT, api_name = ARTICLES):
    return NEWS_API_ENDPOINT + ARTICLES

def getNewsFromSource(sources = ['cnn=news'], sortBy = 'popularity'):
    articles = [] 
    sourcesParam = ','.join(sources)
    params = {
        'apiKey': NEWS_API_KEY,
        'sources' : sources,
        'sortBy' : sortBy
    }
    
    response = requests.get(buildUrl(), params = params)
    
    res_json = json.loads(response.text)

    if (res_json is not None and 
        res_json['status'] == 'ok'): 
         #populate news
        # for news in res_json['articles']:
        # # news['source'] = res_json['sources']
        #     print(news['source'])
        articles.extend(res_json['articles'])
    return articles
