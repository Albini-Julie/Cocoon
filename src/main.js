import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyA1WJdFTcnSTEzKCzJwe6dSvPxQEpcx9QY",
    authDomain: "sae203-f65a7.firebaseapp.com",
    projectId: "sae203-f65a7",
    storageBucket: "sae203-f65a7.appspot.com",
    messagingSenderId: "339015549022",
    appId: "1:339015549022:web:f0f3f47b9e45683fbef4cf"
  };

  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
