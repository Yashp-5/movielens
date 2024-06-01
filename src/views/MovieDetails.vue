<template>
    <div class="container mx-auto p-4">
      <div v-if="movie" class="max-w-2xl mx-auto bg-white rounded shadow-lg p-4">
        <img :src="movie.Poster" alt="Movie Poster" class="w-full">
        <h1 class="text-3xl font-bold my-4">{{ movie.Title }}</h1>
        <p class="text-gray-700 mb-4">{{ movie.Plot }}</p>
        <p class="text-gray-600"><strong>Year:</strong> {{ movie.Year }}</p>
        <p class="text-gray-600"><strong>Genre:</strong> {{ movie.Genre }}</p>
        <p class="text-gray-600"><strong>Director:</strong> {{ movie.Director }}</p>
        <p class="text-gray-600"><strong>Actors:</strong> {{ movie.Actors }}</p>
      </div>
      <div v-else class="text-center text-gray-600">Loading...</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        movie: null
      };
    },
    async created() {
      const movieId = this.$route.params.id;
      const response = await axios.get(`https://www.omdbapi.com/?apikey=652f27f6&i=${movieId}`);
      this.movie = response.data;
    }
  };
  </script>
  