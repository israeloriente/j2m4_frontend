<template>
  <v-app>
    <v-container class="ma-0 pa-0">
      <v-navigation-drawer app permanent>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title class="text-h6"> PARK-ing </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item link to="/">
            <v-list-item-content>
              <v-list-item-title>Garages</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/rents">
            <v-list-item-content>
              <v-list-item-title>Rents</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view class="all-content"/>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "app",
  };
</script>

<style>
  .all-content {
    position: absolute;
    left: 256px;
  }
</style>
