<template>
  <v-container>
    <v-row class="text-h3 mb-1">
      <v-col cols="12"> Rent Details </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-container>
      <v-row>
        <v-col cols="4">
          <v-row>
            <v-col class="d-flex justify-center">
              <v-avatar size="375" tile>
                <v-img
                  src="https://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg?itok=wvryrfCI"
                ></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-card class="ma-3 pa-3">
            <v-row>
              <v-col>
                <v-text-field label="Address" disabled></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-text-field label="Price/Day" disabled></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6">
                <v-text-field label="Owner ID" disabled></v-text-field>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="ma-3 pa-3">
            <v-row>
              <v-col cols="4">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="dates"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dates"
                      label="Rent period"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="dates" no-title range scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(dates)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="2">
              <v-spacer></v-spacer>
              </v-col>
              <v-col>
                <v-text-field label="Client ID" />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-end">
              <v-btn elevation="0" color="blue">
                CREATE RENT
              </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: "GaragesDetails",
    data: () => ({
      menu: false,
      dates: [],
      garages: [
        {
          id: 1,
          imgPath: "",
          address: "SOME ADDRESS",
          pricePerDay: 123,
          isAvailable: 1,
          startDate: "1999-07-02",
        },
        {
          id: 2,
          imgPath: "",
          address: "SOME ADDRESS",
          pricePerDay: 123,
          isAvailable: 0,
          startDate: "1999-07-02",
        },
      ],
    }),
    methods: {},
  };
</script>