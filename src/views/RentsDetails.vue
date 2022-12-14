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
                <v-text-field
                  label="Address"
                  v-model="address"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="City"
                  v-model="city"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-text-field
                  disabled
                  label="Price/Day"
                  v-model="priceDay"
                ></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6">
                <v-text-field
                  label="Owner ID"
                  v-model="ownerId"
                  disabled
                ></v-text-field>
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
                <v-text-field label="Client ID" v-model="clientId" />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-end">
                <v-btn elevation="0" color="blue" @click="rent">
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
    name: "RentDetails",
    data: () => ({
      menu: false,
      dates: [],
      address: "",
      priceDay: "",
      ownerId: "",
      garageId: "",
      city: "",
      clientId: "",
    }),
    methods: {
      rent() {
        let payload = {
          garageId: this.garageId,
          clientId: this.clientId,
          startDate: this.dates[0],
          expectedEndDate: this.dates[1],
        };

        this.api
          .post("/rents", payload)
          .then((r) => {
            console.log("response", r);
          })
          .catch((err) => {
            alert("error on creating rent. Error: ", err);
          });
      },
    },
    created() {
      this.garageId = this.$route.params.id;
      this.api
        .get(`/garages/${this.garageId}`)
        .then((r) => {
          this.address = r.data.address;
          this.priceDay = r.data.pricePerDay;
          this.ownerId = r.data.ownerId;
          this.city = r.data.city;
        })
        .catch((err) => {
          alert("error on getting garage. Error: ", err);
        });
    },
  };
</script>