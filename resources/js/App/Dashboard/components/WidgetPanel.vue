<template>
    <div class="col-lg-3 col-md-6">
        <div class="panel" :class="widget.panelColorType">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-5x" :class="widget.icon"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge">{{ widget.count }}</div>
                        <div>{{ widget.title }}</div>
                    </div>
                </div>
            </div>
            <a href="#">
                <div class="panel-footer">
                    <span class="pull-left">View Details</span>
                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            widget: Object
        },
        name: "widget-panel",
        mounted() {
            // console.log('widget', this.widget);
            // this.widgetInfo = this.widget;
        },
        data () {
            return {
                widgetInfo: {
                    title: '',
                    amount: null,
                    panelColorType: '',
                    icon: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>