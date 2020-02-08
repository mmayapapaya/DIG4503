const Express = require("express");
const App = Express();
const chalk = require("Chalk");
const port = 80;

const getPokemons = require('json-pokemon/getPokemon');

// /name/:name returns JSON obeject matching pokemon ID orrr an error if ID doesn't exist

App.get('/name/:name', (req, res) => {

	if(getPokemons.getPokemonByName(Req.params.name) == null) {
		res.send("No matches! Sorry bud.");
		console.log(chalk.red(Req.path));
	}

	else {
		res.send(Req.params.name);
		console.log(chalk.green(Req.path));
	}

});

// /id/:id returns a json object matching pokemon name or an error if name doesn't exist

App.get('/id/:id', (req, res) => {

	if(getPokemons.getPokemonById(Req.params.id) == null) {
		res.send("No matches! Sorry bud.");
		console.log(chalk.red(Req.path));
	}

	else {
		res.send(Req.params.id);
		console.log(chalk.green(Request.path));
	}

});


App.listen(80, () => {
	console.log("Server Running Babyyy!");
});