// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import your components
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SignUp from '@/views/SignUp.vue';
import MovieDetails from '@/views/MovieDetails.vue';
import ListDetails from '@/views/ListDetails.vue';

// Use VueRouter
Vue.use(VueRouter);

// Define routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/movie/:id',
    name: 'movieDetails',
    component: MovieDetails
  },
  {
    path: '/list/:id',
    name: 'ListDetails',
    component: ListDetails
  }
];

// Create the router instance
const router = new VueRouter({
  mode: 'history', // Optional: use history mode for clean URLs
  routes
});

// Export the router
export default router;
