
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import router from '@/router';
import { auth } from '@/main';
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: null,
    movieLists: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setMovieLists(state, lists) {
      state.movieLists = lists;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        // Firebase Authentication: Sign in user with email and password
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        commit('setUser', userCredential.user);
        router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    async signup({ commit }, { email, password }) {
      try {
        // Firebase Authentication: Sign up user with email and password
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        commit('setUser', userCredential.user);
        router.push('/');
      } catch (error) {
        console.error('Signup failed:', error);
      }
    },
    async fetchMovieLists({ commit }) {
      try {
        // Fetch movie lists from OMDB API
        const response = await axios.get('https://www.omdbapi.com/?apikey=652f27f6&...'); // Replace with your actual API key and query parameters
        // Process the response and commit mutations as needed
        commit('setMovieLists', response.data);
      } catch (error) {
        console.error('Failed to fetch movie lists:', error);
      }
    }
  }
});
