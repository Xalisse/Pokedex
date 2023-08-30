<div class="relative flex justify-center items-center">
    <div class={`${bgColors.get(type)} my-circle h-96 w-screen flex justify-center items-center`}>
        <TypeIcon type={type} height={300} reduceOpacity />
    </div>
    <img src={spriteUrl} alt='pokemon-sprite' class='absolute h-60 -bottom-1' />
</div>

<script lang="ts">
	import type { PokemonTypeEnum } from "$lib/models/pokemon-type";
	import { bgColors } from "$lib/models/type-color";
	import TypeIcon from "./types/type-icon.svelte";

    export let spriteUrl: string;
    export let type: PokemonTypeEnum;
</script>
