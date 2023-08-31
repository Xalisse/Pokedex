<h1>Pokedex</h1>
<div>
    <input type="text" placeholder="#3, venusaur..." on:keyup={handleSearchFor} />

    {#if !filteredPokemons}
        <p>No pokemons found</p>
    {:else}
        <div class="flex flex-col gap-4">
            {#each filteredPokemons as pokemon}
                <PokemonCard {pokemon} on:click={() => handleClickPokemon(pokemon.id)} />
            {/each}
        </div>
    {/if}
</div>

<script lang="ts">
	import { goto } from '$app/navigation';
	import PokemonCard from '$lib/components/pokemon-card.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    let filteredPokemons = data.pokemons;

    const handleSearchFor = (e: any) => {
        const searchText = e.target.value;

        if (!data) return;

        if (searchText.length > 0) {
            filteredPokemons = data.pokemons.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(searchText.toLowerCase())
            })
        } else {
            filteredPokemons = data.pokemons;
        }
    }

    const handleClickPokemon = (pokemonId: string) => {
        goto(`/pokemon/${pokemonId}`)
    }
</script>
 