import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

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

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");
