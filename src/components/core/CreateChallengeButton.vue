<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn
        :disabled="!$store.getters.isConnected"
        color="primary"
        v-on="on"
      >
        {{ $t("addNewChallengeLabel") }} <v-icon>add_box</v-icon>
      </v-btn>
    </template>
    <CreateChallengeDialogContent
      :dialog="dialog"
      @closeCreateChallengeDialog="dialog = false"
      @createChallenge="createChallenge"
    />
  </v-dialog>
</template>

<script>
import CreateChallengeDialogContent from "../core/CreateChallengeDialogContent";

export default {
  name: "CreateChallengeButton",
  components: {
    CreateChallengeDialogContent
  },
  props: [],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    createChallenge: function(data) {
      var mappedData = {
        name: data.challengeName,
        description: data.description,
        submitter: this.$store.getters.username,
        challengee: data.challengee,
        status: "OPEN"
      };
      this.$store.commit("createChallenge", mappedData);
    }
  }
};
</script>

<style></style>
