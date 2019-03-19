<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <i class="fa fa-percent fa-fw"></i> &#160;Project Status Tracker
            <div class="pull-right">
                <div class="btn-group" :class="{'open' : isOpen}">
                    <button v-if="!isHomePage" class="btn btn-primary btn-xs" @click="$emit('showedModalProject')">Add New Project</button>
                    <template v-if="isHomePage">
                        <button type="button" class="btn btn-default btn-xs dropdown-toggle" @click="isOpen = !isOpen">
                            {{ currentProg.name }}
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu pull-right" role="menu">
                            <template v-for="programme in programmesList">
                                <li><a @click="selectEvent(programme.id)">{{ programme.name }}</a>
                                </li><li class="divider"></li>
                            </template>
                        </ul>
                    </template>
                </div>
            </div>
        </div>
        <!-- /.panel-heading -->
        <div class="panel-body">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs">
                <li :class="[ activetab === 1 ? 'active' : '' ]">
                    <a @click="activetab=1" data-toggle="tab">Active</a>
                </li>
                <li :class="[ activetab === 2 ? 'active' : '' ]">
                    <a @click="activetab=2" data-toggle="tab">Completed</a>
                </li>
                <li :class="[ activetab === 3 ? 'active' : '' ]">
                    <a @click="activetab=3" data-toggle="tab">Archived</a>
                </li>
                <li :class="[ activetab === 4 ? 'active' : '' ]">
                    <a @click="activetab=4" data-toggle="tab">Deleted</a>
                </li>
                <li :class="[ activetab === 5 ? 'active' : '' ]">
                    <a @click="activetab=5" data-toggle="tab">Drafts</a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane fade " :class="[ activetab === 1 ? 'in active' : '' ]" v-if="activetab === 1">
                    <project-status-item @selectEvent="selectProject" :projects="projectFilter('Active')"></project-status-item>
                </div>
                <div class="tab-pane fade" :class="[ activetab === 2 ? 'in active' : '' ]" v-if="activetab === 2">
                    <project-status-item @selectEvent="selectProject" :projects="projectFilter('Completed')"></project-status-item>
                </div>
                <div class="tab-pane fade" :class="[ activetab === 3 ? 'in active' : '' ]" v-if="activetab === 3">
                    <project-status-item @selectEvent="selectProject" :projects="projectFilter('Archived')"></project-status-item>
                </div>
                <div class="tab-pane fade" :class="[ activetab === 4 ? 'in active' : '' ]" v-if="activetab === 4">
                    <project-status-item @selectEvent="selectProject" :projects="projectFilter('Deleted')"></project-status-item>
                </div>
                <div class="tab-pane fade" :class="[ activetab === 5 ? 'in active' : '' ]" v-if="activetab === 5">
                    <project-status-item @selectEvent="selectProject" :projects="projectFilter('Drafts')"></project-status-item>
                </div>
            </div>
        </div>
        <!-- /.panel-body -->
    </div>
    <!-- /.panel -->
</template>

<script>
    import ProjectStatusItem from './ProjectStatusItem'
    export default {
        components: {
            ProjectStatusItem,
        },
        name: "project-status-tracker",
        props: {
            projectList: Array,
            tasksList: Array,
            showModalProject: Boolean,
            currentProg: Object,
            programmesList: Array
        },
        computed: {
            isHomePage () {
                return this.$route.name === 'home';
            }
        },
        data() {
            return {
                activetab: 1,
                isOpen: false
            }
        },
        mounted(){
            // console.log('this.projectList in project-status-tracker',this.projectList)
        },
        methods: {
            selectEvent(id) {
                this.$emit('selectedProgramme', id);
                this.isOpen = !this.isOpen;
            },
            projectFilter(status) {
                let filtered = [], newArr = [];
                filtered = _.filter(this.projectList, ['status.name', status]);
                newArr = _.map(filtered, (value) => {
                    let tasks = _.filter(this.tasksList, ['project_id', value.id]);
                    let progSumm = _.sumBy(tasks, (task) => {return task.progress});
                    if ( _.size(tasks) > 0 ) {
                        value.progress = _.floor((progSumm / _.size(tasks)));
                    } else {
                        value.progress = 0;
                    }
                    return value;
                });
                return newArr;
            },
            selectProject(id) {
                this.$emit('selectProject', id);
            }
        }
    }
</script>

<style scoped>

</style>