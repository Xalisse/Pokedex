<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={() => dispatch('click')} class='flex gap-6 items-center border border-gray-200 rounded-full'>
    <div class='w-36'>
        <PokemonSpriteType name={pokemon.name} spriteNormalUrl={pokemon.spriteNormalUrl} spriteShinyUrl={pokemon.spriteShinyUrl} />
    </div>
    <div>
        <p class='capitalize font-semibold'>{pokemon.name}</p>
        <p>N°{pokemon.id}</p>
        <div class='flex gap-4'>
            {#each pokemon.types as type}
                <p>{type}</p>
            {/each}
        </div>
    </div>
</div>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
	import PokemonSpriteType from "./pokemon-sprite-type.svelte";
    export let pokemon: {
        name: string;
        id: string;
        spriteNormalUrl: string;
        spriteShinyUrl: string;
        types: string[];
    };

    const dispatch = createEventDispatcher<Record<'click', void>>()
</script>
