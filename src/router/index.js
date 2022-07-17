import { createWebHistory, createRouter } from "vue-router";
//@ts-ignore 
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        // @ts-ignore 
        component: () => import("@/views/NotFound.vue"),
    },

    {
        path: "/contacts/:id",
        name: "contact.edit",
        //@ts-ignore 
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
];
const router = createRouter({
    //@ts-ignore 
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;