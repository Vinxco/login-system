import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDWTBvAn9wticbZzBmffed9SxqgCR5IFAk",
  authDomain: "login-system-2459d.firebaseapp.com",
  projectId: "login-system-2459d",
  storageBucket: "login-system-2459d.appspot.com",
  messagingSenderId: "586054517735",
  appId: "1:586054517735:web:d5f691220c482cb4e03342",
  measurementId: "G-NX3CY5PW9H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function() {
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
});
