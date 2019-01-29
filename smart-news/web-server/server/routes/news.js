var express = require("express")
var router = express.Router()
var rpcclient = require("../rpc_client/rpc_client")

router.get("/", function(req,res) {

    rpcclient.getNews(news => {
        res.json(news)
    })

})

module.exports = router;