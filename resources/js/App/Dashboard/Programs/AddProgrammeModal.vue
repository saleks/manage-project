<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" @click="$emit('close')">&times;</button>
                            <h4 class="modal-title">New Programme</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <div class="form-group" :class="{'has-error' : errors.has('name')}">
                                    <label>Programme name:</label>
                                    <input v-model="programme.name" v-validate="'required'" name="name" type="text" class="form-control" placeholder="Programme name">
                                    <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
                                </div>
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
    export default {
        name: "add-programme-modal",
        data() {
            return {
                programme: {
                    name: ''
                }
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$emit('saveProgramme', this.programme);
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
</style>