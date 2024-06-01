<!-- src/components/MovieLists.vue -->
<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Your Movie Lists</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="list in movieLists"
          :key="list.id"
          class="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ list.name }}</div>
            <p class="text-gray-700 text-base">
              {{ list.movies.length }} movies
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <router-link
              :to="{ name: 'listDetails', params: { id: list.id } }"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View List
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['movieLists'])
    }
  };
  </script>
  