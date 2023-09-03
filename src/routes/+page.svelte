<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<div class="p-5">
    <div class="w-full h-14 mb-5 px-7 border rounded-full flex items-center">
        <span class="h-6 w-6 text-gray-600 mr-4"><GiMagnifyingGlass /></span>
        <input type="text" class="w-full h-full outline-none" placeholder="Search a pokemon..." on:keyup={handleSearchFor} />
    </div>

    {#if !filteredPokemons}
        <p>No pokemons found</p>
    {:else}
        <div class="flex flex-col gap-4">
            {#each filteredPokemons as pokemon}
                <PokemonCard {pokemon} on:click={() => handleClickPokemon(pokemon.id)} on:shiny={() => handleShiny(pokemon.id)} />
            {/each}
        </div>
    {/if}
</div>

<script lang="ts">
    import GiMagnifyingGlass from 'svelte-icons/gi/GiMagnifyingGlass.svelte'
	import { goto } from '$app/navigation';
	import PokemonCard from '$lib/components/pokemon-card.svelte';
    import type { PageData } from './$types';
    import authUser, { type IAuthUser } from "$lib/authStore";
	import { firebaseAuth } from "$lib/firebase";
    import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

    export let data: PageData;
    let filteredPokemons = data.pokemons;

    let authUserData: IAuthUser | undefined;
    authUser.subscribe(value => {
        authUserData = value;
    });

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

    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(firebaseAuth, provider)
        .then((result) => {
            $authUser = {
                displayName: result.user.displayName ?? undefined,
                email: result.user.email ?? undefined,
            }
        }).catch((error) => {
            console.error('Error while login: ', error)
        });
    }

    const handleShiny = (pokemonId: string) => {
        if (!authUserData) {
            handleLogin().then(() => {
                // TODO: update shiny
            })
        } else {
            // TODO: update shiny
        }
    }
</script>
 