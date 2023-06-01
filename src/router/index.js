import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/pages/Home.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import NotFound from "@/pages/NotFound.vue";
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: ThreadShow,
        props: true,
        // check if the thread with the id specified in the params exists
        // if it does, pass it to the component via props
        // else redirect to not found page
        beforeEnter(to, from, next) {
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            if (threadExists) {
                return next()
            } else {
                next({
                    name: 'NotFound',
                    params: { pathMatch: to.path},
                    // preserve existing query and hash
                    query: to.query,
                    hash: to.hash,
                })
            }
        },
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

export default createRouter({

    history: createWebHistory(),
    routes,
})
