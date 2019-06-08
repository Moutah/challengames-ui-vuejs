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

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat small @click="changeLocale('en')">
                    <div style="font-size:25px">
                        <flag iso="gb"/>
                    </div>
                </v-btn>
                <v-btn flat small @click="changeLocale('fr')">
                    <div style="font-size:25px">
                        <flag iso="fr"/>
                    </div>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <NavigationDrawer
            @pageChange="pageChange"
            @login="login"
            @logoff="logoff"
            :nbChallenges="myChallenges.length" :drawer="drawer" :connection="connection"/>

        <v-content>
            <router-view :connection="connection"></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import NavigationDrawer from "./components/NavigationDrawer"

    import $i18n from '@/plugins/i18n'

    export default {
        name: 'App',
        components: {
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
            },
            changeLocale : function(locale) {
                $i18n.locale = locale;
            }

        }
    }
</script>
