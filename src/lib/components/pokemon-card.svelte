<div>
    <h2>{pokemon.name}</h2>
    <p>{pokemon.id}</p>
    <img src={pokemon.spriteNormalUrl} alt={pokemon.name} />
    <img src={pokemon.spriteShinyUrl} alt={pokemon.name} on:error={handleError}/>
</div>

<script lang="ts">
    export let pokemon: {
        name: string;
        id: string;
        spriteNormalUrl: string;
        spriteShinyUrl: string;
    };

    let fallback = 'http://placekitten.com/96/96'

    const handleError = ev => ev.target.src = fallback

</script>
