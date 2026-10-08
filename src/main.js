import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'ant-design-vue/dist/reset.css';

createApp(App).use(Antd).use(router).mount("#app");
