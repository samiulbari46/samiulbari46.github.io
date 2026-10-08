import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Project from "../views/Project.vue";
import Education from "../views/Education.vue";

const routes = [
  { path: "/", name: "home", component: Home, meta: { layout: Layout } },
  { path: "/about", name: "about", component: About, meta: { layout: Layout } },
  { path: "/projects", name: "projects", component: Project, meta: { layout: Layout } },
  { path: "/education", name: "education", component: Education, meta: { layout: Layout } },
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
