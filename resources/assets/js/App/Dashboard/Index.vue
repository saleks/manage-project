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
            },
            selectProgrammProj() {
                let filter = _.filter(this.projectList, ['programme_id', parseInt(this.currentProg.id)]);
                console.log('filter', filter);
                return filter
            }
        },
        created() {

        },
        mounted() {
            this.getDashboardData()
                .then(() => {
                    console.log('this.programmesList', this.programmesList);
                    let first = _.first(this.programmesList);
                    console.log(first.id);
                    this.selectedProgramme(first.id);
                });

        },
        methods: {
            ...mapActions([
                'saveNewProgramme', 'getDashboardData'
            ]),
            selectedProgramme(id) {
                this.currentProg = _.find(this.programmesList, ['id', parseInt(id)]);
                console.log('this.currentProg',this.currentProg );
                // this.projectFilter(id);
            },
            // projectFilter(id) {
            //     this.selectProgrammProj = _.filter(this.projectList, ['programme_id', parseInt(id)]);
            //     console.log('this.selectProgrammProj',this.selectProgrammProj);
            // },
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
                // selectProgrammProj: [],
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