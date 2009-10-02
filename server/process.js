#!/usr/bin/env rhino

load('stdlib.js');
load('trimpath-template-1.0.38.js');

function wrap(templateFile) {
  var wrapper = TrimPath.parseTemplate(readFile('wrapper.js.tpl'));
  var template = TrimPath.parseTemplate(readFile(templateFile));
  return wrapper.process({ name: templateFile,
                           sourceFunc: template.sourceFunc});
}

writeFile(arguments[0] + '.js', wrap(arguments[0]));