import type { PokemonTypeEnum } from '$lib/models/pokemon-type';
import { fillWithCharBefore } from '$lib/utils/fill-with-chars';

export const load = async () => {
	const allPokemonsQuery = `
		query MyQuery {
			pokemons: pokemon_v2_pokemon(where: {is_default: {_eq: true}}) {
				name
				id
				types: pokemon_v2_pokemontypes {
					type: pokemon_v2_type {
						name
					}
				}
			}
		}`;
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
					pokemons: {
						name: string;
						id: string;
						types: {
							type: {
								name: PokemonTypeEnum;
							};
						}[];
					}[];
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
