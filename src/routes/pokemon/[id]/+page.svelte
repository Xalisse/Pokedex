<div>
    <div class="h-96">
        <PokemonSpriteHeader spriteUrl={data.spriteNormalUrl} type={data.types[0]} />
    </div>

    <h1>{data.name}</h1>
    <p class="text-lg text-gray-600 font-bold">N°{fillWithCharBefore(data.id, 3)}</p>

    <div class="flex gap-2 mb-2">
        {#each data.types as type}
            <PokemonTypeBadge type={type} />
        {/each}
    </div>

    <PokemonGender gender={data.rates.gender} />
    
    <p>{data.weight}</p>
    <p>{data.height}</p>
    <p>{data.rates.capture} / 255 being captured</p>

    <h2>Evolutions</h2>
    <div class='grid gap-4'>
        {#each data.evolutionChain as evolution}
            {#await evolution}
                <p>loading...</p>
            {:then pokemon}
                <PokemonSmallCard on:click={() => goto(`/pokemon/${pokemon.id}`)} pokemon={pokemon} />
            {:catch error}
                <p>{error.message}</p>
            {/await}
        {/each}
    </div>
</div>

<script lang="ts">
	import { goto } from "$app/navigation";
	import PokemonGender from "$lib/components/pokemon-gender.svelte";
	import PokemonSmallCard from "$lib/components/pokemon-small-card.svelte";
	import PokemonSpriteHeader from "$lib/components/pokemon-sprite-header.svelte";
	import PokemonTypeBadge from "$lib/components/pokemon-type-badge.svelte";
	import { fillWithCharBefore } from "$lib/utils/fill-with-chars";
	import type { PageData } from "./$types";

    export let data: PageData;
    
</script>
