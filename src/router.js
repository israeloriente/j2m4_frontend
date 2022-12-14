import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
//   mode: "history",
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "Home",
      component: () => import("./views/GaragesListings")
    },
    {
      path: "/garage",
      alias: "/home",
      name: "Home",
      component: () => import("./views/GaragesListings")
    },
    {
      path: "/garage/:id",
      alias: "/garage",
      name: "EditGarage",
      component: () => import("./views/GaragesDetails")
    },
    {
      path: "/rent/:id",
      alias: "/garage",
      name: "RentGarage",
      component: () => import("./views/RentsDetails")
    },
  ]
});