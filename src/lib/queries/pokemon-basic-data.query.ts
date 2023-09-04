import type { PokemonTypeEnum } from '$lib/models/pokemon-type';

export const getPokemonBasicDataQuery = (pokemonId?: number) => {
	if (pokemonId) {
		return `query pokemonBasicDataQuery {
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
	}

	return `query MyQuery {
        pokemons: pokemon_v2_pokemon(limit: 151, where: {is_default: {_eq: true}}) {
            name
            id
            types: pokemon_v2_pokemontypes {
                type: pokemon_v2_type {
                    name
                }
            }
        }
    }`;
};

export interface IPokemonBasicDataQueryRes {
	name: string;
	id: string;
	types: {
		type: {
			name: PokemonTypeEnum;
		};
	}[];
}
