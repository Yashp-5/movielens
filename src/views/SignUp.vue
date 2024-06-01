<!-- src/views/Signup.vue -->
<template>
    <div class="flex justify-center items-center h-screen">
      <div class="w-full max-w-xs">
        <form @submit.prevent="signup" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 class="mb-4 text-center text-2xl font-bold">Sign Up</h2>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <router-link to="/login" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Login
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['signup']),
      async signup() {
        try {
          await this.signup({ email: this.email, password: this.password });
          this.$router.push('/');
        } catch (error) {
          console.error("Signup failed:", error);
        }
      }
    }
  };
  </script>
  