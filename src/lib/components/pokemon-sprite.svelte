<div class={`rounded-full ${bgColors.get(type)} flex justify-center`}>
    <img src={spriteNormalUrl} alt={name} />
</div>

<script lang="ts">
	import type { PokemonTypeEnum } from "$lib/models/pokemon-type";
	import { bgColors } from "$lib/models/type-color";

    export let name: string;
    export let spriteNormalUrl: string;
    export let spriteShinyUrl: string;
    export let type: PokemonTypeEnum;
</script>
