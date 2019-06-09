<template>

    <v-container>
        <v-layout text-xs-center wrap>
            <v-flex xs2></v-flex>

            <v-flex xs12>
                <h2>{{ $t('mostRecentChallengesTitle') }}</h2>

                <RankingGrid />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import RankingGrid from './RankingGrid'

    export default {
        name: 'RankingPage',
        components: {
            RankingGrid
        }
    }
</script>
