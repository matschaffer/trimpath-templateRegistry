Templates.register('template.html', function(context) {
  var buffer = [];
  var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {_OUT.write("<ul>");_OUT.write("\n");
_OUT.write("<li>hello ");_OUT.write(name);_OUT.write("</li>");_OUT.write("\n");
_OUT.write("</ul>");}}; TrimPath_Template_TEMP({ write: function(part) {
    buffer.push(part);
  }}, context);
  return buffer.join(''); 
});
