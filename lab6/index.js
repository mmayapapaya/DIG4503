const cors = require("cors");
App.use(cors());

const Express = require("express");
const App = Express();
const chalk = require("Chalk");
const port = 80;

const getPokemons = require('json-pokemon/getPokemon');
//static route :^)

App.use(Express.json());
App.use("/", Express.static("client/build"));

// /name/:name returns an object matching pokemon name orrr an error if name doesn't exist

App.get('/name/:name', (req, res) => {

	var typedname = req.params.name;
	var pokemonname = getPokemons.getPokemonByName(typedname);

	if(pokemonname == null) {
		res.json("No matches! Sorry bud.");
		console.log(chalk.red(req.path));
	}

	else {
		res.json(pokemonname);
		console.log(chalk.green(req.path));
	}

});

// /id/:id returns an object matching pokemon id or an error if id doesn't exist

App.get('/id/:id', (req, res) => {

	var typedId = Number(req.params.id);
	var pokemonid = getPokemons.getPokemonById(typedId);

	if(pokemonid == null) {
		res.json("No matches! Sorry bud.");
		console.log(chalk.red(req.path));
	}

	else {
		res.json(pokemonid);
		console.log(chalk.green(req.path));
	}

});


App.listen(80, () => {
	console.log("Server Running Babyyy!");
});