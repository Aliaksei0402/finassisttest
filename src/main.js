import Vue from 'vue';
import Vuex from 'vuex';
import { mapGetters } from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import './assets/scss/app.scss';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase-initialize.js";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(Buefy)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')