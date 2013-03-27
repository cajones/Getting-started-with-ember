require(['ember'], function(Ember) {

  var app = Ember.Application.create({
    MyModel: Ember.Object.extend({
      name: null
    }),
    HelloView: Ember.View.extend({
      templateName: 'hello-view'
    })
  });

  var model = app.MyModel.create({
    name: "World"
  });

  app.HelloView.create(model).appendTo('body');
});