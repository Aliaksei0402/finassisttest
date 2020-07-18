import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app"
import "firebase/auth"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        updateUser(state, { user }) {
            Vue.set(state, "user", user);
        },

    },
    getters: {
        user: state => state.user
    },
    actions: {
        login(ctx, user) {
            firebase
                .auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .catch((error) => { user.error = error.message })
        },
        register(ctx, user) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .catch((error) => { user.error = error.message })
        },
        onAuthStateChanged(ctx) {
            firebase.auth().onAuthStateChanged(user => {
                ctx.commit("updateUser", { user });
            });
        },
        logout(ctx) {

        }
    },
    modules: {}
});