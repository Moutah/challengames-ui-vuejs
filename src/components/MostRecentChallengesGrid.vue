<template>
    <v-data-table :headers="headers" :items="challenges" class="elevation-1">
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
                headers: [
                    {
                        text: 'Challenge names',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Date', value: 'date' },
                    { text: 'Submitter', value: 'submitter' },
                    { text: 'Challengee', value: 'challengee' },
                    { text: 'Status', value: 'status' },
                ],
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
        }
    }
</script>

<style>
</style>
