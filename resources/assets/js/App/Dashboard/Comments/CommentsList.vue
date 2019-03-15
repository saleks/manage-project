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
                                <strong class="primary-font">{{ comment.user }} {{ index }} </strong>
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
                                <strong class="pull-right primary-font">{{ comment.user }} {{ index }} </strong>
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
            <div class="input-group">
                <input v-model="newComment.body" type="text" class="form-control input-sm" placeholder="Type your message here..." />
                <span class="input-group-btn">
                    <button class="btn btn-warning btn-sm" @click="submit">
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
        methods: {
            submit() {
                this.$emit('sendEvent', this.newComment);
                this.newComment = {}
            },
            formatDateHuman(date) {
                let minutes = moment().diff(date, 'minutes');
                return moment.duration(minutes, "minutes").humanize(true);
            }
        }
    }
</script>

<style scoped>

</style>