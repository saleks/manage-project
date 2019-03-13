<template>
    <div id="wrapper">
        <!-- Navigation -->
        <navbar></navbar>
        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Dashboard</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <widget-panel :widget="widgets.programmes"></widget-panel>
                <widget-panel :widget="widgets.projects"></widget-panel>
                <widget-panel :widget="widgets.tasks"></widget-panel>
                <widget-panel :widget="widgets.comments"></widget-panel>
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-8">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-percent fa-fw"></i> &#160;Project Status Tracker
                            <div class="pull-right">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        Plant Support &#160;
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu pull-right" role="menu">
                                        <li><a href="#">Plant Support</a>
                                        </li><li class="divider"></li>
                                        <li><a href="#">Product Performance</a>
                                        </li><li class="divider"></li>
                                        <li><a href="#">Engineering</a>
                                        </li> <li class="divider"></li>
                                        <li><a href="#">OPs/QA</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="#">Raw Materials</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs">
                                <li class="active"><a href="#home" data-toggle="tab">Active</a>
                                </li>
                                <li><a href="#completed" data-toggle="tab">Completed</a>
                                </li>
                                <li><a href="#archived" data-toggle="tab">Archived</a>
                                </li>
                                <li><a href="#deleted" data-toggle="tab">Deleted</a>
                                </li>
                                <li><a href="#draft" data-toggle="tab">Drafts</a>
                                </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div class="tab-pane fade in active" id="home">
                                    <ul class="nav nav-tabs nav-stacked">
                                        <li>
                                            <a href="project.html">
                                                <div>
                                                    <p>
                                                        <strong>PS001</strong>
                                                        <span class="pull-right text-muted">40% Complete</span>
                                                    </p>
                                                    <div class="progress progress-striped active">
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                                            <span class="sr-only">40% Complete (success)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a href="#">
                                                <div>
                                                    <p>
                                                        <strong>PS005</strong>
                                                        <span class="pull-right text-muted">80% Complete</span>
                                                    </p>
                                                    <div class="progress progress-striped active">
                                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                                            <span class="sr-only">80% Complete (danger)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a class="text-center" href="#">
                                                <strong>See All Projects &#160;</strong>
                                                <i class="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="completed">
                                    <ul class="nav nav-tabs nav-stacked">
                                        <li class="divider"></li>
                                        <li>
                                            <a href="#">
                                                <div>
                                                    <p>
                                                        <strong>PS002</strong>
                                                        <span class="pull-right text-muted">20% Complete</span>
                                                    </p>
                                                    <div class="progress progress-striped active">
                                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                                            <span class="sr-only">20% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a href="#">
                                                <div>
                                                    <p>
                                                        <strong>PS003</strong>
                                                        <span class="pull-right text-muted">60% Complete</span>
                                                    </p>
                                                    <div class="progress progress-striped active">
                                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                                            <span class="sr-only">60% Complete (warning)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a class="text-center" href="#">
                                                <strong>See All Projects &#160;</strong>
                                                <i class="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="archived">
                                    <ul class="nav nav-tabs nav-stacked">
                                        <li class="divider"></li>
                                        <li>
                                            <a href="#">
                                                <div>
                                                    <p>
                                                        <strong>PS006</strong>
                                                        <span class="pull-right text-muted">20% Complete</span>
                                                    </p>
                                                    <div class="progress progress-striped active">
                                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                                            <span class="sr-only">20% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a class="text-center" href="#">
                                                <strong>See All Projects &#160;</strong>
                                                <i class="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="deleted">
                                    <ul class="nav nav-tabs nav-stacked">
                                        <li class="divider"></li>
                                        <li>
                                            <a href="#">
                                                <div>
                                                    <p>
                                                        <strong>PS001</strong>
                                                        <span class="pull-right text-muted">20% Complete</span>
                                                    </p>
                                                    <div class="progress progress-striped active">
                                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                                            <span class="sr-only">20% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a href="#">
                                                <div>
                                                    <p>
                                                        <strong>PS004</strong>
                                                        <span class="pull-right text-muted">60% Complete</span>
                                                    </p>
                                                    <div class="progress progress-striped active">
                                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                                            <span class="sr-only">60% Complete (warning)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a class="text-center" href="#">
                                                <strong>See All Projects &#160;</strong>
                                                <i class="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="draft">
                                    <ul class="nav nav-tabs nav-stacked">
                                        <li class="divider"></li>
                                        <li>
                                            <a href="#">
                                                <div>
                                                    <p>
                                                        <strong>PS002</strong>
                                                        <span class="pull-right text-muted">20% Complete</span>
                                                    </p>
                                                    <div class="progress progress-striped active">
                                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                                            <span class="sr-only">20% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a href="#">
                                                <div>
                                                    <p>
                                                        <strong>PS010</strong>
                                                        <span class="pull-right text-muted">60% Complete</span>
                                                    </p>
                                                    <div class="progress progress-striped active">
                                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                                            <span class="sr-only">60% Complete (warning)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a class="text-center" href="#">
                                                <strong>See All Projects &#160;</strong>
                                                <i class="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-bell fa-fw"></i> &#160;Tasks
                            <div class="pull-right">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        PS001 &#160;
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu pull-right" role="menu">
                                        <li><a href="#">Plant Support</a>
                                        </li><li class="divider"></li>
                                        <li><a href="#">Product Performance</a>
                                        </li><li class="divider"></li>
                                        <li><a href="#">Engineering</a>
                                        </li> <li class="divider"></li>
                                        <li><a href="#">OPs/QA</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="#">Raw Materials</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="panel-body">
                                <ul class="nav nav-tabs nav-stacked">
                                    <li>
                                        <a href="project.html">
                                            <div>
                                                <p>
                                                    <strong>Sprint 0 - Analysis</strong>
                                                    <span class="pull-right text-muted">100% Complete</span>
                                                </p>
                                                <div class="progress progress-striped active">
                                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                                                        <span class="sr-only">100% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="#">
                                            <div>
                                                <p>
                                                    <strong>Sprint 0 - Scoping</strong>
                                                    <span class="pull-right text-muted">80% Complete</span>
                                                </p>
                                                <div class="progress progress-striped active">
                                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                                        <span class="sr-only">80% Complete (danger)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="project.html">
                                            <div>
                                                <p>
                                                    <strong>Sprint 1 - Development</strong>
                                                    <span class="pull-right text-muted">70% Complete</span>
                                                </p>
                                                <div class="progress progress-striped active">
                                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                                                        <span class="sr-only">70% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="#">
                                            <div>
                                                <p>
                                                    <strong>Sprint 1 - Showcasing</strong>
                                                    <span class="pull-right text-muted">50% Complete</span>
                                                </p>
                                                <div class="progress progress-striped active">
                                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
                                                        <span class="sr-only">50% Complete (danger)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a class="text-center" href="#">
                                            <strong>See All Tasks</strong>
                                            <i class="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->
    </div>
    <!-- /#wrapper -->
</template>

<script>
    import Navbar from './components/Navbar';
    import WidgetPanel from  './components/WidgetPanel';
    export default {
        name: "index",
        components: {
            Navbar,
            WidgetPanel
        },
        data () {
            return {
                widgets: {
                    programmes: {title: 'Programmes', amount: 13, panelColorType: 'panel-primary', icon: 'fa-life-ring'},
                    projects: {title: 'Projects', amount: 63, panelColorType: 'panel-green', icon: 'fa-product-hunt'},
                    tasks: {title: 'Tasks', amount: 133, panelColorType: 'panel-yellow', icon: 'fa-cogs'},
                    comments: {title: 'Comments', amount: 313, panelColorType: 'panel-red', icon: 'fa-comments'},
                }
            }
        }
    }
</script>

<style scoped>

</style>