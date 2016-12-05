/*twitterView.js handles the view layer associated with any content generated from tweets.*/
(function(module) {
  var twitterObjView = {};

  $('#search-form').on('submit', function(e){
    e.preventDefault();
    var data = $('#searchParam').val();

    $('#search-form')[0].reset();
    $('#searchParam').blur();

    twitterObj.searchParams.push(data);
    console.log(twitterObj.searchParams);
    $('#search-parameter-list').empty();
    twitterObjView.renderSearchParam();

  });

  $('#search-button').on('click', function(){
    //format data received from form and pass to searchTweets
    twitterObj.queryObj.q = twitterObj.getSearchParams();
    twitterObj.searchTweets();
  });

  $('#search-parameter-list').on('click', 'a', function(e){
    e.preventDefault();
    var param = $(this).parent().text().replace(' | ', '');
    
    twitterObj.searchParams.splice( twitterObj.searchParams.indexOf(param), 1);
    console.log(twitterObj.searchParams);

    $('#search-parameter-list').empty();
    twitterObjView.renderSearchParam();
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
