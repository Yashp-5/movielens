import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { initializeApp } from 'firebase/app';
import { getAuth, getFirestore } from 'firebase/app'; // Update the import
import { createApp } from 'vue';
Vue.config.productionTip = false;

const firebaseConfig = {   
  apiKey: "",   
  authDomain: "",   
  projectId: "movielens-ec769",   
  storageBucket: "",   
  messagingSenderId: "",   
  appId: "",  
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
const app = createApp(App);
app.use(router).use(store).mount('#app');


