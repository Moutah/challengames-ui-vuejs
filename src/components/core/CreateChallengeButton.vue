<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" :disabled="!$store.getters.isConnected" color="primary">
                {{ $t('addNewChallengeLabel') }} <v-icon>add_box</v-icon>
            </v-btn>
        </template>
        <CreateChallengeDialogContent
            @closeCreateChallengeDialog="dialog=false"
            @createChallenge="createChallenge"
            :dialog="dialog" />
    </v-dialog>
</template>

<script>
    import CreateChallengeDialogContent from '../core/CreateChallengeDialogContent'

    export default {
        name: 'CreateChallengeButton',
        components: {
            CreateChallengeDialogContent
        },
        props: [],
        data () {
            return {
                dialog: false
            }
        },
        methods: {
            createChallenge: function(data) {
                var mappedData = {
                    name: data.challengeName,
                    description: data.description,
                    submitter: this.$store.getters.username,
                    challengee: data.challengee,
                    status: 'OPEN'
                }
                this.$store.commit('createChallenge', mappedData)
            }
        }
    }
</script>

<style>

</style>
