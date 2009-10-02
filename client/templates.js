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

  parse: function(name, context, container) {
    alert("Client-side parsing fallback not yet implemented.");
  },

  render: function(name, context, container) {
    var that = this;

    if (typeof(template) != "function") {
      $.getScript(this.templatePath + "/" + name + ".js",
               function() {
                 that.write(name, context, container);
               });
    } else {
      this.write(name, context, container);
    }
  }
};

var Templates = new TemplateRegistry("../server");