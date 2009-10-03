$.extend(TemplateRegistry.prototype, {
  wrapper: function(callback) {
    var that = this;
    if (this.wrapperInstance) {
      callback(this.wrapperInstance);
    } else {
      $.get(this.templatePath + "/wrapper.js.tpl", function(data) {
        callback(that.wrapperInstance = new Wrapper(data));
      })
    }
  },

  render: function(name, context, container) {
    var that = this;
    $.get(this.templatePath + "/" + name, function(data) {
      that.wrapper(function(wrapper) {
        eval(wrapper.wrap(name, data));
        that.write(name, context, container);
      });
    });
  }
});
