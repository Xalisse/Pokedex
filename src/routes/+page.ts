export const load = async () => {
	const allPokemonsQuery = `
		query MyQuery {
			lang: pokemon_v2_language {
				name
				pokemons: pokemon_v2_pokemonspeciesnames {
					name
					id: pokemon_species_id
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
					lang: {
						name: string;
						pokemons: {
							name: string;
							id: string;
						}[];
					}[];
				};
			}) => ({
				...res.data,
				lang: res.data.lang.map((lang) => ({
					...lang,
					pokemons: lang.pokemons.map((pokemon) => ({
						...pokemon,
						spriteNormalUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
						spriteShinyUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
					}))
				}))
			})
		);
	console.log('🦄 ~ load ~ data:', data);
	return data;
};
