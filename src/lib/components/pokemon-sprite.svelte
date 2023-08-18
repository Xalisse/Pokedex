<div class={`rounded-full ${bgColors.get(type)} flex justify-center items-center h-full relative`}>
    <div class='absolute'>
        <TypeIcon type={type} height={height} reduceOpacity={reduceOpacity} />
    </div>
    <img src={spriteNormalUrl} alt={name} class='absolute' />
</div>

<script lang="ts">
	import type { PokemonTypeEnum } from "$lib/models/pokemon-type";
	import { bgColors } from "$lib/models/type-color";
	import TypeIcon from "./types/type-icon.svelte";

    export let name: string;
    export let spriteNormalUrl: string;
    export let spriteShinyUrl: string;
    export let type: PokemonTypeEnum;
    export let height: number;
    export let reduceOpacity: boolean = false;
</script>
