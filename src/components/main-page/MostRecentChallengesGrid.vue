<template>
    <v-data-table :headers="headersFct" :items="challenges" class="elevation-1">
        <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.date }}</td>
            <td class="text-xs-right">{{ props.item.submitter }}</td>
            <td class="text-xs-right">{{ props.item.challengee }}</td>
            <td class="text-xs-right">{{ props.item.status }}</td>
            <td class="text-xs-right">
                <ChallengeDetailsPopup :challenge="props.item"/>
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
        data () {
            return {
                challenges: [
                    {
                        name: 'Challenge 4000',
                        description: 'Do it !',
                        date: '01/10/2020',
                        submitter: 'Mathieu',
                        challengee: "Hellorin",
                        status: 'OPEN'
                    },
                    {
                        name: 'Challenge 4001',
                        description: 'Do it again!',
                        date: '01/10/2020',
                        submitter: 'Mathieu',
                        challengee: "Hellorin",
                        status: 'OPEN'
                    }
                ]
            }
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
