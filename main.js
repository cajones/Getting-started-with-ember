require(['ember'], function(Ember) {

  var App = Ember.Application.create({
    Person: Ember.Object.extend({
      name: null
    }),
    HelloView: Ember.View.extend({
      templateName: 'hello-view'
    })
  });

  var model = App.Person.create({
    name: "Bob"
  });

  App.HelloView.create(model).appendTo('body');

});