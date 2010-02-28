Templates.register('${name}', function(context) {
  var buffer = [];
  context._MODIFIERS = TemplateRegistry.modifiers;
  ${sourceFunc}({ write: function(part) {
    buffer.push(part);
  }}, context);
  return buffer.join(''); 
});