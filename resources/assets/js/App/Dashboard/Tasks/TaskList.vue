<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <i class="fa fa-bell fa-fw"></i> &#160;Tasks
            <div class="pull-right">
                <div class="btn-group">
                    <button class="btn btn-primary btn-xs" @click="$emit('showedModalTask')">Add New Task</button>
                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                        PS001 &#160;
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu pull-right" role="menu">
                        <li><a href="#">Plant Support</a>
                        </li><li class="divider"></li>
                        <li><a href="#">Product Performance</a>
                        </li><li class="divider"></li>
                        <li><a href="#">Engineering</a>
                        </li> <li class="divider"></li>
                        <li><a href="#">OPs/QA</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="#">Raw Materials</a>
                        </li>
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
            tasks: Array
        },
        methods: {
            selectTask(id) {
                this.$emit('selectTask', id);
            }
        }
    }
</script>

<style scoped>

</style>