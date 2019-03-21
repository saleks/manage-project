<template>
    <ul class="nav nav-tabs nav-stacked">
        <template v-for="(project, index) in projects" >
            <li :class="{'bg-info': sel === project.id }">
                <a  @click.stop="selected(project.id)">
                    <div>
                        <p>
                            <strong>{{ project.name }}</strong>
                            <span class="pull-right text-muted">{{ project.progress }}% Complete</span>
                        </p>
                        <div class="progress progress-striped active">
                            <div class="progress-bar" :class="colorClass(project.progress)" role="progressbar" :aria-valuenow="project.progress" aria-valuemin="0" aria-valuemax="100" :style="'width: '+project.progress+ '%'">
                                <span class="sr-only">{{ project.progress }}% Complete (success)</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li class="divider"></li>
        </template>
        <template v-if="projects.length === 0">
            <li>
                <p class="text-center">No project</p>
            </li>
        </template>
        <!--<li>-->
            <!--<a class="text-center" href="#">-->
                <!--<strong>See All Projects &#160;</strong>-->
                <!--<i class="fa fa-angle-right"></i>-->
            <!--</a>-->
        <!--</li>-->
    </ul>
</template>

<script>
    export default {
        name: "project-status-item",
        props: {
            projects: Array
        },
        data () {
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