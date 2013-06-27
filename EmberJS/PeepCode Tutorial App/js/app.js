var App = Ember.Application.create();

//Router
App.Router.map(function() {
	this.resource('tables'); // '/#/tables'
});

App.TablesRoute = Ember.Route.extend({
	model: function () {
		return App.Table.find();
	}
});