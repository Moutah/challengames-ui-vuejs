<template>
    <v-app dark>
        <v-toolbar app height=60 color="green darken-3">
            <v-toolbar-side-icon>
                <v-icon>reorder</v-icon>
            </v-toolbar-side-icon>

            <v-toolbar-title class="headline">
                <span>Challengames</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <LoginLogoutButtons :connection="connection"/>
        </v-toolbar>

        <v-content>
            <MainPage :connection="connection"/>
        </v-content>
    </v-app>
</template>

<script>
    import MainPage from './components/MainPage'
    import LoginLogoutButtons from './components/LoginLogoutButtons'

    export default {
        name: 'App',
        components: {
            MainPage,
            LoginLogoutButtons
        },
        data: function() {
            return {
                connection: {
                    username: "Hellorin",
                    isConnected: true
                }
            }
        }
    }
</script>
