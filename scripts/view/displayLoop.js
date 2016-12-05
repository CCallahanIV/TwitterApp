/*displayLoop.js handles the delayed looping and display of individual tweets.*/
(function(module) {
  displayLoop = {};

  displayLoop.loop = true;

  displayLoop.loopTweets = function(){
    var looping = setInterval(function(){
      if(!displayLoop.loop){
        displayLoop.stopLoop();
      } else {
        if(!twitterObj.renderArray.length){
          displayLoop.stopLoop();
          return;
      }
      var toRender = twitterObj.renderArray.shift();
      renderView.renderObject([toRender], '#tweet-wrapper', '#embed-tweet-template');
      }
    }, 1500);
  };

  displayLoop.stopLoop = function(){
    clearInterval(displayLoop.loopTweets);
  }

  module.displayLoop = displayLoop;
})(window);
