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

                        <v-flex xs12>
                            <h2>{{ $t('changeStatusToTitle') }}</h2>
                        </v-flex>

                        <template v-if="isChallengee">
                            <template v-if="validToGivenStatus('ACCEPTED')">
                                <v-flex xs3>
                                    <v-btn
                                        @click="changeChallengeStatus('ACCEPTED')"
                                        color="info">Accepted</v-btn>
                                </v-flex>
                            </template>
                            <template v-if="validToGivenStatus('IN_PROGRESS')">
                                <v-flex xs3>
                                    <v-btn
                                        @click="changeChallengeStatus('IN_PROGRESS')"
                                        color="warning">In progress</v-btn>
                                </v-flex>
                            </template>
                            <template v-if="validToGivenStatus('ABANDONED')">
                                <v-flex xs3>
                                    <v-btn
                                        @click="changeChallengeStatus('ABANDONED')"
                                        color="error">Abandoned</v-btn>
                                </v-flex>
                            </template>
                            <template v-if="validToGivenStatus('DECLINED')">
                                <v-flex xs3>
                                    <v-btn
                                        @click="changeChallengeStatus('DECLINED')"
                                        color="error">Declined</v-btn>
                                </v-flex>
                            </template>
                            <template v-if="validToGivenStatus('FINISHED')">
                                <v-flex xs3>
                                    <v-btn
                                        @click="changeChallengeStatus('FINISHED')"
                                        color="success">Finished</v-btn>
                                </v-flex>
                            </template>
                        </template>
                        <template v-if="isChallenger">
                            <template v-if="validToGivenStatus('COMPLETED')">
                                <v-flex xs3x>
                                    <v-btn
                                        @click="changeChallengeStatus('COMPLETED')"
                                        color="success">Completed</v-btn>
                                </v-flex>
                            </template>
                        </template>

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
        },
        methods: {
            validToGivenStatus: function(status) {
                if (status == 'ACCEPTED') {
                    return this.challenge.status == 'OPEN';
                }

                if (status == 'IN_PROGRESS') {
                    return this.challenge.status == 'OPEN';
                }

                if (status == 'DECLINED') {
                    return this.challenge.status == 'OPEN';
                }

                if (status == 'ABANDONED') {
                    return this.challenge.status == 'ACCEPTED' || this.challenge.status == 'IN_PROGRESS';
                }

                if (status == 'FINISHED') {
                    return this.challenge.status == 'IN_PROGRESS';
                }

                if (status == 'COMPLETED') {
                    return this.challenge.status == 'FINISHED';
                }
            },
            changeChallengeStatus: function(targetStatus) {
                this.$emit('changeStatus',
                    {
                        'challenge':this.challenge,
                        'targetStatus':targetStatus
                    }
                );
            }

        },
        computed: {
            isChallengee: function() {
                return this.challenge.challengee==this.$store.getters.username;
            },
            isChallenger: function() {
                return this.challenge.submitter==this.$store.getters.username;
            },
        }
    }
</script>

<style>
</style>
