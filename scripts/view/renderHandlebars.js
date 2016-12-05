/*renderHandlebars.js will render any array of objects to a handlebars template.*/
(function(module){

  renderView = {};

  renderView.toHtml = function(obj, templateID){
    var templateRender = Handlebars.compile($(templateID).html());
    return templateRender(obj);
  };

  renderView.renderObject = function(ObjectArray, destinationID, templateID) {
    ObjectArray.forEach(function(obj){
      $(destinationID).append(renderView.toHtml(obj, templateID));
    });
  };

  module.renderView = renderView;
})(window);
