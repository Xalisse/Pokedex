<div class={`flex justify-center items-center gap-2 px-4 py-1 rounded-full ${bgColors.get(type)}`}>
    <div class='bg-white rounded-full h-7 w-7 flex justify-center items-center'>
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
