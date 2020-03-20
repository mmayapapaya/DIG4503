const Express = require('express');
const App = Express();
const Port = 8080;

App.listen(8080, function() {
	console.log('Server Running!');
});

App.use("/public", Express.static('public'));

App.get('/', function(Request,Response) {
    Response.send('Hello World!');
});
