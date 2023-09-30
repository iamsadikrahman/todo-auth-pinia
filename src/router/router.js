// router.js

import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
import Dashboard from '../views/Dashboard.vue'
import authStore from '../store/usersStore'


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
        path: '/register',
        component: Registration
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            requiresAuth: true
        }
    }
    
]



const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // Check if the user is authenticated using the store
    const isAuthenticated = authStore().authStore.isAuthenticated;

    if (requiresAuth && !isAuthenticated) {
        // Redirect to the login page if not authenticated
        next('/login');
    }else if (to.path === '/dashboard' && !isAuthenticated) {
        // Redirect to the homepage if trying to access /dashboard without authentication
        next('/');
    } 
    else {
        next();
    }
});


export default router