var jayson = require('jayson');

var client = jayson.client.http({
    port: 4040,
    hostname: 'localhost'
});

function getNews(callback) {
    client.request('getNews',[],function(err, response) {
        if (err) throw err;
        else {
            console.log("response")
            callback(response)
        }
    })
}
module.exports = {
    getNews: getNews
}