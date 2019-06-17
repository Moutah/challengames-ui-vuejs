<template>
    <v-container>
        <v-layout text-xs-center wrap>
            <v-flex mb-2>
                <br/>
                <h1 class="display-2 font-weight-bold mb-2">
                    Challengames
                </h1>

                <p class="subheading font-weight-regular">
                    {{ $t('mainDescription') }}
                </p>
            </v-flex>

            <v-flex mb-5 xs12>
                <h2 class="headline font-weight-bold mb-3">{{ $t('createChallengeMainPageTitle') }}</h2>
                <p> {{ $t('createChallengeForAStart') }}</p>
                <CreateChallengeButton
                    @createChallenge="createChallenge"
                    :connection="connection"/>

                <br/>

                <v-text v-if="!connection.isConnected">
                    <v-icon>
                        sentiment_very_dissatisfied
                    </v-icon> {{ $t('cannotCreateChallengeLabel') }}
                    <v-icon>
                        sentiment_very_dissatisfied
                    </v-icon>

                    <br/>

                    {{ $t('cannotCreateChallengeButLoginLabel') }}
                </v-text>
            </v-flex>

            <v-flex xs1></v-flex>

            <v-flex xs12>
                <h2>{{ $t('mostRecentChallengesTitle') }}</h2>
                <MostRecentChallengesGrid ref="mostRecentChallengesGrid" :connection="connection" />
            </v-flex>

            <v-flex xs1></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import CreateChallengeButton from '../core/CreateChallengeButton'
    import MostRecentChallengesGrid from './MostRecentChallengesGrid'

    export default {
        name: 'MainPage',
        components: {
            CreateChallengeButton,
            MostRecentChallengesGrid
        },
        props: ['connection'],
        data () {
            return {
            }
        },
        methods: {
            createChallenge: function(data) {
                this.$refs.mostRecentChallengesGrid.createChallenge(data);
            }
        }
    }
</script>

<style>

</style>
