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

// Get news summaries for a user
function getNewsSummariesForUser(user_id, page_num, callback) {
    client.request('getNewsSummariesForUser', [user_id, page_num], function(err, error, response) {
        if (err) throw err;
        console.log(response);
        callback(response);
    });
}

// Log a news click event for a user
function logNewsClickForUser(user_id, news_id) {
    client.request('logNewsClickForUser', [user_id, news_id], function(err, error, response) {
        if (err) throw err;
        console.log(response);
    });
}

module.exports = {
    getNews: getNews,
    getNewsSummariesForUser:getNewsSummariesForUser,
    logNewsClickForUser:logNewsClickForUser
}