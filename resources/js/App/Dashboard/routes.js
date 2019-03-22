import AppLayout from '../../Layouts/AppLayout.vue'
import Home from './Index.vue'
import Programme from './Programme.vue'


export default [
    {
        path: '/',
        redirect: { name: 'home' },
    },
    {
    name: 'dashboard',
    path: '/dashboard',
    redirect: { name: 'home' },
    component: AppLayout,
    meta: {requiresAuth: true, refresh: true},
    children: [
        {
            name: 'home',
            path: '/dashboard/home',
            component: Home,
            meta: {requiresAuth: true},
        },
        {
            name: 'programme',
            path: '/dashboard/programme/:id',
            component: Programme,
            meta: {requiresAuth: true},
        }
    ]
}]
