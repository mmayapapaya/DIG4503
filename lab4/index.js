const Express = require("Express");
const app = Express();
const chalk = require("Chalk");
const port = 80;

const pokemon = require('json-pokemon');
const getPokemons = require('json-pokemon/getPokemon');
const pokemons = getPokemons();
const firstPokemon = getPokemons.getPokemonById(1);
const poke = getPokemons.getPokemonByName('poke');

// /id/:id returns JSON obeject matching pokemon ID orrr an error if ID doesn't exist

App.get("/id/:id", function(req, res){

});

// /name/:name returns a json object matching pokemon name or an error if name doesn't exist

App.get("/name/:name", function(req, res){

});



App.listen(port, () => {
	console.log("Server Running Babyyy!");
});