<script setup>
import {  onMounted,  ref} from 'vue';
import Card from 'primevue/card';
import { useCatStore } from './stores/index'


const catStore = useCatStore();
const loading = ref(true);

onMounted(async() => {
    await catStore.fetchCats();
    loading.value = false;
});
console.log(catStore)


</script>

<template>

  <div class="grid grid-cols-5">
  <Card class="w=1/2 rounded-lg bg-black m-2" v-for="cat in catStore.cats" :key="cat.id">
    <template #title>{{  }}</template>
    <template #content class="">
      <img class="p-6 m-auto " :src="cat.url" alt="cat" />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Learn More</button>
    </template>
  </Card>
</div>

</template>

<style scoped>

</style>
