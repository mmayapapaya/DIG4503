import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find pokemon with this type."};

    const type = parseInt(req.query.typeList);

    let pokemon = getPokemon.getPokemonById(typeList);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}