import { defineStore } from "pinia";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=true",
};

export const useModalStore = defineStore("modal", {
  state: () => {
    return {
      showModal: false,
      cat: null,
    };
  },
  actions: {
    openModal(cat) {
      this.modal = true;
      this.cat = cat;
    },
    closeModal() {
      this.modal = false;
      this.cat = null;
    },
  },
  getters: {
    getModal: (state) => {
      return state.modal;
    },
    getCat: (state) => {
      return state.cat;
    },
  },
});

export const useCatStore = defineStore("cat", {
  state: () => {
    return { cats: [] };
  },
  actions: {
    async fetchCats() {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        this.cats = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchCat(id) {
      try {
        const response = await axios.request({
          method: "GET",
          url: `https://api.thecatapi.com/v1/images/${id}`,
        });
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getCat: (state) => (index) => {
      return state.cats[index];
    },
    getCats: (state) => {
      return state.cats;
    },
  },
});
