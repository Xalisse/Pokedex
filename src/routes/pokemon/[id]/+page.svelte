<div>
    <div class="h-96">
        <PokemonSpriteHeader spriteUrl={data.spriteNormalUrl} type={data.types[0]} />
    </div>

    <h1 class="capitalize">{data.name}</h1>
    <p>N°{data.id}</p>

    {#each data.types as type}
        <p>{type}</p>
    {/each}
    
    <p>{data.weight}</p>
    <p>{data.height}</p>
    <p>{data.rates.gender} / 8 being female</p>
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
	import PokemonSmallCard from "$lib/components/pokemon-small-card.svelte";
	import PokemonSpriteHeader from "$lib/components/pokemon-sprite-header.svelte";
	import type { PageData } from "./$types";

    export let data: PageData;
    
</script>
