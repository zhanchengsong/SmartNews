import requests
import json
NEWS_API_ENDPOINT = "https://newsapi.org/v2"
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
    res_json = json.loads(response.context)
    

        
        

