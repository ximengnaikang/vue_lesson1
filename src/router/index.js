import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/auth/register',
    name: 'Register',
    component: () =>
        import ('@/views/auth/Register')
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router