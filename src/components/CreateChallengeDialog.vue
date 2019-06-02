<template>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-card-title class="headline green darken-3" primary-title>New challenge</v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field label="Challenge name*" required hint="Example: My challenge 4000"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                              box
                              name="input-7-4"
                              label="Description"
                              value=""
                              hint="Gather all 120 stars in Mario 64"
                            ></v-textarea>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field label="Challenger" readonly="true" v-bind:value="connection.username"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field label="Challengee" required="true"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog = false">
                    Create
                </v-btn>
                <v-btn color="primary" flat @click="dialog = false">
                    <v-icon>clear</v-icon> Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'CreateChallengeDialog',
        props: ['dialog', 'connection']
    }
</script>

<style>
</style>
