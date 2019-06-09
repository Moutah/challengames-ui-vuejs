<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn small color="green darken-1" v-on="on">
                <v-icon>search</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="headline green darken-3" primary-title>Challenge details</v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs6>
                            <v-text-field label="Challenge name" readonly v-bind:value="challenge.name"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field v-bind:value="challenge.status" label="Status"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                              box
                              name="input-7-4"
                              label="Description"
                              v-bind:value="challenge.description"
                              readonly
                            ></v-textarea>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field label="Challenger" readonly v-bind:value="challenge.submitter"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field label="Challengee" readonly v-bind:value="challenge.challengee"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field v-bind:value="challenge.date"
                                label="Deadline"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                            >
                            </v-text-field>

                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog = false">
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'ChallengeDetailsPopup',
        components: { },
        props: ['challenge'],
        data () {
            return {
                dialog: false
            }
        }
    }
</script>

<style>
</style>
