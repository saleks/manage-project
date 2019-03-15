<template>
    <ul class="nav nav-tabs nav-stacked">
        <template v-for="task in tasks">
            <li :class="{'bg-info': sel === task.id }">
                <a @click.stop="selected(task.id)">
                    <div>
                        <p>
                            <strong>{{ task.name }}</strong>
                            <span class="pull-right text-muted">{{ task.progress }}% Complete</span>
                        </p>
                        <div class="progress progress-striped active" style="width: 100%">
                            <div class="progress-bar" :class="colorClass(task.progress)" role="progressbar" :aria-valuenow="task.progress" aria-valuemin="0" aria-valuemax="100" :style="'width: '+task.progress+ '%'">
                                <span class="sr-only">{{ task.progress }}% Complete (success)</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li class="divider"></li>
        </template>
        <template v-if="tasks.length === 0">
            <li>
                <p class="text-center">No tasks</p>
            </li>
        </template>
        <!--<li>-->
            <!--<a class="text-center" href="#">-->
                <!--<strong>See All Tasks</strong>-->
                <!--<i class="fa fa-angle-right"></i>-->
            <!--</a>-->
        <!--</li>-->
    </ul>
</template>

<script>
    export default {
        name: "task-item",
        props: {
            tasks: Array
        },
        data() {
            return {
                sel: null
            }
        },
        methods: {
            selected(id) {
                this.sel = id;
                this.$emit('selectEvent', id);
            },
            colorClass (progress) {
                if (progress > 0 && progress <= 30) {
                    return 'progress-bar-success'
                } else if (progress > 30 && progress <= 70) {
                    return 'progress-bar-warning'
                } else {
                    return 'progress-bar-danger'
                }
            }
        }
    }
</script>

<style scoped>

</style>