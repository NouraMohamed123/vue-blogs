import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Home from "./views/Home.vue";
import SingleBlog from "./views/SingleBlog.vue";
const routes = [
    { path: "/", component: Home },
    { path: "/blog/:id", component: SingleBlog },
];
export const router = new VueRouter({
    routes,
});
