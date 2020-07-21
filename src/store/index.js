import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        loginError: null,
        registerError: null
    },
    mutations: {
        updateUser(state, { user }) {
            state.user = user;
        },
        loginError(state, error) {
            state.loginError = error
        },
        registerError(state, error) {
            state.registerError = error
        }
    },
    getters: {
        user: state => state.user
    },
    actions: {
        async login(ctx, user) {
            firebase
                .auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then(() => { ctx.commit("loginError", null) })
                .catch((error) => {
                    user.error = error.message;
                    ctx.commit("loginError", error)
                })
        },
        async logOut() {
            firebase
                .auth()
                .signOut()
        },
        async register(ctx, user) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(() => { ctx.commit("registerError", user.error) })
                .catch((error) => {
                    user.error = error.message;
                    ctx.commit("registerError", error)
                })
        },
        async onAuthStateChanged(ctx) {
            firebase.auth().onAuthStateChanged(user => {
                ctx.commit("updateUser", { user });
            });
        }
    },
    modules: {}
});