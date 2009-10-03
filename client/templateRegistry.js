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

var Templates = new TemplateRegistry("../server");
