<template>
  <v-card>
    <v-card-title
      class="headline green darken-3"
      primary-title
    >
      {{ $t("newChallengePopupTitle") }}
    </v-card-title>

    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field
              v-model="challengeName"
              label="Challenge name*"
              required
              hint="Example: My challenge 4000"
            />
          </v-flex>
          <v-flex xs12>
            <v-textarea
              v-model="description"
              box
              name="input-7-4"
              label="Description"
              value=""
              hint="Gather all 120 stars in Mario 64"
            />
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="Challenger"
              readonly
              :value="$store.getters.username"
            />
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="challengee"
              label="Challengee"
              required
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="createChallenge"
      >
        <v-icon>add_box</v-icon>Create
      </v-btn>
      <v-btn
        color="primary"
        flat
        @click="closeDialog"
      >
        <v-icon>clear</v-icon> Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CreateChallengeDialogContent",
  props: ["dialog"],
  data() {
    return {
      challengeName: "",
      description: "",
      challengee: ""
    };
  },
  methods: {
    createChallenge: function() {
      var data = {
        challengeName: this.challengeName,
        description: this.description,
        challengee: this.challengee
      };
      this.$emit("createChallenge", data);

      // Clean form data
      this.challengeName = "";
      this.description = "";
      this.challengee = "";

      this.closeDialog();
    },
    closeDialog: function() {
      this.$emit("closeCreateChallengeDialog");
    }
  }
};
</script>

<style></style>
