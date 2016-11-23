/*twitterView.js*/
(function(module) {
  var twitterView = {};

  $('main form').on('submit', function(e){
    console.log('submitted');
    e.preventDefault();
    var data = $('#searchParam').serialize();

    //format data received from form and pass to searchTweets
    data = decodeURI(data.slice(data.indexOf('=')+1,data.length));
    twitter.searchTweets({q: data, count:'20'});
  });

  module.twitterView = twitterView;
})(window);
