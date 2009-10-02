var Templates = {
  templates: {},
  
  register: function(name, fn) {
    this.templates[name] = fn;
  },
  
  render: function(name, context) {
    return this.templates[name](context);
  }
}