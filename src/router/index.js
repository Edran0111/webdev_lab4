import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ConversationPage from "../pages/ConversationPage.vue";
import store from "../store";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/conversation",
        name: "Conversation",
        component: ConversationPage,
        beforeEnter: (to, from, next) => {
            const { user } = store.state;
            if (!user) {
                console.log("No user, redirecting to Home");
                next({ name: "Home" });
            } else {
                next();
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;