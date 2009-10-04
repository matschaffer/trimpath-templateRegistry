Trimpath TemplateRegistry
=========================

What's the deal here?
---------------------

Ever wanted to render HTML templates from javascript? Yeah, so did we. And so do a lot of people apparently. There are [a](http://beebole.com/pure/ "PURE - JavaScript Template Engine") [lot](http://embeddedjs.com/ "EJS - JavaScript Templates") [of](http://www.kuwata-lab.com/tenjin/ "Tenjin - the fastest template engine in the world") [toolkits](http://code.google.com/p/jssmarty/ "jssmarty - Project Hosting on Google Code") [around](http://code.google.com/p/trimpath/wiki/JavaScriptTemplates "JavaScriptTemplates - trimpath - Project Hosting on Google Code") for this.

We at CIM were evaluating some of them and had the realization that since we're already processing JavaScript (compression) and CSS (from [LESS](http://lesscss.org/ "LESS - Leaner CSS") and compression) at build time, why not process the templates at build time as well?

So what's what this is. After evaluating all of the above mentioned template toolkits, we settled on [TrimPath's JST](http://code.google.com/p/trimpath/wiki/JavaScriptTemplates "JavaScriptTemplates - trimpath - Project Hosting on Google Code") because we all could agree that the syntax was reasonable ([Pure](http://beebole.com/pure/ "PURE - JavaScript Template Engine") was a little hit or miss) and it was able to produce fairly clean JavaScript after processing a template. And when I say clean in this case I mean the generated JavaScript also has no dependency on any library. Since we've already processed the templates, it'd be a shame if we still required the browser to parse the template toolkit at run time.

It seems to be working so far at least in theory. We haven't applied this to production code yet, but hopefully we will soon. Check out client/demo.html for a rough sketch of the idea. The "client" folder is what's intended for use at run-time. The "server" folder is what's intended for use at build-time.

There's still a lot of work to be done. My biggest outstanding question is how to handle the the template registration function name such that we can be pretty flexible about how/where the templates get loaded. And of course, we'll need some specs now that I actually have some rough idea of what the heck I'd doing :)