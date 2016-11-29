/*twitterView.js handles the view layer associated with any content generated from tweets.*/
(function(module) {
  var twitterObjView = {};

  $('header form').on('submit', function(e){
    e.preventDefault();
    var data = $('#searchParam').val();

    twitterObj.searchParams.push(data);
    console.log(twitterObj.searchParams);
    $('#search-parameter-list').empty();
    twitterObjView.renderSearchParam();

  });

  $('#search-button').on('click', function(){
    //format data received from form and pass to searchTweets
    twitterObj.searchTweets({q: twitterObj.getSearchParams(), count:'20'});
  });

  twitterObjView.renderSearchParam = function(){
    var paramObjs = twitterObj.searchParams.map( function(param){
      return { 'param': param };
    });

    renderView.renderObject(paramObjs, '#search-parameter-list', '#search-parameter-template');
  };

  twitterObjView.clearTweets = function() {
    $('#tweet-wrapper').empty();
  };

  module.twitterObjView = twitterObjView;
})(window);
