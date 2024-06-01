<template>
    <div>
      <Navbar />
      <div class="container mx-auto p-4">
        <SearchBar />
        <MovieList />
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import MovieList from '@/components/MovieList.vue';

  
  export default {
    components: {
      Navbar,
      SearchBar,
      MovieList
    }
  };
  </script>
  