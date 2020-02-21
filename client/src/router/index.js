import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gamepage from "../components/gamepage.vue";
import Room from "../views/Room.vue";
import result from "../views/result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Game",
    name: "GamePage",
    component: Gamepage
  },
  {
    path: "/result",
    name: "result",
    component: result
  },
  {
    path: "/room",
    name: "Room",
    component: Room
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
