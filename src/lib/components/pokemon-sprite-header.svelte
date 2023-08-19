<div class="h-4/5 flex items-end">
    <div class={`${bgColors.get(type)} h-full w-full flex justify-center items-center relative rounded-[145px/100px]`}>
        <div class={`${bgColors.get(type)} h-2/5 w-full absolute top-0`}></div>
        <div class='absolute'>
            <TypeIcon type={type} height={200} reduceOpacity />
        </div>
        <img src={spriteUrl} alt='pokemon-sprite' class='absolute h-60 -bottom-11' />
    </div>
</div>

<script lang="ts">
	import type { PokemonTypeEnum } from "$lib/models/pokemon-type";
	import { bgColors } from "$lib/models/type-color";
	import TypeIcon from "./types/type-icon.svelte";

    export let spriteUrl: string;
    export let type: PokemonTypeEnum;
</script>
