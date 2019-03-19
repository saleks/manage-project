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
                <template v-for="programme in programmes">
                    <li >
                        <a @click="toggleMenu(programme.id)"><i class="fa fa-life-ring fa-fw"></i> {{ programme.name }} <span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" :class="{'in': sel === programme.id }">
                            <li >
                                <router-link :class="{'active': sel === programme.id }" :to="{ name: 'programme', params: { id: programme.id }}">{{ programme.name }}</router-link>
                            </li>
                            <li>
                                <a :class="{'active': sel === programme.id }" href="productpp.html">{{ programme.name }} By Assigned To</a>
                            </li>
                        </ul>
                        <!-- /.nav-second-level -->
                    </li>
                </template>

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
        methods: {
            toggleMenu(id) {
                this.sel = id;
                console.log('toggle')
            }
        },
        data() {
            return {
                sel: null
            }
        }
    }
</script>

<style scoped>

</style>