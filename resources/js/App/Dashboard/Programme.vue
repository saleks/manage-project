<template>
    <div id="wrapper">
        <!-- Navigation -->
        <navbar :programmes="programmesList"></navbar>
        <div id="page-wrapper">
            <div class="page-header row">
                <div class="col-lg-6">
                    <h1>Programme: "{{ currentProg.name }}"</h1>
                </div>
                <div class="col-lg-6" style="margin:20px 0 0 0">
                    <!--<button type="button" class="btn btn-info pull-right btn-lg" @click="showModalProgramme = true">Start New Programme</button>-->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <project-status-tracker
                        :currentProg="currentProg"
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
                               :currentProject="currentProject"
                               :projectList="selectProgrammProj"
                               @selectProject="selectedProject"
                               @selectTask="selectedTask"
                               @showedModalTask="showedModalTask">
                    </task-list>
                    <!-- /.panel -->
                    <comments-list
                        :comments="selectedTaskComments"
                        @sendEvent="addComment"
                    ></comments-list>
                </div>
                <!-- /.col-lg-4 -->
            </div>
        </div>
        <add-project-modal v-if="showModalProject" @close="showModalProject = false" @saveProject="addProject"></add-project-modal>
        <add-task-modal v-if="showModalTask" @close="showModalTask = false" @saveTask="addTask"></add-task-modal>
    </div>
</template>

<script>
    import Navbar from './components/Navbar';
    import ProjectStatusTracker from './Projects/ProjectStatusTracker';
    import TaskList from './Tasks/TaskList';
    import AddProjectModal from './Projects/AddProjectModal';
    import AddTaskModal from './Tasks/AddTaskModal';
    import CommentsList from './Comments/CommentsList';
    import { mapActions } from 'vuex';


    export default {
        components: {
            Navbar,
            ProjectStatusTracker,
            TaskList,
            AddProjectModal,
            AddTaskModal,
            CommentsList
        },
        name: "Programme",
        watch: {
            '$route' (to, from) {
                // обрабатываем изменение параметров маршрута...
                this.selectedProgramme(to.params.id);
            }
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
            },
            selectProjectTasks() {
                let tasks = _.filter(this.tasksList, ['project_id', this.currentProject.id]);
                return _.isEmpty(tasks) ? [] : tasks;
            },
            selectedTaskComments() {
                let comments =  _.filter(this.commentsList, ['task_id', this.currentTask.id]);
                return _.isEmpty(comments) ? [] : comments;
            }
        },
        mounted() {
           let id = this.$route.params['id'];
           this.selectedProgramme(id);
        },
        methods: {
            ...mapActions([
                'saveNewProject', 'saveNewTask', 'saveNewComment'
            ]),
            selectedProgramme(id) {
                this.currentProg = _.find(this.programmesList, ['id', parseInt(id)]);
                this.selectDefaultProject();
                this.selectDefaultTask();
            },
            selectDefaultProject() {
                let firstProject = _.first(this.selectProgrammProj);
                if (! _.isEmpty(firstProject)) {
                    this.selectedProject(firstProject.id);
                } else {
                    this.currentProject = {}
                }
            },
            selectDefaultTask() {
                let firstTask = _.first(this.selectProjectTasks);
                if (! _.isEmpty(firstTask)) {
                    this.selectedTask(firstTask.id);
                } else {
                    this.currentTask = {}
                }
            },
            selectedProject(id) {
                this.currentProject = _.find(this.projectList, ['id', id]);
                this.selectDefaultTask();
            },
            selectedTask(id) {
                this.currentTask = _.find(this.tasksList, ['id', id]);
            },
            showedModalProject() {
                if (_.isEmpty(this.currentProg)) {
                    return;
                }
                this.showModalProject = true;
            },
            addProject(project) {
                let data = {
                    type: 'project',
                    entity: project,
                    programme_id: this.currentProg.id
                };
                this.saveNewProject(data)
                    .then(response => {
                        console.log('resp in component', response)
                    });
                this.showModalProject = false;
            },
            showedModalTask() {
                if (_.isEmpty(this.currentProject)) {
                    return;
                }
                this.showModalTask = true;
            },
            addTask(task) {
                let data = {
                    type: 'task',
                    entity: task,
                    project_id: this.currentProject.id
                };
                this.saveNewTask(data)
                    .then(() => {
                        // console.log('addTask then');
                        this.showModalTask = false;
                    });
            },
            addComment(comment) {
                if (_.isEmpty(this.currentTask)) {
                    return;
                }
                let data = {
                    type: 'comment',
                    entity: comment,
                    task_id: this.currentTask.id
                };
                this.saveNewComment(data)
                    .then((resp) => {
                        console.log('saveNewComment in component', resp);
                    });
            }
        },
        data() {
            return {
                showModalTask: false,
                showModalProject: false,
                currentTask: {},
                currentProg: {},
                currentProject: {},
                // selectedTaskComments: [],
                // selectProjectTasks: [],
                // selectProgrammProj: []
            }
        }
    }
</script>

<style scoped>

</style>