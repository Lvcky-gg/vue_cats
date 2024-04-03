<script setup>
import {  onMounted,  ref} from 'vue';
import Card from 'primevue/card';
import { useCatStore, useModalStore } from '../stores/index'
import Modal from '../components/Modal.vue';


const catStore = useCatStore();
const modalStore = useModalStore();
const loading = ref(true);
let showModal = ref(false);

onMounted(async() => {
    await catStore.fetchCats();
    loading.value = false;
});
const changeModal =async(cat) => {
    showModal.value = !showModal.value;
    modalStore.openModal(await catStore.fetchCat(cat.id))};


</script>


<template>
    <div class="grid grid-cols-5">
    <Card class="w=1/2 rounded-lg bg-black m-2" v-for="cat in catStore.cats" :key="cat.id">
      <template #title>{{  }}</template>
      <template #content class="">
        <img class="p-6 m-auto " :src="cat.url" alt="cat" />
        <button class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto mb-2" @click="changeModal(cat)">Learn More</button>
      </template>
    </Card>
  </div>
  <Modal v-if="modalStore.showModal"  :showModal="showModal"></Modal>
  
  </template>