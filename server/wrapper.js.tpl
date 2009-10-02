Templates.register('${name}', function(context) {
  var buffer = [];
  ${sourceFunc}({ write: function(part) {
    buffer.push(part);
  }}, context);
  return buffer.join(''); 
});