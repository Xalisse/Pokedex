<div class="text-gray-600">
    <p class="uppercase text-center">Gender</p>
    <div class="h-3 relative">
        <div id="bg-gender" class="bg-pink-400 h-full w-full rounded-full"></div>
        <div id="percentage-gender" class="bg-sky-800 h-full rounded-l-full absolute top-0" style={`width:${percentageMale}%`}></div>
    </div>
    <div class="flex justify-between h-6 pt-1">
        <span class="flex"><GiMale />{percentageMale}%</span>
        <span class="flex"><GiFemale />{percentageFemale}%</span>
    </div>
</div>

<script lang="ts">
    import GiFemale from 'svelte-icons/gi/GiFemale.svelte'
    import GiMale from 'svelte-icons/gi/GiMale.svelte'
    export let gender: number

    const percentageMale = 100 - (gender / 8 * 100)
    const percentageFemale = 100 - percentageMale
</script>
