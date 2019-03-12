export const AuthLayout = r => require.ensure([], () => r(require('../../Layouts/Auth')), 'layouts-bundle'); //AppLayout.vue
export const Login = r => require.ensure([], () => r(require('./Login')), 'login-bundle');//Login.vue
export const Register = r => require.ensure([], () => r(require('./Register')), 'register-bundle');//Register.vue
export const ForgotPassword = r => require.ensure([], () => r(require('./ForgotPassword')), 'forgotPassword-bundle');//ForgotPassword.vue


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
                meta: {requiresAuth: false},
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
