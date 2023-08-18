<svg height={height} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill={fillColor} fill-opacity={opacity} fill-rule="evenodd" clip-rule="evenodd" d="M481 256C481 380.264 380.264 481 256 481C131.736 481 31 380.264 31 256C31 131.736 131.736 31 256 31C380.264 31 481 131.736 481 256ZM384.571 256C384.571 327.008 327.008 384.571 256 384.571C184.992 384.571 127.429 327.008 127.429 256C127.429 184.992 184.992 127.429 256 127.429C327.008 127.429 384.571 184.992 384.571 256Z" />
</svg>

<script lang="ts">
    export let isColored: boolean = false;
    export let height: number = 24;
    export let reduceOpacity: boolean = false;
    export let fillColor: string = isColored ? '#919aa2' : "#fff";
    const opacity = reduceOpacity ? 0.5 : 1;
</script>
