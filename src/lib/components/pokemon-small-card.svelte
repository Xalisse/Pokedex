<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={() => dispatch('click')} class='flex gap-6 items-center border border-gray-200 rounded-full'>
    <div class='w-36'>
        <PokemonSprite name={pokemon.name} type={pokemon.types[0]} spriteNormalUrl={pokemon.spriteNormalUrl} spriteShinyUrl={pokemon.spriteShinyUrl} />
    </div>
    <div>
        <p class='capitalize font-semibold'>{pokemon.name}</p>
        <p>N°{pokemon.id}</p>
        <div class='flex gap-4'>
            {#each pokemon.types as type}
                <PokemonSmallTypeBadge type={type} />
            {/each}
        </div>
    </div>
</div>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
	import PokemonSprite from "./pokemon-sprite.svelte";
	import type { PokemonTypeEnum } from "$lib/models/pokemon-type";
	import PokemonSmallTypeBadge from "./pokemon-small-type-badge.svelte";
    export let pokemon: {
        name: string;
        id: string;
        spriteNormalUrl: string;
        spriteShinyUrl: string;
        types: PokemonTypeEnum[];
    };

    const dispatch = createEventDispatcher<Record<'click', void>>()
</script>
