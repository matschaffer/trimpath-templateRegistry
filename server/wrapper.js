var Wrapper = function(wrapperTemplate) {
  this.wrapper = TrimPath.parseTemplate(wrapperTemplate);
}

Wrapper.prototype = {
  wrap: function(name, body) {
    var template = TrimPath.parseTemplate(body);
    return this.wrapper.process({ name: name, sourceFunc: template.sourceFunc});
  }
}
