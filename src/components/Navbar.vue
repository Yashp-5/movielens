
<template>
    <nav class="bg-gray-800 p-4 flex justify-between items-center">
      <div class="text-white text-2xl font-bold">Movie Library</div>
      <div>
        <router-link to="/" class="text-white mx-2">Home</router-link>
        <router-link to="/login" class="text-white mx-2">Login</router-link>
        <router-link to="/signup" class="text-white mx-2">Sign Up</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  