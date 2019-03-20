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
    dashboardService.store(programme)
        .then(response => {
            if (response.status === 'success') {
                commit(TYPES.ADD_NEW_PROGRAMME, response.data);
            }
        }).catch(error => {
            console.log('reason', error);
        });
    //

    Promise.resolve(programme);
};


export const saveNewProject = ({commit, state}, data) => {
    // Commit the mutations
    let project = data;
    // project.programme_id = data.programme_id;
    dashboardService.store(project)
        .then(response => {
            if (response.status === 'success') {
                commit(TYPES.ADD_NEW_PROJECT, response.data);
            }
        })
        .catch(error => {
            console.log('reason', error);
        });
    Promise.resolve(project)// keep promise chain
};

export const saveNewTask = ({commit, state}, data) => {
    // Commit the mutations
    let task = data;

    console.log('saveNewTask data before', data);
    // task.id = state.tasksList.length + 1;
    // task.entity.project_id = data.project_id;
    task.entity.progress = Math.floor(data.entity.progress);
    task.entity.start_date = moment(data.entity.start_date).format('YYYY-MM-DD');
    task.entity.end_date = moment(data.entity.end_date).format('YYYY-MM-DD');

    // commit(TYPES.ADD_NEW_TASK, task);
    console.log('saveNewTask data after', task);
    dashboardService.store(task)
        .then(response => {
            console.log('saveNewTask response', response);
            if (response.status === 'success') {
                commit(TYPES.ADD_NEW_TASK, response.data);
            }
        })
        .catch(error => {
            console.log('reason', error);
        });

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