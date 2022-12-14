<template>
  <v-container>
    <!-- <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col> -->

    <v-row class="text-h3 mb-1">
      <v-col cols="12"> Garage listings </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-container>
      <v-card
        style="max-width: 70%"
        class="my-8 mx-3"
        elevation="0"
      >
      <v-row>
        <v-col class="d-flex justify-center">
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
              <v-img
                :src="getImg(item)"
              ></v-img>
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
                {{
                  `Available ${
                    item.isAvailable ? "now" : "from " + ''
                  }`
                }}
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
      this.api.get('/listings').then((r) => {
        console.log(r.data)
        this.garages = r.data;
      })
    },
    methods: {
      moveToEdit(id) {
        this.$router.push({ name: "EditGarage", params: { id: id } });
      },
      moveToRent(id) {
        this.$router.push({ name: "RentGarage", params: { id: id } });
      },
      getImg(item) {
        if (item.imgPath !== '' && item.imgPath !== null && item.imgPath !== "string") {
          return require(item.imgPath)
        }
        return ''
      }
    },
  };
</script>