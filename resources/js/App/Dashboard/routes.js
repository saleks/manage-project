export const AppLayout = r => require.ensure([], () => r(require('../../Layouts/AppLayout')), 'js/dashboard-bundle'); //AppLayout.vue
export const Home = r => require.ensure([], () => r(require('./Index')), 'js/dashboard-index-bundle');//Index.vue
export const Programme = r => require.ensure([], () => r(require('./Programme')), 'js/dashboard-programme-bundle');//Index.vue


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
    meta: {requiresAuth: true},
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
