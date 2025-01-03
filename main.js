import "./style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import ConfigHolder from "./utils/config-holder";
import App from "./components/App.vue";


ConfigHolder.config = window.__config__;
window.ConfigHolder = ConfigHolder;


const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.mount('#body');
