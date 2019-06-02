<template>
    <v-container>
        <v-layout text-xs-center wrap>
            <v-flex mb-2>
                <h1 class="display-2 font-weight-bold mb-2">
                    <v-img :src="require('../assets/joystick.png')" contain height="100"></v-img>
                    Challengames
                </h1>

                <p class="subheading font-weight-regular">
                    An app to defy your friends on gaming challenges !
                </p>
            </v-flex>

            <v-flex mb-5 xs12>
                <h2 class="headline font-weight-bold mb-3">What's next?</h2>
                <p>The best way to start is to create a challenge, don't you think?</p>
                <CreateChallengeButton :connection="connection"/>

                <br/>

                <v-text v-if="!connection.isConnected">
                    <v-icon>
                        sentiment_very_dissatisfied
                    </v-icon> Unfortunately you need to be connected to create a challenge...
                    <v-icon>
                        sentiment_very_dissatisfied
                    </v-icon>

                    <br/>

                    However, you can login on the top right handside of this page ! Do it quick !
                </v-text>
            </v-flex>

            <v-flex xs1></v-flex>

            <v-flex xs12>
                <h2>Most recent challenges</h2>
                <MostRecentChallengesGrid />
            </v-flex>

            <v-flex xs1></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import CreateChallengeButton from './CreateChallengeButton'
    import MostRecentChallengesGrid from './MostRecentChallengesGrid'

    export default {
        name: 'MainPage',
        components: {
            CreateChallengeButton,
            MostRecentChallengesGrid,

        },
        props: ['connection'],
        data () {
            return {
            }
        }
    }
</script>

<style>

</style>
