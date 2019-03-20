import * as TYPES from './mutations-types';
import moment from 'moment';
import * as dashboardService from '../service';

export const getDashboardData = ({commit}) => {
    dashboardService.loadDashboardData()
        .then(response => {
            if (response.status === 'success') {
                commit(TYPES.SET_DASHBOARD_DATA, response);
            }
        })
};

export const clearDashboardData = ({commit}) => {
    commit(TYPES.CLEAR_DASHBOARD_DATA);
};

export const saveNewProgramme = ({commit, state}, data) => {
    let programme = data;
    // programme.id = state.programmesList.length + 1;
    dashboardService.store(programme)
        .then(response => {
            if (response.status === 'success') {
                commit(TYPES.ADD_NEW_PROGRAMME, response.programme);
            }
            // console.log('saveNewProgramme - response', response);
        });
    //

    Promise.resolve(programme);
};


export const saveNewProject = ({commit, state}, data) => {
    // Commit the mutations
    let project = data.project;
    project.id = state.projectList.length + 1;
    project.programme_id = data.programme_id;

    commit(TYPES.ADD_NEW_PROJECT, project);

    Promise.resolve(project) // keep promise chain
};

export const saveNewTask = ({commit, state}, data) => {
    // Commit the mutations
    let task = data.task;
    task.id = state.tasksList.length + 1;
    task.project_id = data.project_id;
    task.progress = Math.floor(data.task.progress);
    task.start_date = moment(data.task.start_date).format('YYYY-MM-DD');
    task.end_date = moment(data.task.end_date).format('YYYY-MM-DD');

    commit(TYPES.ADD_NEW_TASK, task);

    Promise.resolve(task) // keep promise chain
};

export const saveNewComment = ({commit, state, rootState}, data) => {
    // Commit the mutations
    let comment = data.comment;
    comment.id = state.commentsList.length + 1;
    comment.task_id = data.task_id;
    comment.user = rootState.Auth.user.last_name;
    comment.created_at = moment().format('YYYY-MM-DD H:mm:ss');

    commit(TYPES.ADD_NEW_COMMENT, comment);

    Promise.resolve(comment) // keep promise chain
};