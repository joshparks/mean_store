// app/routes.js

// expose the routes to our app with module.exports
module.exports = function(app) {

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendFile('./public/index.html');
	});

};