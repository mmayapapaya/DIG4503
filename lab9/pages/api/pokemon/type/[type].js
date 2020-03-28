import getPokemon from 'json-pokemon/getPokemon';

module.exports = function getPokemonList(filter) {
  const filterObject = Object.assign({}, filter || {});

  if (filterObject.type) {
    filterObject.type = Array.isArray(filterObject.type) ? [...filterObject.type] : [filterObject.type]
  } else {
    filterObject.type = null
  }

  return data.filter(function(pokemon) {
    if (!filterObject.type) return true;

    return filterObject.type.every(function(type) {
      return pokemon.typeList.includes(type);
    });
  });
};