
<template>
    <div class="my-4">
      <input
        v-model="query"
        @keyup.enter="searchMovies"
        type="text"
        class="w-full p-2 border border-gray-300 rounded"
        placeholder="Search for movies..."
      />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <MovieCard
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie"
        />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MovieCard from '@/components/MovieCard.vue';
  
  export default {
    components: {
      MovieCard
    },
    data() {
      return {
        query: '',
        movies: []
      };
    },
    methods: {
      async searchMovies() {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=652f27f6&s=${this.query}`);
        this.movies = response.data.Search;
      }
    }
  };
  </script>
  