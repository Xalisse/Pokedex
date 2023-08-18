<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={() => dispatch('click')} class='grid grid-cols-[96px,1fr] gap-4 items-center border border-gray-200 rounded-full'>
    <!-- <div class='w-28 h-20'> -->
        <PokemonSprite height={60} reduceOpacity={true} name={pokemon.name} type={pokemon.types[0]} spriteNormalUrl={pokemon.spriteNormalUrl} spriteShinyUrl={pokemon.spriteShinyUrl} />
    <!-- </div> -->
    <div class="mr-14 my-2">
        <p class='capitalize font-semibold text-lg leading-[0.97rem]'>{pokemon.name}</p>
        <p class='text-sm text-gray-600 mb-1'>N°{fillWithCharBefore(pokemon.id, 3)}</p>
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
	import { fillWithCharBefore } from "$lib/utils/fill-with-chars";
    export let pokemon: {
        name: string;
        id: string;
        spriteNormalUrl: string;
        spriteShinyUrl: string;
        types: PokemonTypeEnum[];
    };

    const dispatch = createEventDispatcher<Record<'click', void>>()
</script>
