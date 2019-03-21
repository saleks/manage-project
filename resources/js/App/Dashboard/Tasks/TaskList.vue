<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <i class="fa fa-bell fa-fw"></i> &#160;Tasks
            <div class="pull-right">
                <div class="btn-group" :class="{'open' : isOpen}">
                    <button v-if="!isHomePage" class="btn btn-primary btn-xs" @click="$emit('showedModalTask')">Add New Task</button>
                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" @click="isOpen = !isOpen">
                        {{ currentProject.name }} &#160;
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu pull-right" role="menu">
                        <template v-for="project in projectList">
                            <li><a @click="selectProjectEvent(project.id)">{{ project.name }}</a>
                            </li><li class="divider"></li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /.panel-heading -->
        <div class="panel-body">
            <div class="panel-body">
                <task-item :tasks="tasks" @selectEvent="selectTask"></task-item>
            </div>
        </div>
        <!-- /.panel-body -->
    </div>
    <!-- /.panel -->
</template>

<script>
    import TaskItem from './TaskItem';
    export default {
        name: "task-list",
        components: {
            TaskItem
        },
        props: {
            currentProject: Object,
            tasks: Array,
            projectList: Array
        },
        computed: {
            isHomePage () {
                return this.$route.name === 'home';
            }
        },
        mounted() {
            // console.log( 'task-list projectList', this.projectList)
        },
        methods: {
            selectTask(id) {
                this.$emit('selectTask', id);
            },
            selectProjectEvent(id) {
                this.$emit('selectProject', id);
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