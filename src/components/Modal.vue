<script setup>
import { useModalStore } from '../stores/index'
import { defineProps } from 'vue';

const modalStore = useModalStore();

const changeModal =() =>{
    modalStore.closeModal();
};
</script>

<template>
    <div class="fixed inset-x-1 inset-y-0 w-full h-full bg-transparant" @click="changeModal()">
        <div class=" m-16 w-2/3 p24 bg-black">
            <h1>Hello World</h1>
        </div>
        
    </div>
    
</template>