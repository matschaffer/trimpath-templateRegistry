var TemplateRegistry = function(templatePath) {
  this.templatePath = templatePath;
  this.templates = {};
};

TemplateRegistry.prototype = {
  register: function(name, fn) {
    this.templates[name] = fn;
  },

  write: function(name, context, container) {
    container.innerHTML = this.templates[name](context);
  },

  render: function(name, context, container) {
    this.write(name, context, container);
  }
};

TemplateRegistry.modifiers = { 
  "eat"        : function(v)    { return ""; },
  "escape"     : function(s)    { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); },
  "capitalize" : function(s)    { return String(s).toUpperCase(); },
  "default"    : function(s, d) { return s != null ? s : d; }
};

var Templates = new TemplateRegistry("../server");
