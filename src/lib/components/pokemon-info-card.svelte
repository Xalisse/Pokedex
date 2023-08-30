<div>
    <div class="flex gap-2 text-gray-600 items-center">
        <p class="h-5 w-5"><slot name='icon'></slot></p>
        <p class="uppercase text-lg">{title}</p>
    </div>
    <div class="border rounded-2xl text-xl py-3 px-7 text-center">{value}</div>
</div>

<script lang="ts">
    export let title: string
    export let value: string
</script>
