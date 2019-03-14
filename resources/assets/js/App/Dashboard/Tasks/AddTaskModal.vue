<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">New Task</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <div class="form-group">
                                    <label>Task name:</label>
                                    <input v-model="task.name" type="text" class="form-control" placeholder="Task name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Description:</label>
                                <textarea v-model="task.description" class="form-control" rows="3"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Progress:</label>
                                <select v-model="task.progress" class="form-control">
                                    <option value="20">20%</option>
                                    <option value="40">40%</option>
                                    <option value="60">60%</option>
                                    <option value="80">80%</option>
                                    <option value="100">100%</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" @click="$emit('saveTask', task)">Create</button>
                                <button class="btn btn-default" @click="$emit('close')">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "add-task-modal",
        data() {
            return {
                task: {
                    id: null,
                    project_id: null,
                    name: '',
                    description: '',
                    start_date: '',
                    end_date: '',
                    progress: null
                }
            }
        }
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>