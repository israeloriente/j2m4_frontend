<template>
  <v-container>
    <v-row class="text-h3 mb-1">
      <v-col cols="12"> Garage Details </v-col>
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
          <v-row>
            <v-col>
              <v-card class="mt-3 ml-6">
                <v-row>
                  <v-col cols="12" class="d-flex justify-center">
                    <v-btn elevation="0" color="teal lighten-5">
                      Upload new image
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-card class="ma-3 pa-3">
            <v-row>
              <v-col>
                <v-text-field label="Address" v-model="address"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-text-field label="Price/Day" v-model="priceDay"></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6">
                <v-text-field label="Owner ID" v-model="ownerId"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn elevation="0" color="blue" @click="saveInfo"> Save </v-btn>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="d-flex justify-end">
                <v-btn elevation="0" class="red accent-4" @click="deleteInfo">
                  Delete/Cancel
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
      address: "",
      priceDay: "",
      ownerId: "",
      garageId: "",
    }),
    methods: {
      saveInfo() {
        let payload = { address: this.address, priceDay: this.priceDay, id: this.ownerId}
        payload;
        // Call post endpoint using payload
      },
      deleteInfo() {
        // Call delete endpoint using garage Id as params
      }
    },
    created() {
      this.garageId = this.$route.params.id
      // Call get endpoint using garage Id as params
    }
  };
</script>