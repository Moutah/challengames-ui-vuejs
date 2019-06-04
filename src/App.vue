<template>
    <v-app dark>
        <v-toolbar app height=60 color="green darken-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer">
                <v-icon>reorder</v-icon>
            </v-toolbar-side-icon>

            <v-toolbar-title class="headline">
                <span>Challengames</span>
            </v-toolbar-title>
        </v-toolbar>

        <NavigationDrawer
            @pageChange="pageChange"
            @login="login"
            @logoff="logoff"
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

    export default {
        name: 'App',
        components: {
            MainPage,
            NavigationDrawer
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
            },
            login : function(username) {
                this.connection.username = username;
                this.connection.isConnected = true;
            },
            logoff : function() {
                this.connection.username = null
                this.connection.isConnected = false
            }
        }
    }
</script>
