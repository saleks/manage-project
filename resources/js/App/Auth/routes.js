import AuthLayout from '../../Layouts/Auth.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import ForgotPassword from './ForgotPassword.vue'

export default [
    {
        name: 'auth',
        path: '/',
        component: AuthLayout,
        meta: {requiresAuth: false},
        redirect: { name: 'login' },
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta: {requiresAuth: false, refresh: true},
            },
            {
                path: '/register',
                name: 'register',
                component: Register,
                meta: {requiresAuth: false},
            },
            {
                path: '/forgot-password',
                name: 'forgot-password',
                component: ForgotPassword,
                meta: {requiresAuth: false},
            },
        ]
    }
]
