import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import CurryingElement from "currying-element";

createApp(App).use(CurryingElement).mount("#app");
