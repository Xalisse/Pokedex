<div class={`flex justify-center text-sm items-center gap-2 px-2 py-1 rounded-full ${bgColors.get(type)} text-white`}>
    <div class='bg-white rounded-full h-6 w-6 flex justify-center items-center'>
        <TypeIcon type={type} isColored />
    </div>
    <p class="capitalize">{type}</p> 
</div>

<script lang="ts">
	import type { PokemonTypeEnum } from "$lib/models/pokemon-type";
	import { bgColors } from "$lib/models/type-color";
	import TypeIcon from "./types/type-icon.svelte";

    export let type: PokemonTypeEnum;
</script>
