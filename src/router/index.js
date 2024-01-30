import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Portfolio from "../views/Portfolio.vue";
import Products from "../views/Products.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },

        {
            path: "/about",
            name: "about",
            component: About,
        },

        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio,
        },

        {
            path: "/products",
            name: "products",
            component: Products,
        },

        {
            path: "/contact",
            name: "contact",
            component: Contact,
        },
    ],
});

export default router;
