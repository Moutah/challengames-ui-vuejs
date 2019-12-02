<template>
  <v-data-table
    :headers="headersFct"
    :items="users"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.rank }}</td>
      <td class="text-xs-right">
        {{ props.item.name }}
      </td>
      <td class="text-xs-right">
        {{ props.item.nbPoints }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "RankingGrid",
  data() {
    return {
      users: [
        {
          rank: "1",
          name: "David",
          nbPoints: 4000
        },
        {
          rank: "2",
          name: "Mathieu",
          nbPoints: 100
        }
      ]
    };
  },
  computed: {
    headersFct: function() {
      return [
        {
          text: this.$i18n.t("rankTitleGrid"),
          align: "left",
          value: "rank"
        },
        { text: this.$i18n.t("nameTitleGrid"), value: "name" },
        { text: this.$i18n.t("nbPointsTitleGrid"), value: "name" }
      ];
    }
  }
};
</script>
