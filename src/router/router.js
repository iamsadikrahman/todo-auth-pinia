import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/registration',
        component: Registration
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router