<template>
    <div class="chat-panel panel panel-default">
        <div class="panel-heading">
            <i class="fa fa-comments fa-fw"></i> Comments
        </div>
        <!-- /.panel-heading -->
        <div class="panel-body">
            <ul class="chat">
                <template v-for="(comment, index) in comments">
                    <li v-if="!(index % 2)" class="left clearfix">
                    <span class="chat-img pull-left">
                        <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar"
                             class="img-circle"/>
                    </span>
                        <div class="chat-body clearfix">
                            <div class="header">
                                <strong class="primary-font">{{ comment.user.first_name }} {{ comment.user.last_name }}</strong>
                                <small class="pull-right text-muted">
                                    <i class="fa fa-clock-o fa-fw"></i> {{ formatDateHuman(comment.created_at) }}
                                </small>
                            </div>
                            <p>
                                {{ comment.body }}
                            </p>
                        </div>
                    </li>
                    <li v-else class="right clearfix">
                    <span class="chat-img pull-right">
                        <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" class="img-circle" />
                    </span>
                        <div class="chat-body clearfix">
                            <div class="header">
                                <small class=" text-muted">
                                    <i class="fa fa-clock-o fa-fw"></i> {{ formatDateHuman(comment.created_at) }}</small>
                                <strong class="pull-right primary-font">{{ comment.user.first_name }} {{ comment.user.last_name }}</strong>
                            </div>
                            <p>
                                {{ comment.body }}
                            </p>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        <!-- /.panel-body -->
        <div class="panel-footer">
            <span v-show="errors.has('message')" class="text-danger">{{ errors.first('message') }}</span>
            <div class="input-group" :class="{'has-error' : errors.has('body')}">
                <input v-model="newComment.body" v-validate="'required'" name="message" type="text" class="form-control input-sm" placeholder="Type your message here..." />
                <span class="input-group-btn">
                    <button class="btn btn-warning btn-sm" @click="submit" :class="{ 'disabled' : isHomePage }">
                        Send
                    </button>
                </span>
            </div>
        </div>
        <!-- /.panel-footer -->
    </div>
</template>

<script>
    export default {
        name: "comments-list",
        props: {
            comments: Array
        },
        data() {
            return {
                newComment: {
                    body: ''
                }
            }
        },
        computed: {
            isHomePage () {
                return this.$route.name === 'home';
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$emit('sendEvent', this.newComment);
                        this.newComment = {};
                        return;
                    }
                    // alert('Correct them errors!');
                });
            },
            formatDateHuman(date) {
                let minutes = moment().diff(date, 'minutes');
                return moment.duration(minutes, 'minutes').humanize();
            }
        }
    }
</script>

<style scoped>

</style>