import pokemon from 'json-pokemon';

function response(req, res) {

	let result = {"error" : "Error. Could not find type."};

    let type = req.query.type;

    let results = [];

	for(let i = 0; i < pokemon.length; i++) {
console.log(pokemon[i]);
	for(let k = 0; k < pokemon[i].typeList.length; k++) {

		if (pokemon[i].typeList == req.query.type) {
			results.push(pokemon[i].typeList);
			console.log(pokemon[i]);

		} else if (result.length > 1) {
			res.json(result.error);
		} 

res.json(results);

		}
	}
}

export default response;