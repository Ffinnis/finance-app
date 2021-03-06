import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router/index.js";
import "vfonts/Lato.css";
import "./styles/reset.scss";
import "./styles/style.scss";
import VueApexCharts from "vue3-apexcharts";
import "vfonts/FiraCode.css";
import Notifications from "@kyvg/vue3-notification";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueApexCharts);
app.use(Notifications);
app.component("Datepicker", Datepicker);
app.mount("#app");
