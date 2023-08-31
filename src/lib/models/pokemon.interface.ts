import type { PokemonTypeEnum } from './pokemon-type';

export interface IPokemon {
	types: PokemonTypeEnum[];
	name: string;
	id: string;
	spriteNormalUrl: string;
	spriteShinyUrl: string;
}
