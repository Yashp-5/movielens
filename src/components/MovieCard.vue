<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="movie.Poster" alt="Movie Poster">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ movie.Title }}</div>
        <p class="text-gray-700 text-base">{{ movie.Year }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <button
          @click="addToList"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to List
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movie: Object
    },
    methods: {
      addToList() {
        // Add movie to a list
        console.log(`Adding ${this.movie.Title} to list`);
      }
    }
  };
  </script>
  