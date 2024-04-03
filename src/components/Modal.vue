<script setup>
import { useModalStore } from '../stores/index'
import { defineProps, toRaw } from 'vue';

const modalStore = useModalStore();
// console.log(toRaw(modalStore.cat))
const changeModal =() =>{
    modalStore.closeModal();
    
};
</script>

<template>
    <div class="fixed inset-x-1 inset-y-0 w-full h-full bg-transparant" @click="changeModal()">
        <div class=" m-auto mt-24 w-2/3 h-2/3 rounded-lg p24 bg-black">
            <img class="p-6 m-auto " :src="toRaw(modalStore.cat).url" alt="cat" />
            <div v-for="breed in toRaw(modalStore.cat)?.breeds">
                <h1 class=" text-xl  p-6">{{ breed.name }}</h1>
                <h2 class="text-xl pl-6 pr-6">About</h2>
                <p class="p-6 pt-0">{{ breed.description }}</p>
            </div>
        
                
        </div>
        
    </div>
    
</template>