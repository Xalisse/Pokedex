<div>
    <img src={data.spriteNormalUrl} alt={data.name} on:error={handleError} />
    <img src={data.spriteShinyUrl} alt={data.name} on:error={handleError} />
    
    <h1>{data.name}</h1>
    <p>{data.id}</p>

    {#each data.types as type}
        <p>{type}</p>
    {/each}
    
    <p>{data.weight}</p>
    <p>{data.height}</p>
    <p>{data.rates.gender} / 8 being female</p>
    <p>{data.rates.capture} / 255 being captured</p>

    {#each data.evolutionChain as evolution}
        {#await evolution}
            <p>loading...</p>
        {:then pokemon}
            <button on:click={() => goto(`/pokemon/${pokemon.id}`)}>
                <img src={pokemon.spriteNormalUrl} alt={pokemon.name} on:error={handleError} />
                {pokemon.name}
                {pokemon.id}
                {#each pokemon.types as type}
                    <p>{type}</p>
                {/each}
            </button>
        {:catch error}
            <p>{error.message}</p>
        {/await}
    {/each}
</div>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { handleError } from "$lib/utils/image-not-found";
	import type { PageData } from "./$types";

    export let data: PageData;
    
</script>
