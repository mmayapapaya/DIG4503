import pokemon from 'json-pokemon';

function response(req, res) {

	let result = [{"error" : "Error. Could not find type."}];

	for(let i = 0; i < pokemon.length; i++) {
console.log(pokemon[i]);
	for(let k = 0; k < pokemon[i].typeList.length; k++) {

		if (pokemon[i].typeList[k] == req.query.type) {
			result.push(pokemon[i]);
			console.log(pokemon[i]);

		} else if (result.length > 1) {
			res.json(result.error);
		} 

res.json(result);

		}
	}
}

export default response;
