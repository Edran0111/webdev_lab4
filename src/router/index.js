import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ConversationPage from "../pages/ConversationPage.vue";

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
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;