/*twitter.js*/

(function(module) {
  twitter = {};

  twitter.tweets = [];

  twitter.searchTweets = function(queryParams){
    console.log('Search Tweets invoked');
    $.get('/searchTwitter', queryParams, function(data){
      twitter.tweets = JSON.parse(data);
      console.log(twitter.tweets);
    });
  };

  module.twitter = twitter;
})(window);
