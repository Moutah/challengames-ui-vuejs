<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
        <v-list class="pa-1">
            <v-list-tile avatar>
                <v-list-tile-avatar>
                    <v-icon>face</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title v-if="connection.isConnected">{{connection.username}}</v-list-tile-title>
                    <v-list-tile-title v-else>Not connected</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-list>
            <v-divider></v-divider>

            <v-list-tile @click="toMainPage">
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <template v-if="connection.isConnected">
                <v-divider></v-divider>

                <v-list-tile two-line>
                    <v-list-tile-action>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                        <button @click="this.dialog = true">
                            Add a new challenge <v-icon>add_box</v-icon>
                        </button>
                        <CreateChallengeDialog :connection="connection" :dialog="dialog" />
                        </v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>

                <v-divider></v-divider>

                <v-list-tile @click="toMyChallenges">
                    <v-list-tile-action>
                        <v-badge>
                            <template v-slot:badge>
                                <span>{{nbChallenges}}</span>
                            </template>
                        </v-badge>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            My challenges
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import CreateChallengeDialog from './CreateChallengeDialog'

    export default {
        name: "NavigationDrawer",
        components: {
            CreateChallengeDialog
        },
        props: ['connection', 'drawer', 'nbChallenges'],
        data () {
            return {
                dialog: false,
                dialogCreateChallenge: false,
                myChallenges: []
            }
        },
        methods: {
            showCreateChallengePopup: function() {
                this.dialog = false;
            },
            toMainPage: function() {
                this.$emit('pageChange', 'mainpage');
            },
            toMyChallenges: function() {
                this.$emit('pageChange', 'mychallenges')
            }

        }
    }
</script>

<style>

</style>
