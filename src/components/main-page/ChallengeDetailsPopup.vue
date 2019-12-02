<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn
        small
        color="green darken-1"
        v-on="on"
      >
        <v-icon>search</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title
        class="headline green darken-3"
        primary-title
      >
        Challenge details
      </v-card-title>

      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs6>
              <v-text-field
                label="Challenge name"
                readonly
                :value="challenge.name"
              />
            </v-flex>
            <v-flex xs6>
              <v-text-field
                :value="challenge.status"
                label="Status"
              />
            </v-flex>
            <v-flex xs12>
              <v-textarea
                box
                name="input-7-4"
                label="Description"
                :value="challenge.description"
                readonly
              />
            </v-flex>
            <v-flex xs6>
              <v-text-field
                label="Challenger"
                readonly
                :value="challenge.submitter"
              />
            </v-flex>
            <v-flex xs6>
              <v-text-field
                label="Challengee"
                readonly
                :value="challenge.challengee"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                :value="challenge.date"
                label="Deadline"
                prepend-icon="event"
                readonly
                v-on="on"
              />
            </v-flex>

            <v-flex xs12>
              <h2>{{ $t("changeStatusToTitle") }}</h2>
            </v-flex>

            <template v-if="isChallengee">
              <template v-if="validToGivenStatus('ACCEPTED')">
                <v-flex xs3>
                  <v-btn
                    color="info"
                    @click="changeChallengeStatus('ACCEPTED')"
                  >
                    Accepted
                  </v-btn>
                </v-flex>
              </template>
              <template v-if="validToGivenStatus('IN_PROGRESS')">
                <v-flex xs3>
                  <v-btn
                    color="warning"
                    @click="changeChallengeStatus('IN_PROGRESS')"
                  >
                    In progress
                  </v-btn>
                </v-flex>
              </template>
              <template v-if="validToGivenStatus('ABANDONED')">
                <v-flex xs3>
                  <v-btn
                    color="error"
                    @click="changeChallengeStatus('ABANDONED')"
                  >
                    Abandoned
                  </v-btn>
                  >
                </v-flex>
              </template>
              <template v-if="validToGivenStatus('DECLINED')">
                <v-flex xs3>
                  <v-btn
                    color="error"
                    @click="changeChallengeStatus('DECLINED')"
                  >
                    Declined
                  </v-btn>
                </v-flex>
              </template>
              <template v-if="validToGivenStatus('FINISHED')">
                <v-flex xs3>
                  <v-btn
                    color="success"
                    @click="changeChallengeStatus('FINISHED')"
                  >
                    Finished
                  </v-btn>
                </v-flex>
              </template>
            </template>
            <template v-if="isChallenger">
              <template v-if="validToGivenStatus('COMPLETED')">
                <v-flex xs3x>
                  <v-btn
                    color="success"
                    @click="changeChallengeStatus('COMPLETED')"
                  >
                    Completed
                  </v-btn>
                  >
                </v-flex>
              </template>
            </template>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          flat
          @click="dialog = false"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ChallengeDetailsPopup",
  components: {},
  props: ["challenge"],
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    isChallengee: function() {
      return this.challenge.challengee == this.$store.getters.username;
    },
    isChallenger: function() {
      return this.challenge.submitter == this.$store.getters.username;
    }
  },
  methods: {
    validToGivenStatus: function(status) {
      if (status == "ACCEPTED") {
        return this.challenge.status == "OPEN";
      }

      if (status == "IN_PROGRESS") {
        return this.challenge.status == "OPEN";
      }

      if (status == "DECLINED") {
        return this.challenge.status == "OPEN";
      }

      if (status == "ABANDONED") {
        return (
          this.challenge.status == "ACCEPTED" ||
          this.challenge.status == "IN_PROGRESS"
        );
      }

      if (status == "FINISHED") {
        return this.challenge.status == "IN_PROGRESS";
      }

      if (status == "COMPLETED") {
        return this.challenge.status == "FINISHED";
      }
    },
    changeChallengeStatus: function(targetStatus) {
      this.$emit("changeStatus", {
        challenge: this.challenge,
        targetStatus: targetStatus
      });
    }
  }
};
</script>

<style></style>
