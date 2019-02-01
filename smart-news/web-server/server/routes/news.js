var express = require("express")
var router = express.Router()
var rpcclient = require("../rpc_client/rpc_client")

router.get("/", function(req,res) {

    rpcclient.getNews(news => {
        res.json(news)
    })

})

router.get('/userId/:userId/pageNum/:pageNum', function(req, res, next) {
  console.log('Fetching news...');
  user_id = req.params['userId'];
  page_num = req.params['pageNum'];

  rpcclient.getNewsSummariesForUser(user_id, page_num, function(response) {
    res.json(response);
  });
});

/* POST news click event. */
router.post('/userId/:userId/newsId/:newsId', function(req,res, next) {
  console.log('Logging news click...');
  user_id = req.params['userId'];
  news_id = req.params['newsId'];

  rpcclient.logNewsClickForUser(user_id, news_id);
  res.status(200);
});

module.exports = router;