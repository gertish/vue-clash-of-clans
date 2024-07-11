import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory();

import HomePage from './pages/Home.vue'
import AboutPage from './pages/About.vue'
import NotFoundPge from './pages/notFound.vue'
import Item from './pages/_itemAlias.vue'

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:itemAlias',
            name: 'itemAlias',
            component: Item
        },
        {
            path: '/:CatchAll(.*)*',
            name: 'notFound',
            component: NotFoundPge
        }
    ]
})
export default routers;