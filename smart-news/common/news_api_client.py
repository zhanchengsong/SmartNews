import requests
import json
NEWS_API_ENDPOINT = "https://newsapi.org/v2/"
NEWS_API_KEY= '5fa61f5e49924668bcc4349e356737f6'
ARTICLES = 'everything'
SOURCES = ''

def buildUrl (end_point = NEWS_API_ENDPOINT, api_name = ARTICLES):
    return NEWS_API_ENDPOINT + ARTICLES

def getSources(country = 'us', language='en'):
    sourceList = []
    sourcesURL = NEWS_API_ENDPOINT + 'sources'
    params = {
        'apiKey': NEWS_API_KEY,
        'language': language,
        'country':country
    }

    response = requests.get(sourcesURL, params = params)
    res_json = json.loads(response.text)
    src_json = list ( res_json['sources'] )
    for src in src_json:
        sourceList.append(src['id'])

    return sourceList



def getNewsFromSource(sources = ['cnn','cbc-news','abc-news','cnbc'], pageSize=100):
    articles = [] 
    sourcesParam = ','.join(sources)

    init_param = {
        'apiKey': NEWS_API_KEY,
        'sources': sourcesParam,
        'language' : 'en'
    }
    init_res = requests.get(buildUrl(), params = init_param)

    print(json.loads(init_res.text))
    totalCount = json.loads(init_res.text)["totalResults"]
    totalPages = totalCount / pageSize + 1
    print("Initiating Database with " + str(totalCount) + " news")


    params = {
        'apiKey': NEWS_API_KEY,
        'sources' : sourcesParam,
        'pageSize' : pageSize,
        'page': 1
    }

    for pageNum in range(1, 2):
        print "Getting page %d/%d pages" % (pageNum, totalPages)
        params['page'] = pageNum
        response = requests.get(buildUrl(), params = params)
    
        res_json = json.loads(response.text)

        if (res_json is not None and
            res_json['status'] == 'ok'):
            articles.extend(res_json['articles'])


    return articles
