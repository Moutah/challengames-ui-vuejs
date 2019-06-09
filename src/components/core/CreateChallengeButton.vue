<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" :disabled="!connection.isConnected" color="primary">
                {{ $t('addNewChallengeLabel') }} <v-icon>add_box</v-icon>
            </v-btn>
        </template>
        <CreateChallengeDialogContent @closeCreateChallengeDialog="dialog=false" :connection="connection" :dialog="dialog" />
    </v-dialog>
</template>

<script>
    import CreateChallengeDialogContent from '../core/CreateChallengeDialogContent'

    export default {
        name: 'CreateChallengeButton',
        components: {
            CreateChallengeDialogContent
        },
        props: ['connection'],
        data () {
            return {
                dialog: false
            }
        }
    }
</script>

<style>

</style>
