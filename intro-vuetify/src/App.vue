<template>
  <v-app id="inspire">

    <v-navigation-drawer :mini-variant.sync="mini"
      v-model="drawer"
      stateless
      hide-overlay
      app>
      <v-toolbar flat
        class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/V-TAC_1000_Products_Logo.png">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>CJs Company</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon
                @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0"
        dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items"
          :key="item.title"
          @click="item"
          router
          :to="item.action">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3"
      dark
      fixed
      app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CJs Products</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid
        fill-height>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="blue darken-3"
      app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      mini: true,
      items: [
        { title: 'Product', icon: 'view_list', action: '/products' },
        {
          title: 'Create Product',
          icon: 'add_circle',
          action: '/products/create'
        }
      ]
    };
  },
  methods: {
    voidResult() {
      return null;
    }
  }
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
