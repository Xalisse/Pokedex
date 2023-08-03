<button on:click={() => dispatch('click')}>
    <h2>{pokemon.name}</h2>
    <p>{pokemon.id}</p>
    <img src={pokemon.spriteNormalUrl} alt={pokemon.name} />
    <img src={pokemon.spriteShinyUrl} alt={pokemon.name} on:error={handleError}/>
</button>

<script lang="ts">
	import { handleError } from "$lib/utils/image-not-found";
	import { createEventDispatcher } from "svelte";

    export let pokemon: {
        name: string;
        id: string;
        spriteNormalUrl: string;
        spriteShinyUrl: string;
    };

    const dispatch = createEventDispatcher<Record<'click', void>>()

</script>
