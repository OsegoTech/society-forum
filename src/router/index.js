import {createRouter, createWebHistory} from "vue-router";
import PageHome from "@/components/PageHome.vue";
import PageThreadShow from "@/components/PageThreadShow.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter(to, from, next){
        //     check of the thread with specified id exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
        //     If exists, Continue
            if (threadExists){
                return next()
            } else {
                next({name: 'NotFound'})
            }
        //     if doesn't exist, redirect the user to not found page
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: PageNotFound
    }
]

export default createRouter({

    history: createWebHistory(),
    routes,
})
