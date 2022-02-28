const baseUrl='https://pokeapi.co/api/v2/pokemon';

export async function fetchPokemon(pokemon){
    console.log(`${baseUrl}/${pokemon}`);
    return fetch(`${baseUrl}/${pokemon}`)
}