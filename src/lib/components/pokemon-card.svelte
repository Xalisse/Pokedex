<div class='grid grid-cols-[1fr,45px]'>
    <button on:click={() => dispatch('click')} class={`${bgColors.get(`${pokemon.types[0]}-light`)} grid grid-rows-1 grid-cols-[1fr,130px] w-full h-32 rounded-l-2xl`}>
        <div class="p-4 h-full text-left">
            <p class="text-gray-600">N°{fillWithCharBefore(pokemon.id, 3)}</p>
            <h2 class="capitalize text-2xl font-bold mb-3">{pokemon.name}</h2>
            <div class="flex gap-2">
                {#each pokemon.types as type}
                    <PokemonTypeBadge type={type} />
                {/each}
            </div>
        </div>
        <PokemonSprite spriteNormalUrl={pokemon.spriteNormalUrl} type={pokemon.types[0]} height={100} reduceOpacity fullRounded={false}/>
    </button>
    <div class={`flex flex-col py-2 justify-between items-center rounded-r-2xl ${bgColors.get(pokemon.types[0])}`}>
        <button class='text-white opacity-75 w-8 h-8' on:click={() => dispatch('shiny')}><GiStarSwirl /></button>
        <button class='text-white opacity-75 w-8 h-8' on:click={() => dispatch('perfect')}><GiStarsStack /></button>
        <button class='text-white opacity-75 w-8 h-8' on:click={() => dispatch('captured')}><GiRoundStar /></button>
    </div>
</div>

<script lang="ts">
    import GiStarSwirl from 'svelte-icons/gi/GiStarSwirl.svelte'
    import GiRoundStar from 'svelte-icons/gi/GiRoundStar.svelte'
    import GiStarsStack from 'svelte-icons/gi/GiStarsStack.svelte'
	import { bgColors } from "$lib/models/type-color";
	import { fillWithCharBefore } from "$lib/utils/fill-with-chars";
	import { createEventDispatcher } from "svelte";
	import PokemonTypeBadge from "./pokemon-type-badge.svelte";
	import PokemonSprite from "./pokemon-sprite.svelte";
	import type { IPokemon } from "$lib/models/pokemon.interface";

    export let pokemon: IPokemon;

    const dispatch = createEventDispatcher<Record<'click' | 'shiny' | 'perfect' | 'captured', void>>()

</script>
