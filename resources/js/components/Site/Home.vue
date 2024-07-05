<template>
    <div class="w-full max-w-7xl mx-auto md:grid-cols-2 grid lg:grid-cols-3 gap-4">
        <div class="" v-for="item in data">
            <Product :data="item" />

        </div>

    </div>
</template>
<script setup>
import Product from '../Product.vue';

const assetsUrl = window.location.origin + '/assets/';

const data = [
    {
        name: 'item1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum!'
    },
    {
        name: 'item2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum!'
    },
    {
        name: 'item3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum!'
    },
    {
        name: 'item4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum!'
    },
    {
        name: 'item5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum!'
    }
]
</script>
