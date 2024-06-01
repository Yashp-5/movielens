import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { initializeApp } from 'firebase/app';
import { getAuth, getFirestore } from 'firebase/app'; // Update the import
import { createApp } from 'vue';
Vue.config.productionTip = false;

const firebaseConfig = {   
  apiKey: "AIzaSyCpWPgKn8cjudatWhCnBdvPDCV6KEJusSU",   
  authDomain: "movielens-ec769.firebaseapp.com",   
  projectId: "movielens-ec769",   
  storageBucket: "movielens-ec769.appspot.com",   
  messagingSenderId: "366992667846",   
  appId: "1:366992667846:web:e00d1fb6aedde68c5893c7",  
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
const app = createApp(App);
app.use(router).use(store).mount('#app');


