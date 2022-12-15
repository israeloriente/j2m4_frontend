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
              <v-col>
                <v-text-field label="City" v-model="city"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-text-field
                  label="Price/Day"
                  v-model="priceDay"
                ></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6">
                <v-text-field label="Owner ID" v-model="ownerId"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn elevation="0" color="blue" @click="saveInfo">
                  Save
                </v-btn>
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
      city: "",
      imagePath: "",
    }),
    methods: {
      saveInfo() {
        let payload = {
          address: this.address,
          pricePerDay: this.priceDay,
          ownerId: this.ownerId,
          city: this.city,
          imagePath: this.imagePath,
        };

        if (this.garageId === "new") {
          this.api
            .put(`/garages/${this.garageId}`, payload)
            .then((r) => {
              console.log(r);
            })
            .catch((err) => {
              alert("error on updating garage. Error: ", err);
            });
        } else {
          this.api
            .post(`/garages`, payload)
            .then((r) => {
              console.log(r);
            })
            .catch((err) => {
              alert("error on updating garage. Error: ", err);
            });
        }
      },
      deleteInfo() {
        this.api
          .delete(`/garages/${this.garageId}`)
          .then((r) => {
            console.log("response", r);
          })
          .catch((err) => {
            alert("error on deleting garage. Error: ", err);
          });
      },
    },
    created() {
      this.garageId = this.$route.params.id;
      if (this.garageId === "new") return;

      this.api
        .get(`/garages/${this.garageId}`)
        .then((r) => {
          this.address = r.data.address;
          this.priceDay = r.data.pricePerDay;
          this.ownerId = r.data.ownerId;
          this.city = r.data.city;
          this.imagePath = r.data.imagePath;
        })
        .catch((err) => {
          alert("error on getting garage. Error: ", err);
        });
    },
  };
</script>