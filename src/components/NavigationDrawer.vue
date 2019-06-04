<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
    >
        <br/>
        <div class="text-xs-center">
            <v-icon x-large color="green darken-1">face</v-icon>
        </div>
        <template v-if="connection.isConnected">
            <br/>
            <div class="text-xs-center">
                <h2>{{ $t('connectedAs') }} <b class="green--text darken-1--text">{{connection.username}}  </b><v-icon @click="logoff">exit_to_app</v-icon></h2>
            </div>
            <br/>
        </template>
        <template v-else>
            <v-form v-model="valid">
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs6>
                            <v-text-field
                                label="Username"
                                outline
                                required
                                v-model="loginUsername"
                                @keyup.enter="login"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs6>
                            <v-text-field
                                :rules="nameRules"
                                label="Password"
                                required
                                outline
                                type="password"
                                @keyup.enter="login"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs2></v-flex>
                        <v-flex xs8>
                            <v-btn block class="green darken-3"
                                @click="login"
                            >
                                Log-in
                            </v-btn>
                        </v-flex>
                        <v-flex xs2></v-flex>
                        <template v-if="loginLoading == true">
                            <v-flex xs12>
                                <v-progress-linear :indeterminate="true"></v-progress-linear>
                            </v-flex>
                        </template>
                    </v-layout>
                </v-container>
            </v-form>
        </template>

        <v-list>
            <v-divider></v-divider>

            <v-list-tile @click="toMainPage">
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ $t('homeLabel') }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <template v-if="connection.isConnected">
                <v-divider></v-divider>

                <v-list-tile two-line>
                    <v-list-tile-action>
                        <v-icon>add_box</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <v-dialog
                                v-model="dialogCreateChallenge"
                                width="500">
                                <template v-slot:activator="{ on }">
                                    <button v-on="on">
                                        {{ $t('addNewChallengeLabel') }}
                                    </button>
                                </template>
                                <CreateChallengeDialogContent @closeCreateChallengeDialog="dialogCreateChallenge = false" :connection="connection" :dialog="dialog" />
                            </v-dialog>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

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
                            {{ $t('myChallengesLabel') }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
            <v-divider></v-divider>

            <v-list-tile @click="toRanking">
                <v-list-tile-action>
                    <v-icon>group</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        {{ $t('rankingLabel') }}
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import CreateChallengeDialogContent from './CreateChallengeDialogContent'

    export default {
        name: "NavigationDrawer",
        components: {
            CreateChallengeDialogContent
        },
        props: ['connection', 'drawer', 'nbChallenges'],
        data () {
            return {
                dialog: false,
                dialogCreateChallenge: false,
                loginUsername: null,
                loginLoading: false,
                myChallenges: []
            }
        },
        methods: {
            toMainPage: function() {
                this.$emit('pageChange', 'mainpage');
            },
            toMyChallenges: function() {
                this.$emit('pageChange', 'mychallenges')
            },
            toRanking: function() {
                this.$emit('pageChange', 'ranking');
            },
            logoff: function() {
                this.$emit('logoff');
            },
            login: function() {
                this.loginLoading = true;
                // Need to wait a bit
                this.loginLoading = false;
                this.$emit('login', this.loginUsername);
                this.loginUsername = null;
            }
        }
    }
</script>

<style>

</style>
