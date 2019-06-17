<template>
    <v-data-table :headers="headersFct" :items="$store.getters.mostRecentChallenges" class="elevation-1">
        <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.date }}</td>
            <td class="text-xs-right">{{ props.item.submitter }}</td>
            <td class="text-xs-right">{{ props.item.challengee }}</td>
            <td class="text-xs-right">{{ props.item.status }}</td>
            <td class="text-xs-right">
                <ChallengeDetailsPopup
                    @changeStatus="changeChallengeStatus"
                    :challenge="props.item"/>
            </td>
        </template>
    </v-data-table>
</template>

<script>
    import ChallengeDetailsPopup from './ChallengeDetailsPopup'

    export default {
        name: 'MostRecentChallengesGrid',
        components: {
            ChallengeDetailsPopup,
        },
        methods: {
            changeChallengeStatus: function(data) {
                var challengeName = data.challenge.name;

                for (var index in this.challenges) {
                    if (this.challenges[index].name == challengeName) {
                        this.challenges[index].status = data.targetStatus;
                        break;
                    }
                }
            },
            createChallenge: function(data) {
                        alert("bim")
                var mappedData = {
                    name: data.challengeName,
                    description: data.description,
                    submitter: $store.getters.username,
                    challengee: data.challengee,
                    status: 'OPEN'
                }
                this.challenges.push(mappedData);
            }
        },
        beforeMount() {
            this.$store.commit('loadMostRecentChallenges')
        },
        computed: {
            headersFct: function() {
                return [
                    {
                        text: this.$i18n.t('challengeNameTitleGrid'),
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Date', value: 'date' },
                    { text: this.$i18n.t('submitterTitleGrid'), value: 'submitter' },
                    { text: this.$i18n.t('challengeeTitleGrid'), value: 'challengee' },
                    { text: 'Status', value: 'status' },
                ]
            }
        }
    }
</script>

<style>
</style>
