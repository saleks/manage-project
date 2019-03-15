<template>
    <div id="wrapper">
        <!-- Navigation -->
        <navbar :programmes="programmesList" @selectedProgramme="selectedProgramme"></navbar>
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
                        :tasksList="tasksList"
                        @showedModalProject="showedModalProject"
                        @selectProject="selectedProject">
                    </project-status-tracker>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <task-list :tasks="selectProjectTasks"
                               @showedModalTask="showedModalTask">
                    </task-list>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->
        <add-programme-modal v-if="showModalProgramme" @close="showModalProgramme = false" @saveProgramme="addProgramme"></add-programme-modal>
        <add-project-modal v-if="showModalProject" @close="showModalProject = false" @saveProject="addProject"></add-project-modal>
        <add-task-modal v-if="showModalTask" @close="showModalTask = false" @saveTask="addTask"></add-task-modal>
    </div>
    <!-- /#wrapper -->
</template>

<script>
    import Navbar from './components/Navbar';
    import WidgetPanel from  './components/WidgetPanel';
    import ProjectStatusTracker from './Projects/ProjectStatusTracker';
    import TaskList from './Tasks/TaskList';
    import AddProgrammeModal from './Programs/AddProgrammeModal';
    import AddProjectModal from './Projects/AddProjectModal';
    import  AddTaskModal from './Tasks/AddTaskModal';

    export default {
        name: "index",
        components: {
            Navbar,
            WidgetPanel,
            ProjectStatusTracker,
            TaskList,
            AddProgrammeModal,
            AddProjectModal,
            AddTaskModal
        },
        mounted() {
            let first = _.first(this.programmesList);
            this.selectedProgramme(first.id);
        },
        methods: {
            selectedProgramme(id) {
                this.currentProg = _.find(this.programmesList, ['id', id]);
                this.projectFilter(id);
            },
            projectFilter(id) {
                this.selectProgrammProj = _.filter(this.projectList, ['programme_id', id])
            },
            selectedProject(id) {
                this.currentProject = _.find(this.projectList, ['id', id]);
                this.taskFilter(id);
            },
            taskFilter(id) {
                this.selectProjectTasks = _.filter(this.tasksList, ['project_id', id]);
            },
            addProgramme(programme) {
                let maxId = this.programmesList.reduce(function(prev, curr) {
                    return prev.id > curr.id ? prev.id : curr.id;
                });
                programme.id = ++maxId;
                this.programmesList.push(programme);
                this.showModalProgramme = false;
            },
            showedModalProject() {
                if (this.isEmpty(this.currentProg)) {
                    return;
                }
                this.showModalProject = true;
            },
            addProject(project) {
                let maxId = this.projectList.reduce(function(prev, curr) {
                    return prev.id > curr.id ? prev.id : curr.id;
                });
                project.id = ++maxId;
                project.programme_id = this.currentProg.id;
                this.projectList.push(project);
                this.showModalProject = false;
                this.projectFilter(this.currentProg.id);
            },
            showedModalTask() {
                if (this.isEmpty(this.currentProject)) {
                    return;
                }
                this.showModalTask = true;
            },
            addTask(task) {
                let maxId = this.tasksList.reduce(function(prev, curr) {
                    return prev.id > curr.id ? prev.id : curr.id;
                });
                task.id = ++maxId;
                task.project_id = this.currentProject.id;
                task.progress = Math.floor(task.progress);
                task.start_date = moment(task.start_date).format('YYYY-MM-DD');
                task.end_date = moment(task.end_date).format('YYYY-MM-DD');
                this.tasksList.push(task);
                this.showModalTask = false;
                this.taskFilter(this.currentProject.id);
            },
            isEmpty(object) {
                return JSON.stringify(object) === "{}";
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
                showModalTask: false,
                showModalProject: false,
                showModalProgramme: false,
                currentProject: {},
                selectProjectTasks: [],
                currentProg: {},
                selectProgrammProj: [],
                programmesList: [
                    {id: 1, name: 'Programme 1'},
                    {id: 2, name: 'Programme 2'},
                    {id: 3, name: 'Programme 3'}
                ],
                projectList: [
                    {id: 1, programme_id: 1, name: 'PS001', status: 'Active'},
                    {id: 2, programme_id: 1, name: 'PS002', status: 'Active'},
                    {id: 3, programme_id: 1, name: 'PS003', status: 'Completed'},
                    {id: 4, programme_id: 1, name: 'PS004', status: 'Active'},
                    {id: 5, programme_id: 1, name: 'PS005', status: 'Archived'},
                    {id: 6, programme_id: 2, name: 'PS006', status: 'Active'},
                    {id: 7, programme_id: 1, name: 'PS007', status: 'Deleted'},
                    {id: 8, programme_id: 3, name: 'PS008', status: 'Active'},
                    {id: 9, programme_id: 1, name: 'PS009', status: 'Drafts'},
                ],
                tasksList: [
                    {id: 1, project_id: 1, name: 'Sprint 0 - Analysis', progress: 100},
                    {id: 2, project_id: 1, name: 'Sprint 0 - Scoping', progress: 80},
                    {id: 3, project_id: 1, name: 'Sprint 1 - Development', progress: 70},
                    {id: 4, project_id: 1, name: 'Sprint 1 - Showcasing', progress: 50},
                    {id: 5, project_id: 2, name: 'Sprint 2 - Analysis2', progress: 30},
                    {id: 6, project_id: 2, name: 'Sprint 2 - Scoping2', progress: 35},
                    {id: 7, project_id: 2, name: 'Sprint 2 - Scoping3', progress: 30},
                ],
                commentsList: [
                    {id: 1, task_id: 1, body: 'Comment text1', user: 'John Doe'},
                    {id: 2, task_id: 1, body: 'Comment text2', user: 'John Doe'},
                    {id: 3, task_id: 1, body: 'Comment text3', user: 'John Doe'},
                    {id: 4, task_id: 1, body: 'Comment text4', user: 'John Doe'},
                    {id: 5, task_id: 2, body: 'Comment text5', user: 'John Doe'},
                    {id: 6, task_id: 2, body: 'Comment text6', user: 'John Doe'},
                ],
                widgets: {
                    programmes: {title: 'Programmes', count: this.count(this.programmesList), panelColorType: 'panel-primary', icon: 'fa-life-ring'},
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