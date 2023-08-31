import type { IPokemonBasicDataQueryRes } from './pokemon-basic-data.query';

export const getPokemonFullDataQuery = (id: number) => `query MyQuery {
        pokemon: pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
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

interface IPokemonFullDataQueryRes {
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
	moves: {
		level: number;
		move: {
			name: string;
		};
		learnMethod: {
			name: string;
		};
	}[];
}

export type TPokemonFullDataQueryRes = IPokemonFullDataQueryRes & IPokemonBasicDataQueryRes;
