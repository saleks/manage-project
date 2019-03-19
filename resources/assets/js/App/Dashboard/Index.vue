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
                        :currentProg="currentProg"
                        :programmesList="programmesList"
                        :projectList="selectProgrammProj"
                        :tasksList="tasksList"
                        @selectedProgramme="selectedProgramme"
                        @selectProject="selectedProject">
                    </project-status-tracker>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <task-list :tasks="selectProjectTasks"
                               :currentProject="currentProject"
                               :projectList="selectProgrammProj"
                               @selectProject="selectedProject"
                               @selectTask="selectedTask">
                    </task-list>
                    <!-- /.panel -->
                    <comments-list
                        :comments="selectedTaskComments"
                    ></comments-list>
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
    import TaskList from './Tasks/TaskList';
    import CommentsList from './Comments/CommentsList';


    import { mapActions } from 'vuex';

    export default {
        name: "index",
        components: {
            Navbar,
            WidgetPanel,
            ProjectStatusTracker,
            AddProgrammeModal,
            TaskList,
            CommentsList

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
            },
            selectProgrammProj() {
                let projects = _.filter(this.projectList, ['programme_id', parseInt(this.currentProg.id)]);
                return projects;
            }
        },
        mounted() {
            this.getDashboardData()
                .then(() => {
                    let firstProg = _.first(this.programmesList);
                    this.selectedProgramme(firstProg.id);

                });
        },
        methods: {
            ...mapActions([
                'saveNewProgramme', 'getDashboardData'
            ]),
            selectedProgramme(id) {
                this.currentProg = _.find(this.programmesList, ['id', parseInt(id)]);
                this.selectDefaultProject();
                this.selectDefaultTask();
            },
            selectDefaultProject() {
                let firstProject = _.first(this.selectProgrammProj);
                this.selectedProject(firstProject.id);
            },
            selectDefaultTask() {
                let firstTask = _.first(this.selectProjectTasks);
                if (! _.isEmpty(firstTask)) {
                    this.selectedTask(firstTask.id);
                }
            },
            selectedProject(id) {
                this.currentProject = _.find(this.projectList, ['id', id]);
                this.taskFilter(id);
                this.selectDefaultTask();
                // this.currentTask = {};
                this.selectedTaskComments = [];
            },
            taskFilter(id) {
                this.selectProjectTasks = _.filter(this.tasksList, ['project_id', id]);
            },
            selectedTask(id) {
                this.currentTask = _.find(this.tasksList, ['id', id]);
                this.commentsFilter(id);
            },
            commentsFilter(id) {
                this.selectedTaskComments = _.filter(this.commentsList, ['task_id', id]);
            },
            addProgramme(programme) {
                this.saveNewProgramme(programme);
                this.showModalProgramme = false;
            },
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
                currentProject: {},
                currentTask:{},
                // selectProgrammProj: [],
                selectProjectTasks: [],
                selectedTaskComments: [],
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