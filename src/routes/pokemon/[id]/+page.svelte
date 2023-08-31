<svelte:head>
    <title>Pokedex - {data.name}</title>
</svelte:head>

<PokemonSpriteHeader spriteUrl={data.spriteNormalUrl} type={data.types[0]} />
<button class="h-8 w-8 text-white absolute top-6 ml-5" on:click={handleBack}><IoIosArrowBack /></button>

<div class="px-5">
    <h1>{data.name}</h1>
    <p class="text-lg text-gray-600 font-bold">N°{fillWithCharBefore(data.id, 3)}</p>

    <div class="flex gap-2 mt-8 mb-12">
        {#each data.types as type}
            <PokemonTypeBadge type={type} />
        {/each}
    </div>

    <PokemonGender gender={data.rates.gender} />
    
    <div class="grid grid-cols-2 gap-6 my-12">
        <PokemonInfoCard title="Weight" value={`${data.weight} kg`}>
            <GiWeight slot="icon" />
        </PokemonInfoCard>
        <PokemonInfoCard title="Height" value={`${data.height} m`}>
            <GiBodyHeight slot="icon" />
        </PokemonInfoCard>
        <PokemonInfoCard title="Capture" value={`${data.rates.capture} / 255`}>
            <GiDiceSixFacesSix slot="icon" />
        </PokemonInfoCard>
        <PokemonInfoCard title="Hatch" value={`${data.rates.hatch * 255} steps`}>
            <GiBigEgg slot="icon" />
        </PokemonInfoCard>
    </div>

    <p class='text-lg text-gray-600 uppercase text-center mb-2'>Evolutions</p>
    <div class='grid gap-4'>
        {#each data.evolutionChain as pokemon, index}
            <PokemonSmallCard on:click={() => goto(`/pokemon/${pokemon.id}`)} pokemon={pokemon} />
            {#if index < data.evolutionChain.length - 1}
                <p class="h-5 text-gray-600"><GiPlainArrow /></p>
            {/if}
        {/each}
    </div>
</div>


<script lang="ts">
    import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte'
    import GiPlainArrow from 'svelte-icons/gi/GiPlainArrow.svelte'
    import GiBigEgg from 'svelte-icons/gi/GiBigEgg.svelte'
    import GiDiceSixFacesSix from 'svelte-icons/gi/GiDiceSixFacesSix.svelte'
    import GiBodyHeight from 'svelte-icons/gi/GiBodyHeight.svelte'
    import GiWeight from 'svelte-icons/gi/GiWeight.svelte'
	import { goto } from "$app/navigation";
	import PokemonGender from "$lib/components/pokemon-gender.svelte";
	import PokemonInfoCard from "$lib/components/pokemon-info-card.svelte";
	import PokemonSmallCard from "$lib/components/pokemon-small-card.svelte";
	import PokemonSpriteHeader from "$lib/components/pokemon-sprite-header.svelte";
	import PokemonTypeBadge from "$lib/components/pokemon-type-badge.svelte";
	import { fillWithCharBefore } from "$lib/utils/fill-with-chars";
	import type { PageData } from "./$types";

    export let data: PageData;

    const handleBack = () => {
        goto('/')
    }
</script>
