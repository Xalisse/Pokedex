import {
	getPokemonBasicDataQuery,
	type IPokemonBasicDataQueryRes
} from '$lib/queries/pokemon-basic-data.query';
import {
	getPokemonFullDataQuery,
	type TPokemonFullDataQueryRes
} from '$lib/queries/pokemon-full-data.query';
import { fillWithCharBefore } from '$lib/utils/fill-with-chars.js';

const getPokemonBasicData = (pokemonId: number) => {
	const getPokemonQuery = getPokemonBasicDataQuery(pokemonId);
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
				throw new Error(res.errors[0].message);
			}
			return res;
		})
		.then(
			(res: {
				data: {
					pokemon: IPokemonBasicDataQueryRes[];
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
	const getPokemonQuery = getPokemonFullDataQuery(Number(params.id));

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
				throw new Error(res.errors[0].message);
			}
			return res;
		})
		.then(
			async (res: {
				data: {
					pokemon: TPokemonFullDataQueryRes[];
				};
			}) => {
				const evolutionChain = await Promise.all(
					res.data.pokemon[0].evolutionChain.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.map(
						(pokemon) => getPokemonBasicData(pokemon.id)
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
