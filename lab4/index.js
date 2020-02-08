const Express = require("Express");
const app = Express();
const port = 80;

App.listen(80, function() {
	console.log("Server Running Babyyy!");
});

// /id/:id returns JSON obeject matching pokemon ID orrr an error if ID doesn't exist

// /name/:name returns a json object matching pokemon name or an error if name doesn't exist