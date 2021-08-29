import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Income from '../pages/Income.vue'
import Costs from '../pages/Costs.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/income',
        name: 'Income',
        component: Income
    },
    {
        path: '/costs',
        name: Costs,
        component: Costs
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router