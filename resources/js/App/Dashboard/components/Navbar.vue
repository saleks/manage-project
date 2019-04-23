<template>
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" :to="{ name: 'home' }">{{ appName }}</router-link>
        </div>
        <!-- /.navbar-header -->

        <ul class="nav navbar-top-links navbar-right">
            <!--<li class="dropdown">-->
            <!--<a class="dropdown-toggle" data-toggle="dropdown" href="#">-->
            <!--<i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>-->
            <!--</a>-->
            <!--<ul class="dropdown-menu dropdown-messages">-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<strong>John Smith</strong>-->
            <!--<span class="pull-right text-muted">-->
            <!--<em>Yesterday</em>-->
            <!--</span>-->
            <!--</div>-->
            <!--<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<strong>John Smith</strong>-->
            <!--<span class="pull-right text-muted">-->
            <!--<em>Yesterday</em>-->
            <!--</span>-->
            <!--</div>-->
            <!--<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<strong>John Smith</strong>-->
            <!--<span class="pull-right text-muted">-->
            <!--<em>Yesterday</em>-->
            <!--</span>-->
            <!--</div>-->
            <!--<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a class="text-center" href="#">-->
            <!--<strong>Read All Messages</strong>-->
            <!--<i class="fa fa-angle-right"></i>-->
            <!--</a>-->
            <!--</li>-->
            <!--</ul>-->
            <!--&lt;!&ndash; /.dropdown-messages &ndash;&gt;-->
            <!--</li>-->
            <!--&lt;!&ndash; /.dropdown &ndash;&gt;-->
            <!--<li class="dropdown">-->
            <!--<a class="dropdown-toggle" data-toggle="dropdown" href="#">-->
            <!--<i class="fa fa-tasks fa-fw"></i> <i class="fa fa-caret-down"></i>-->
            <!--</a>-->
            <!--<ul class="dropdown-menu dropdown-tasks">-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<p>-->
            <!--<strong>Task 1</strong>-->
            <!--<span class="pull-right text-muted">40% Complete</span>-->
            <!--</p>-->
            <!--<div class="progress progress-striped active">-->
            <!--<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">-->
            <!--<span class="sr-only">40% Complete (success)</span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<p>-->
            <!--<strong>Task 2</strong>-->
            <!--<span class="pull-right text-muted">20% Complete</span>-->
            <!--</p>-->
            <!--<div class="progress progress-striped active">-->
            <!--<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">-->
            <!--<span class="sr-only">20% Complete</span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<p>-->
            <!--<strong>Task 3</strong>-->
            <!--<span class="pull-right text-muted">60% Complete</span>-->
            <!--</p>-->
            <!--<div class="progress progress-striped active">-->
            <!--<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">-->
            <!--<span class="sr-only">60% Complete (warning)</span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<p>-->
            <!--<strong>Task 4</strong>-->
            <!--<span class="pull-right text-muted">80% Complete</span>-->
            <!--</p>-->
            <!--<div class="progress progress-striped active">-->
            <!--<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">-->
            <!--<span class="sr-only">80% Complete (danger)</span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a class="text-center" href="#">-->
            <!--<strong>See All Tasks</strong>-->
            <!--<i class="fa fa-angle-right"></i>-->
            <!--</a>-->
            <!--</li>-->
            <!--</ul>-->
            <!--&lt;!&ndash; /.dropdown-tasks &ndash;&gt;-->
            <!--</li>-->
            <!--&lt;!&ndash; /.dropdown &ndash;&gt;-->
            <!--<li class="dropdown">-->
            <!--<a class="dropdown-toggle" data-toggle="dropdown" href="#">-->
            <!--<i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>-->
            <!--</a>-->
            <!--<ul class="dropdown-menu dropdown-alerts">-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<i class="fa fa-comment fa-fw"></i> New Comment-->
            <!--<span class="pull-right text-muted small">4 minutes ago</span>-->
            <!--</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<i class="fa fa-twitter fa-fw"></i> 3 New Followers-->
            <!--<span class="pull-right text-muted small">12 minutes ago</span>-->
            <!--</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<i class="fa fa-envelope fa-fw"></i> Message Sent-->
            <!--<span class="pull-right text-muted small">4 minutes ago</span>-->
            <!--</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<i class="fa fa-tasks fa-fw"></i> New Task-->
            <!--<span class="pull-right text-muted small">4 minutes ago</span>-->
            <!--</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a href="#">-->
            <!--<div>-->
            <!--<i class="fa fa-upload fa-fw"></i> Server Rebooted-->
            <!--<span class="pull-right text-muted small">4 minutes ago</span>-->
            <!--</div>-->
            <!--</a>-->
            <!--</li>-->
            <!--<li class="divider"></li>-->
            <!--<li>-->
            <!--<a class="text-center" href="#">-->
            <!--<strong>See All Alerts</strong>-->
            <!--<i class="fa fa-angle-right"></i>-->
            <!--</a>-->
            <!--</li>-->
            <!--</ul>-->
            <!--&lt;!&ndash; /.dropdown-alerts &ndash;&gt;-->
            <!--</li>-->
            <!-- /.dropdown -->
            <li class="dropdown" :class="{ 'open' : isOpen }">
                <a class="dropdown-toggle" data-toggle="dropdown" @click="toggleMenu">
                    <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                    <li><a><i class="fa fa-user fa-fw"></i> User Profile</a>
                    </li>
                    <li><a><i class="fa fa-gear fa-fw"></i> Settings</a>
                    </li>
                    <li class="divider"></li>
                    <li><a @click="exit"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                    </li>
                </ul>
                <!-- /.dropdown-user -->
            </li>
            <!-- /.dropdown -->
        </ul>
        <!-- /.navbar-top-links -->

        <sidebar :programmes="programmes" @selectEvent="selected"></sidebar>
    </nav>
</template>

<script>
    import Sidebar from './Sidebar';
    import {mapActions} from 'vuex';
    import * as authService from '../../../services/auth.service'

    export default {
        name: "navbar",
        components: {
            Sidebar
        },
        props: {
            programmes: Array
        },
        computed: {
            appName() {
                return this.$store.state.appName;
            },
        },
        methods: {
            ...mapActions([
                'logout',
            ]),
            selected(id) {
                this.$emit('selectedProgramme', id)
            },
            exit() {
                // this.logout()
                //     .then(() => {
                //         this.$router.push('/login');
                // });

                authService.makeLogout().then(response => {
                    console.log('authService.makeLogout', response)
                }).catch((error) => {
                    console.log('authService.makeLogout error', error)
                });
            },
            toggleMenu() {
                this.isOpen = !this.isOpen;
            }
        },
        data() {
            return {
                isOpen: false
            }
        }
    }
</script>

<style scoped>

</style>