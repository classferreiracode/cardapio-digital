<template>
    <div class="w-full max-w-7xl mx-auto gap-4">
        <div v-for="(category, categoryIndex) in data" :key="categoryIndex" class=" w-full mb-8">
            <h2 class="text-2xl font-bold mb-4">{{ category.category }}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="(item, itemIndex) in category.items" :key="itemIndex" class="">
                    <Product :data="item" :id="`${item.name}_${itemIndex}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
    {
        category: 'Assados',
        items: [
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
    },
    {
        category: 'Fritos',
        items: [
            {
                name: 'item6',
                description: 'Descrição do item 6.'
            },
            {
                name: 'item7',
                description: 'Descrição do item 7.'
            }
        ]
    }
]);
</script>
