<!-- Return the correct icon depending on type -->
{#if type === PokemonTypeEnum.BUG}
    <BugIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.DARK}
    <DarkIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.DRAGON}
    <DragonIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.ELECTRIC}
    <ElectricIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.FAIRY}
    <FairyIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.FIGHTING}
    <FightingIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.FIRE}
    <FireIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.FLYING}
    <FlyingIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.GHOST}
    <GhostIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.GRASS}
    <GrassIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.GROUND}
    <GroundIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.ICE}
    <IceIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.NORMAL}
    <NormalIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.POISON}
    <PoisonIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.PSYCHIC}
    <PsychicIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.ROCK}
    <RockIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.STEEL}
    <SteelIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{:else if type === PokemonTypeEnum.WATER}
    <WaterIcon isColored={isColored} height={height} reduceOpacity={reduceOpacity} />
{/if}

<script lang="ts">
	import { PokemonTypeEnum } from "$lib/models/pokemon-type";
	import BugIcon from "./bug-icon.svelte";
	import DarkIcon from "./dark-icon.svelte";
	import DragonIcon from "./dragon-icon.svelte";
	import ElectricIcon from "./electric-icon.svelte";
	import FairyIcon from "./fairy-icon.svelte";
	import FightingIcon from "./fighting-icon.svelte";
	import FireIcon from "./fire-icon.svelte";
	import FlyingIcon from "./flying-icon.svelte";
	import GhostIcon from "./ghost-icon.svelte";
	import GrassIcon from "./grass-icon.svelte";
	import GroundIcon from "./ground-icon.svelte";
	import IceIcon from "./ice-icon.svelte";
	import NormalIcon from "./normal-icon.svelte";
	import PoisonIcon from "./poison-icon.svelte";
	import PsychicIcon from "./psychic-icon.svelte";
	import RockIcon from "./rock-icon.svelte";
	import SteelIcon from "./steel-icon.svelte";
	import WaterIcon from "./water-icon.svelte";

    export let isColored: boolean = false;
    export let height: number = 16;
    export let type: PokemonTypeEnum;
    export let reduceOpacity: boolean = false;
</script>
