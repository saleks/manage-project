<template>
    <div id="wrapper">
        <!-- Navigation -->
        <navbar :programmes="programmesList"></navbar>
        <div id="page-wrapper">
            <div class="page-header row">
                <div class="col-lg-6">
                    <h1>Dashboard</h1>
                </div>
                <div class="col-lg-6" style="margin:20px 0 0 0">
                    <button type="button" class="btn btn-info pull-right btn-lg" @click="showModalProgramme = true">Start New Programme</button>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <widget-panel :widget="getWidget('programmes')"></widget-panel>
                <widget-panel :widget="getWidget('project')"></widget-panel>
                <widget-panel :widget="getWidget('tasks')"></widget-panel>
                <widget-panel :widget="getWidget('comments')"></widget-panel>
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-8">
                    <project-status-tracker
                        :projectList="selectProgrammProj"
                        :tasksList="tasksList">
                    </project-status-tracker>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-8 -->
                <div class="col-lg-4">
                </div>
                <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->
        <add-programme-modal v-if="showModalProgramme" @close="showModalProgramme = false" @saveProgramme="addProgramme"></add-programme-modal>
    </div>
    <!-- /#wrapper -->
</template>

<script>
    import Navbar from './components/Navbar';
    import WidgetPanel from  './components/WidgetPanel';
    import ProjectStatusTracker from './Projects/ProjectStatusTracker';
    import AddProgrammeModal from './Programs/AddProgrammeModal';

    import { mapActions } from 'vuex';

    export default {
        name: "index",
        components: {
            Navbar,
            WidgetPanel,
            ProjectStatusTracker,
            AddProgrammeModal,
        },
        computed: {
            programmesList() {
                return this.$store.state.Dashboard.programmesList;
            },
            projectList() {
                return this.$store.state.Dashboard.projectList;
            },
            tasksList() {
                return this.$store.state.Dashboard.tasksList;
            },
            commentsList() {
                return this.$store.state.Dashboard.commentsList;
            }
        },
        mounted() {
            let first = _.first(this.programmesList);
            this.selectedProgramme(first.id);
        },
        methods: {
            ...mapActions([
                'saveNewProgramme',
            ]),
            selectedProgramme(id) {
                this.currentProg = _.find(this.programmesList, ['id', id]);
                this.projectFilter(id);
            },
            projectFilter(id) {
                this.selectProgrammProj = _.filter(this.projectList, ['programme_id', id])
            },
            // selectedProject(id) {
            //     this.currentProject = _.find(this.projectList, ['id', id]);
            //     this.taskFilter(id);
            // },
            // taskFilter(id) {
            //     this.selectProjectTasks = _.filter(this.tasksList, ['project_id', id]);
            // },
            // selectedTask(id) {
            //     this.currentTask = _.find(this.tasksList, ['id', id]);
            //     this.commentsFilter(id);
            // },
            // commentsFilter(id) {
            //     this.selectedTaskComments = _.filter(this.commentsList, ['task_id', id]);
            // },
            addProgramme(programme) {
                this.saveNewProgramme(programme);
                this.showModalProgramme = false;
            },
            // showedModalProject() {
            //     if (this.isEmpty(this.currentProg)) {
            //         return;
            //     }
            //     this.showModalProject = true;
            // },
            // addProject(project) {
            //     let maxId = this.projectList.reduce(function(prev, curr) {
            //         return prev.id > curr.id ? prev.id : curr.id;
            //     });
            //     project.id = ++maxId;
            //     project.programme_id = this.currentProg.id;
            //     this.projectList.push(project);
            //     this.showModalProject = false;
            //     this.projectFilter(this.currentProg.id);
            // },
            // showedModalTask() {
            //     if (this.isEmpty(this.currentProject)) {
            //         return;
            //     }
            //     this.showModalTask = true;
            // },
            // addTask(task) {
            //     let maxId = this.tasksList.reduce(function(prev, curr) {
            //         return prev.id > curr.id ? prev.id : curr.id;
            //     });
            //     task.id = ++maxId;
            //     task.project_id = this.currentProject.id;
            //     task.progress = Math.floor(task.progress);
            //     task.start_date = moment(task.start_date).format('YYYY-MM-DD');
            //     task.end_date = moment(task.end_date).format('YYYY-MM-DD');
            //     this.tasksList.push(task);
            //     this.showModalTask = false;
            //     this.taskFilter(this.currentProject.id);
            // },
            // addComment(comment) {
            //     let maxId = this.commentsList.reduce(function(prev, curr) {
            //         return prev.id > curr.id ? prev.id : curr.id;
            //     });
            //     comment.id = ++maxId;
            //     comment.task_id = this.currentTask.id;
            //     comment.user = 'John Doe';
            //     comment.created_at = moment().format('YYYY-MM-DD H:mm:ss');
            //     this.commentsList.push(comment);
            //     this.commentsFilter(this.currentTask.id);
            // },
            // isEmpty(object) {
            //     return JSON.stringify(object) === "{}";
            // },
            getWidget(name){
                this.widgets[name].count = this.count(this[name+'List']);
                return this.widgets[name];
            },
            count(array){
                return _.size(array);
            }
        },
        data () {
            return {
                showModalProgramme: false,
                currentProg: {},
                selectProgrammProj: [],
                widgets: {
                    programmes: {title: 'Programmes', count: this.count(), panelColorType: 'panel-primary', icon: 'fa-life-ring'},
                    project: {title: 'Projects', count: this.count(), panelColorType: 'panel-green', icon: 'fa-product-hunt'},
                    tasks: {title: 'Tasks', count: this.count(), panelColorType: 'panel-yellow', icon: 'fa-cogs'},
                    comments: {title: 'Comments', count: this.count(), panelColorType: 'panel-red', icon: 'fa-comments'},
                },
            }
        }
    }
</script>

<style scoped>

</style>