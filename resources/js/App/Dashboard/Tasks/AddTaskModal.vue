<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" @click="$emit('close')">&times;</button>
                            <h4 class="modal-title">New Task</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Start Date</label>
                                    <datepicker
                                        :format="format"
                                        input-class="form-control"
                                        v-model="task.start_date"></datepicker>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>End Date</label>
                                    <datepicker
                                        :format="format"
                                        input-class="form-control"
                                        v-model="task.end_date"></datepicker>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-group" :class="{'has-error' : errors.has('name')}">
                                    <label>Task name:</label>
                                    <input v-model="task.name" v-validate="'required'" name="name" type="text" class="form-control" placeholder="Task name">
                                    <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
                                </div>
                            </div>
                            <div class="form-group" :class="{'has-error' : errors.has('description')}">
                                <label>Description:</label>
                                <textarea v-model="task.description" v-validate="'required'" name="description" class="form-control" rows="3"></textarea>
                                <span v-show="errors.has('description')" class="text-danger">{{ errors.first('description') }}</span>
                            </div>
                            <div class="form-group">
                                <label>Progress:</label>
                                <select v-model="task.progress" class="form-control">
                                    <option value="0">0%</option>
                                    <option value="10">10%</option>
                                    <option value="20">20%</option>
                                    <option value="30">30%</option>
                                    <option value="40">40%</option>
                                    <option value="50">50%</option>
                                    <option value="60">60%</option>
                                    <option value="70">70%</option>
                                    <option value="80">80%</option>
                                    <option value="90">90%</option>
                                    <option value="100">100%</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" @click="submit">Create</button>
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
    import Datepicker from 'vuejs-datepicker';

    export default {
        name: "add-task-modal",
        components: {
            Datepicker
        },
        data() {
            return {
                format: 'dd-MM-yyyy',
                task: {
                    id: null,
                    project_id: null,
                    name: '',
                    description: '',
                    start_date: new Date(),
                    end_date: new Date(),
                    progress: 0
                }
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$emit('saveTask', this.task);
                        return;
                    }
                    // alert('Correct them errors!');
                });
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
    .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
        background-color: #fff;
        opacity: 1;
    }
</style>