
<template>
    <div class="container mx-auto p-4">
      <h2 class="text-3xl font-bold mb-4">{{ list.name }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MovieCard
          v-for="movie in list.movies"
          :key="movie.imdbID"
          :movie="movie"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import MovieCard from '@/components/MovieCard.vue';
  
  export default {
    components: {
      MovieCard
    },
    computed: {
      ...mapState(['movieLists']),
      list() {
        return this.movieLists.find(list => list.id === this.$route.params.id);
      }
    }
  };
  </script>
  