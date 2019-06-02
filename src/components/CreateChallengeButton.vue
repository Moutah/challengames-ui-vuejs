<template v-slot:activator="{ on }">
    <div>
        <v-btn v-on="on" :disabled="!connection.isConnected" color="primary">
            Add a new challenge <v-icon>add_box</v-icon>
        </v-btn>
        <CreateChallengeDialog :connection="connection" :dialog="dialog" />
    </div>
</template>

<script>
    import CreateChallengeDialog from './CreateChallengeDialog'

    export default {
        name: 'CreateChallengeButton',
        components: {
            CreateChallengeDialog
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
