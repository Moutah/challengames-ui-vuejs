<template>
  <v-app dark>
    <v-toolbar
      app
      height="60"
      color="green darken-3"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <v-icon>reorder</v-icon>
      </v-toolbar-side-icon>

      <v-toolbar-title class="headline">
        <span>Challengames</span>
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
        <v-select
          v-model="$i18n.locale"
          :items="['fr', 'en']"
          value="en"
          width="50px"
        />
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <NavigationDrawerContent
        :drawer="drawer"
        @createChallenge="createChallenge"
      />
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawerContent from "./components/NavigationDrawerContent";

import $i18n from "@/plugins/i18n";

export default {
  name: "App",
  components: {
    NavigationDrawerContent
  },
  data: function() {
    return {
      drawer: false
    };
  },
  methods: {
    drawerFct: function() {
      this.drawer = false;
    },
    changeLocale: function(locale) {
      $i18n.locale = locale;
    },
    createChallenge: function() {
      this.drawer = false;
    }
  }
};
</script>
