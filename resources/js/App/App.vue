<template>
    <router-view></router-view>
</template>

<script>
    import Auth from '../Layouts/Auth'
    import AppLayout from '../Layouts/AppLayout'

    export default {
        components: {Auth, AppLayout},
        mounted() {
            console.log('Component App mounted.')
        },
        computed: {
            isAuth() {
                return this.$store.state.Auth.is_login;
            }
        },

    }
</script>