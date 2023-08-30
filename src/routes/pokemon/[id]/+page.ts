import type { PokemonTypeEnum } from '$lib/models/pokemon-type.js';
import { fillWithCharBefore } from '$lib/utils/fill-with-chars.js';

const getFullPokemonData = (pokemonId: number) => {
	console.log('🦄 ~ getFullPokemonData ~ pokemonId:', pokemonId);
	const getPokemonQuery = `query MyQuery {
        pokemon: pokemon_v2_pokemon(where: {id: {_eq: ${pokemonId}}}) {
            id
            name
            types: pokemon_v2_pokemontypes {
                type: pokemon_v2_type {
                    name
                }
            }
        }
    }`;
	return fetch('https://beta.pokeapi.co/graphql/v1beta', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query: getPokemonQuery })
	})
		.then(async (res) => res.json())
		.then((res) => {
			if (res.errors) {
				console.log('🦄 ERROR:', res.errors[0]);
				throw new Error(res.errors[0].message);
			}
			return res;
		})
		.then(
			(res: {
				data: {
					pokemon: {
						id: string;
						name: string;
						types: {
							type: {
								name: PokemonTypeEnum;
							};
						}[];
					}[];
				};
			}) => ({
				...res.data.pokemon[0],
				spriteNormalUrl: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${fillWithCharBefore(
					res.data.pokemon[0].id,
					3
				)}.png`,
				spriteShinyUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${res.data.pokemon[0].id}.png`,
				types: res.data.pokemon[0].types.map((type) => type.type.name)
			})
		);
};

export const load = async ({ params, fetch }) => {
	const getPokemonQuery = `query MyQuery {
        pokemon: pokemon_v2_pokemon(where: {id: {_eq: ${Number(params.id)}}}) {
            id
            name
			height
			weight
			evolutionChain: pokemon_v2_pokemonspecy {
				pokemon_v2_evolutionchain {
					pokemon_v2_pokemonspecies {
						id
					}
				}
			}
			rates: pokemon_v2_pokemonspecy {
				gender: gender_rate
				capture: capture_rate
				hatch: hatch_counter
			}
            types: pokemon_v2_pokemontypes {
                type: pokemon_v2_type {
                    name
                }
            }
            moves: pokemon_v2_pokemonmoves {
                level
                move: pokemon_v2_move {
                    name
                }
                learnMethod: pokemon_v2_movelearnmethod {
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
		body: JSON.stringify({ query: getPokemonQuery })
	})
		.then(async (res) => res.json())
		.then((res) => {
			if (res.errors) {
				console.log('🦄 ERROR:', res.errors[0]);
				throw new Error(res.errors[0].message);
			}
			return res;
		})
		.then(
			async (res: {
				data: {
					pokemon: {
						id: string;
						name: string;
						height: number;
						weight: number;
						evolutionChain: {
							pokemon_v2_evolutionchain: {
								pokemon_v2_pokemonspecies: {
									id: number;
								}[];
							};
						};
						rates: {
							gender: number;
							capture: number;
							hatch: number;
						};
						types: {
							type: {
								name: PokemonTypeEnum;
							};
						}[];
						moves: {
							level: number;
							move: {
								name: string;
							};
							learnMethod: {
								name: string;
							};
						}[];
					}[];
				};
			}) => {
				const evolutionChain = await Promise.all(
					res.data.pokemon[0].evolutionChain.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.map(
						(pokemon) => getFullPokemonData(pokemon.id)
					)
				);
				return {
					...res.data.pokemon[0],
					height: res.data.pokemon[0].height / 10,
					weight: res.data.pokemon[0].weight / 10,
					spriteNormalUrl: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${fillWithCharBefore(
						res.data.pokemon[0].id,
						3
					)}.png`,
					spriteShinyUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${res.data.pokemon[0].id}.png`,
					types: res.data.pokemon[0].types.map((type) => type.type.name),
					evolutionChain: evolutionChain.sort((a, b) => Number(a.id) - Number(b.id))
				};
			}
		);

	return data;
};
