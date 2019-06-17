import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        connection: {
            username: 'Hellorin',
            isConnected: true
        }
    },
    mutations: {
        login(state, username) {
            state.connection.username = username;
            state.connection.isConnected = true;
        },
        logoff(state, username) {
            state.connection.username = username;
            state.connection.isConnected = false;
        }
    },
    getters: {
        username: state => state.connection.username,
        isConnected: state => state.connection.isConnected
    }
})
