import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { useAuthStore } from "./store/authStore";

library.add(faMagnifyingGlass, faHeartSolid, faHeartRegular);

const app = createApp(App);

app.use(createPinia());
const authStore = useAuthStore();
await authStore.initAuth();
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
