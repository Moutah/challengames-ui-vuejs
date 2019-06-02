<template>
    <v-app dark>
        <v-toolbar app height=60 color="green darken-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer">
                <v-icon>reorder</v-icon>
            </v-toolbar-side-icon>

            <v-toolbar-title class="headline">
                <span>Challengames</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <LoginLogoutButtons :connection="connection"/>
        </v-toolbar>

        <NavigationDrawer
            @pageChange="pageChange"
            :nbChallenges="myChallenges.length" :drawer="drawer" :connection="connection"/>
        <v-content>
            <MainPage v-if="pageContent == 'mainpage'" :connection="connection"/>
            <div v-else>
                under construction
            </div>
        </v-content>
    </v-app>
</template>

<script>
    import MainPage from './components/MainPage'
    import NavigationDrawer from "./components/NavigationDrawer"
    import LoginLogoutButtons from './components/LoginLogoutButtons'

    export default {
        name: 'App',
        components: {
            MainPage,
            NavigationDrawer,
            LoginLogoutButtons
        },
        data: function() {
            return {
                pageContent: "mainpage",
                drawer: false,
                connection: {
                    username: "Hellorin",
                    isConnected: true
                },
                myChallenges: [
                    "a"
                ]
            }
        },
        methods: {
            pageChange : function(e) {
                this.pageContent = e;
                this.drawer = false;
            }
        }
    }
</script>
