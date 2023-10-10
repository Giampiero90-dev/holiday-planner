import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HolidaysList from "./components/HolidaysList.vue";
import Form from "./components/NewHolidayForm.vue";

const routes = [
  {
    path: "/",
    name: "HolidaysList",
    component: HolidaysList,
  },
  {
    path: "/create",
    name: "Create",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
