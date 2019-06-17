import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        connection: {
            username: 'Hellorin',
            isConnected: true
        },
        mostRecentChallenges: [
        ],
        myChallenges: [
        ]
    },
    mutations: {
        login(state, username) {
            state.connection.username = username;
            state.connection.isConnected = true;
        },
        logoff(state, username) {
            state.connection.username = username;
            state.connection.isConnected = false;
        },
        createChallenge(state, data) {
            state.mostRecentChallenges.push(data);
            if (data.challengee == state.connection.username) {
                state.myChallenges.push(data);
            }
        },
        loadMostRecentChallenges(state) {
            state.mostRecentChallenges = [
                {
                    name: 'Challenge 4000',
                    description: 'Do it !',
                    date: '01/10/2020',
                    submitter: 'Mathieu',
                    challengee: "Hellorin",
                    status: 'OPEN'
                },
                {
                    name: 'Challenge 4001',
                    description: 'Do it again!',
                    date: '01/10/2020',
                    submitter: 'Mathieu',
                    challengee: "Hellorin",
                    status: 'OPEN'
                },
                {
                    name: 'Challenge 4002',
                    description: 'Do it again and again!',
                    date: '01/10/2020',
                    submitter: 'Mathieu',
                    challengee: "Nuno",
                    status: 'OPEN'
                }
            ]
        },
        loadMyChallenges(state) {
            state.myChallenges = [
                "a"
            ]
        }
    },
    getters: {
        username: state => state.connection.username,
        isConnected: state => state.connection.isConnected,
        mostRecentChallenges: state => state.mostRecentChallenges,
        myChallenges: state => state.myChallenges
    }
})
