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
                <v-text-field label="Address"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-text-field label="Price/Day"></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6">
                <v-text-field label="Owner ID"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn elevation="0" color="blue"> Save </v-btn>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="d-flex justify-end">
                <v-btn elevation="0" class="red accent-4">
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
    methods: {
    },
  };
</script>