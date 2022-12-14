<template>
  <v-container>
    <v-row class="text-h3 mb-1">
      <v-col cols="12"> Rents listings </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-container :key="forceLoad">
      <v-card style="max-width: 70%" class="my-8 mx-3">
        <v-row class="ma-1">
          <v-col>
            <v-switch v-model="isAvailable" label="available now"> </v-switch>
          </v-col>
          <v-col>
            <v-switch v-model="sortByPrice" label="sort by price"> </v-switch>
          </v-col>
          <v-col>
            <v-switch v-model="descending" label="show cheapest"> </v-switch>
          </v-col>
          <v-col>
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
          <v-col align-self="center">
            <v-btn color="blue" elevation="0" @click="reload"> Apply </v-btn>
          </v-col>
          <v-col align-self="center">
            <v-btn color="blue" elevation="0" @click="moveToEdit('new')">
              Create new garage
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card
        style="max-width: 70%"
        v-for="(item, i) in garages"
        :key="i"
        class="my-8 mx-3"
      >
        <v-row class="px-3">
          <v-col cols="2">
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="getImg(item)"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="4">
            <v-row class="ma-3">
              <v-col class="text-h5 pa-0">
                {{ item.address }}
              </v-col>
            </v-row>
            <v-row class="mx-3">
              <v-col class="text-subtitle-1 pa-0">
                {{ `Price: ${item.pricePerDay}/Day` }}
              </v-col>
            </v-row>
            <v-row class="mx-3">
              <v-col class="text-body-2 pa-0">
                {{ `Available ${item.isAvailable ? "now" : "from " + ""}` }}
              </v-col>
            </v-row>
          </v-col>
          <v-col class="ma-auto">
            <v-row class="mx-3">
              <v-col>
                <v-btn elevation="0" @click="moveToEdit(item.id)"> EDIT </v-btn>
              </v-col>
            </v-row>
            <v-row class="mx-3">
              <v-col>
                <v-btn elevation="0" @click="moveToRent(item.id)"> RENT </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: "GaragesListings",
    data: () => ({
      forceLoad: false,
      isAvailable: null,
      sortByPrice: null,
      descending: null,
      dates: [],
      garages: [
        // {
        //   id: 1,
        //   imgPath: "",
        //   address: "SOME ADDRESS",
        //   pricePerDay: 123,
        //   isAvailable: 1,
        //   startDate: "1999-07-02",
        // },
        // {
        //   id: 2,
        //   imgPath: "",
        //   address: "SOME ADDRESS",
        //   pricePerDay: 123,
        //   isAvailable: 0,
        //   startDate: "1999-07-02",
        // },
      ],
    }),
    created() {
      this.reload();
    },
    methods: {
      reload() {
        let url = `/listings?isAvailable=${this.isAvailable}&sortByPrice=${this.sortByPrice}&descending=${this.descending}`;

        this.api
          .get(url)
          .then((r) => {
            console.log(r.data);
            this.garages = r.data;
            this.forceLoad = !this.forceLoad;
          })
          .catch((e) => {
            console.log(e);
          });
      },
      moveToEdit(id) {
        this.$router.push({ name: "EditGarage", params: { id: id } });
      },
      moveToRent(id) {
        this.$router.push({ name: "RentGarage", params: { id: id } });
      },
      getImg(item) {
        if (
          item.imgPath !== "" &&
          item.imgPath !== null &&
          item.imgPath !== "string"
        ) {
          return require(item.imgPath);
        }
        return "";
      },
    },
  };
</script>