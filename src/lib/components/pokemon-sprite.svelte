<div class={`${fullRounded ? 'rounded-full' : 'rounded-2xl' } ${bgColors.get(type)} flex justify-center items-center h-full relative`}>
    <div class='absolute'>
        <TypeIcon type={type} height={height} reduceOpacity={reduceOpacity} />
    </div>
    <img src={spriteNormalUrl} alt='pokemon-sprite' class='absolute h-24' on:error={handleError} />
</div>

<script lang="ts">
	import type { PokemonTypeEnum } from "$lib/models/pokemon-type";
	import { bgColors } from "$lib/models/type-color";
	import { handleError } from "$lib/utils/image-not-found";
	import TypeIcon from "./types/type-icon.svelte";

    export let spriteNormalUrl: string;
    export let type: PokemonTypeEnum;
    export let height: number;
    export let reduceOpacity: boolean = false;
    export let fullRounded: boolean = true;
</script>
