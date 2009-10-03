#!/usr/bin/env rhino

load('stdlib.js');
load('trimpath-template-1.0.38.js');
load('wrapper.js');

// Soon we'll start iterating over a whole folder and pre-compiling all the templates down to one file

var wrapper = new Wrapper(readFile('wrapper.js.tpl'));
writeFile('templates.html.js', wrapper.wrap(arguments[0], readFile(arguments[0])));