<template>
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li class="sidebar-search">
                    <div class="input-group custom-search-form">
                        <input type="text" class="form-control" placeholder="Search...">
                        <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                    </div>
                    <!-- /input-group -->
                </li>
                <li>
                    <router-link :to="{ name: 'home' }"><i class="fa fa-dashboard fa-fw"></i> Dashboard</router-link>
                </li>
                <li>
                    <a href="#"><i class="fa fa-life-ring fa-fw"></i> Programmes <span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li v-for="programme in programmes">
                            <router-link :to="{ name: 'programme', params: { id: programme.id }}">{{ programme.name }}</router-link>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
            </ul>
        </div>
        <!-- /.sidebar-collapse -->
    </div>
    <!-- /.navbar-static-side -->
</template>

<script>
    export default {
        name: "sidebar",
        props: {
            programmes: Array
        },
        methods: {}
    }
</script>

<style scoped>

</style>