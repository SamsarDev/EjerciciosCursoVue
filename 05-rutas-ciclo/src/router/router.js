import { createRouter, createWebHashHistory } from 'vue-router'

import ListPage from '@/modules/pokemon/pages/ListPage.vue'

const routes = [
    { 
        path: '/', 
        component: ListPage 
    },
    { 
        path: '/about', 
        component: () => import('@/modules/pokemon/pages/AboutPage.vue')
    },
    { 
        path: '/id', 
        component: () => import('@/modules/pokemon/pages/PokemonPage.vue') 
    },
    { 
        path: '/:pathMatch{.*}*', 
        component: () => import('@/modules/shared/pages/NoPageFound.vue') 
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router