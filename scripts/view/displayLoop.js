/*displayLoop.js handles the delayed looping and display of individual tweets.*/
(function(module) {
  displayLoop = {};

  displayLoop.loop = true;

  displayLoop.loopTweets = function(){
    if(displayLoop.loop === true){
      //run code here
      if(twitterObj.renderArray.length < 10){
        twitterObj.searchTweets();
      };
      var toRender = twitterObj.renderArray.shift();
      renderView.renderObject([toRender], '#tweet-wrapper', '#embed-tweet-template');

    } else {
      return;
    };
    setTimeout(displayLoop.loopTweets(), 1500);
  };

  module.displayLoop = displayLoop;
})(window);
