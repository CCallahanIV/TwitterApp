/*twitter.js handles managing the model layer and interaction with the Twitter API.*/

(function(module) {
  twitterObj = {};

  twitterObj.tweets = [];
  twitterObj.searchParams = [];
  twitterObj.renderArray = [];
  twitterObj.queryObj = {
    q: '',
    result_type: 'mixed',
    lang: 'en',
    count: '40',
    since_id: null
  };


  //function intializes a GET request to the server and passes query parameters
  twitterObj.searchTweets = function(){
    $.get('/searchTwitter', twitterObj.queryObj, function(data){
      twitterObj.tweets = JSON.parse(data).statuses;
      twitterObj.queryObj.since_id = twitterObj.tweets.slice(-1)[0].id;

      twitterObj.getEmbededTweets();
    });
  };

  //function to render all tweets stored in the twitter object local array.
  twitterObj.getEmbededTweets = function(){
    twitterObj.tweets.forEach(function(tweet){
      var queryParams = {
        user: tweet.user.screen_name,
        tweetID: tweet.id_str
      };
      $.get('/getEmbededTweets', queryParams, function(data){
        var renderObj = { 'html': JSON.parse(data).html };

        twitterObj.renderArray.push(renderObj);
      });
    });
    displayLoop.loopTweets();
    console.log(twitterObj.renderArray);
  };

  twitterObj.getSearchParams = function() {
    formatted_data = twitterObj.searchParams.join('&');
    return formatted_data;
  };

  module.twitterObj = twitterObj;
})(window);
