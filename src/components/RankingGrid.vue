<template>
    <v-data-table :headers="headersFct" :items="users" class="elevation-1">
        <template v-slot:items="props">
            <td>{{ props.item.rank }}</td>
            <td class="text-xs-right">{{ props.item.name }}</td>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        name: 'RankingGrid',
        data () {
            return {
                users: [
                    {
                        rank: '1',
                        name: 'David',
                    },
                    {
                        rank: '2',
                        name: 'Mathieu'
                    }
                ]
            }
        },
        computed: {
            headersFct: function() {
                return [
                    {
                        text: this.$i18n.t('rankTitleGrid'),
                        align: 'left',
                        value: 'name'
                    },
                    { text: this.$i18n.t('nameTitleGrid'), value: 'name' }
                ]
            }
        }
    }
</script>
