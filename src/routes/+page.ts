import { getPokemonBasicDataQuery } from '$lib/queries/pokemon-basic-data.query';
import type { TPokemonFullDataQueryRes } from '$lib/queries/pokemon-full-data.query';
import { fillWithCharBefore } from '$lib/utils/fill-with-chars';

export const load = async () => {
	const allPokemonsQuery = getPokemonBasicDataQuery();
	const data = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query: allPokemonsQuery })
	})
		.then((res) => res.json())
		.then(
			(res: {
				data: {
					pokemons: TPokemonFullDataQueryRes[];
				};
			}) =>
				res.data.pokemons.map((pokemon) => ({
					...pokemon,
					types: pokemon.types.map((type) => type.type.name),
					spriteNormalUrl: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${fillWithCharBefore(
						pokemon.id,
						3
					)}.png`,
					spriteShinyUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
				}))
		);
	return { pokemons: data };
};
