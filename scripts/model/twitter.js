/*twitter.js handles managing the model layer and interaction with the Twitter API.*/

(function(module) {
  twitterObj = {};

  twitterObj.tweets = [];
  twitterObj.searchParams = [];

  //function intializes a GET request to the server and passes query parameters
  twitterObj.searchTweets = function(queryParams){
    $.get('/searchTwitter', queryParams, function(data){
      twitterObj.tweets = JSON.parse(data).statuses;
      twitterObjView.clearTweets();
      twitterObj.renderTweets();
    });
  };

  //function to render all tweets stored in the twitter object local array.
  twitterObj.renderTweets = function(){
    twitterObj.tweets.forEach(function(tweet){
      var queryParams = {
        user: tweet.user.screen_name,
        tweetID: tweet.id_str
      };
      $.get('/renderTweets', queryParams, function(data){
        var renderObj = { 'html': JSON.parse(data).html };

        renderView.renderObject([renderObj], '#tweet-wrapper', '#embed-tweet-template');
      });
    });
  };

  twitterObj.getSearchParams = function() {
    formatted_data = twitterObj.searchParams.join('&');
    return formatted_data;
  };

  module.twitterObj = twitterObj;
})(window);
