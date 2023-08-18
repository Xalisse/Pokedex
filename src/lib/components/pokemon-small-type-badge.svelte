<div class={`${bgColors.get(type)} w-full flex justify-center items-center py-1 rounded-full`}>
    <TypeIcon type={type} height={13} />
</div>

<script lang="ts">
    import type { PokemonTypeEnum } from "$lib/models/pokemon-type";
	import { bgColors } from "$lib/models/type-color";
    import TypeIcon from "./types/type-icon.svelte";

    export let type: PokemonTypeEnum;
</script>
