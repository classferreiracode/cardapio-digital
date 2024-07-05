<template>
    <div class="flex flex-col rounded-lg border-1 border-base-300 shadow-md w-full p-4 gap-4">
        <div class="flex gap-4 items-center ">
            <div class="w-32 flex items-center">
                <img :src="assetsUrl + '/images/image.png'" class="w-32 h-32 rounded-full">
            </div>
            <div class="w-2/3 flex flex-col">
                <h1 class="text-xl font-black tracking-widest capitalize">
                    {{ data.name }}
                </h1>
                <p class="text-pretty text-justify tracking-wider text-xs">
                    {{ data.description }}
                </p>
            </div>
        </div>
        <div class="w-full">
            <button class="btn btn-primary btn-block" onclick="my_modal_1.showModal()">+ Adicionar ao pedido</button>
        </div>
    </div>
</template>

<script setup>
const assetsUrl = window.location.origin + '/assets/';
const props = defineProps({
    data: Object
})
</script>
