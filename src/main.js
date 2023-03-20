import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import PageHome from "@/components/PageHome.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
]

const router = createRouter({

    history: createWebHistory(),
    routes,
})

const forumApp = createApp(App)
forumApp.use(router)
forumApp.mount('#app')

// createApp(App).mount('#app')
