<template>
    <div>
        <v-btn flat href="" target="_blank" v-if="!connection.isConnected">
            <span class="mr-2">Login</span>
            <v-icon>face</v-icon>
        </v-btn>

        <v-menu offset-y v-if="connection.isConnected">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" v-on="on">
                    {{ connection.username }}
                    <v-icon>arrow_drop_down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile v-on:click="logoff">
                    <v-list-tile-avatar><v-icon>exit_to_app</v-icon></v-list-tile-avatar>
                    <v-list-tile-content>Logout</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: 'LoginLogoutButtons',
        props: ['connection'],
        data () {
            return {
                dialog: false
            }
        },
        methods: {
            // eslint-disable-next-line
            logoff: function(event) {
                this.connection.isConnected = false
            }
        }
    }

</script>

<style>
</style>
