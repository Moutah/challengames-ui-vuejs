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
                this.$emit('createChallenge', data);
            }
        }
    }
</script>

<style>

</style>
