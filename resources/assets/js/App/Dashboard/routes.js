export const AppLayout = r => require.ensure([], () => r(require('../../Layouts/AppLayout')), 'dashboard-bundle'); //AppLayout.vue
export const Home = r => require.ensure([], () => r(require('./components/Index')), 'dashboard-index-bundle');//Index.vue


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
        }
    ]
}]
