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
            <button class="btn btn-primary btn-block" @click="showModal = true">+ Adicionar ao pedido</button>
        </div>
    </div>
    <teleport to='body'>
        <dialog :id="modalId" class="modal" :open="showModal">
            <div class="modal-box">
                <h3 class="text-lg font-bold">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action">
                    <button @click="showModal = false" class="btn">Close</button>
                </div>
            </div>
        </dialog>
    </teleport>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const assetsUrl = window.location.origin + '/assets/';
const props = defineProps({
    data: Object,
    id: [String, Number]
});

const modalId = `modal_${props.id}`;

</script>
