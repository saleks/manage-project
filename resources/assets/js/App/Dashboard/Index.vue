<template>
    <div id="wrapper">
        <!-- Navigation -->
        <navbar :programmes="programmesList" @selectedProgramme="selectedProgramme"></navbar>
        <div id="page-wrapper">
            <div class="page-header row">
                <div class="col-lg-6">
                    <template v-if="selectProgrammProj.length === 0">
                        <h1>Dashboard</h1>
                    </template>
                    <template v-else>
                        <h1>Programme: "{{ currentProg.name }}" </h1>
                    </template>
                </div>
                <div class="col-lg-6" style="margin:20px 0 0 0">
                    <button type="button" class="btn btn-info pull-right btn-lg" @click="showModal = true">Start New Programme</button>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <widget-panel :widget="widgets.programmes"></widget-panel>
                <widget-panel :widget="widgets.projects"></widget-panel>
                <widget-panel :widget="widgets.tasks"></widget-panel>
                <widget-panel :widget="widgets.comments"></widget-panel>
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-8">
                    <project-status-tracker :projectList="selectProgrammProj" :tasksList="tasksList" @selectProject="selectedProject"></project-status-tracker>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <task-list :tasks="selectProjectTasks"></task-list>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->
        <add-programme-modal v-if="showModal" @close="showModal = false" @saveProgramme="addProgramme"></add-programme-modal>
    </div>
    <!-- /#wrapper -->
</template>

<script>
    import Navbar from './components/Navbar';
    import WidgetPanel from  './components/WidgetPanel';
    import ProjectStatusTracker from './Projects/ProjectStatusTracker';
    import TaskList from './Tasks/TaskList';
    import AddProgrammeModal from './Programs/AddProgrammeModal';

    export default {
        name: "index",
        components: {
            Navbar,
            WidgetPanel,
            ProjectStatusTracker,
            TaskList,
            AddProgrammeModal
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
                this.showModal = false;
            }
        },
        data () {
            return {
                showModal: false,
                currentProject: {},
                selectProjectTasks: [],
                currentProg: {},
                selectProgrammProj: [],
                widgets: {
                    programmes: {title: 'Programmes', amount: 3, panelColorType: 'panel-primary', icon: 'fa-life-ring'},
                    projects: {title: 'Projects', amount: 63, panelColorType: 'panel-green', icon: 'fa-product-hunt'},
                    tasks: {title: 'Tasks', amount: 133, panelColorType: 'panel-yellow', icon: 'fa-cogs'},
                    comments: {title: 'Comments', amount: 313, panelColorType: 'panel-red', icon: 'fa-comments'},
                },
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
                ]
            }
        }
    }
</script>

<style scoped>

</style>