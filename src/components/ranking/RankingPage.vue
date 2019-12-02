<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs2 />

      <v-flex xs12>
        <h2>{{ $t("mostRecentChallengesTitle") }}</h2>
        <p>{{ $t("rankingParagraph1") }}</p>
        <p>{{ $t("rankingParagraph2") }}</p>
        <p>{{ $t("rankingParagraph3") }}</p>
        <RankingGrid />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RankingGrid from "./RankingGrid";

export default {
  name: "RankingPage",
  components: {
    RankingGrid
  }
};
</script>
