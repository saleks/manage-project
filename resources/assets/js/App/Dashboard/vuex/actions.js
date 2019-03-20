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
    task.entity.progress = Math.floor(data.entity.progress);
    task.entity.start_date = moment(data.entity.start_date).format('YYYY-MM-DD');
    task.entity.end_date = moment(data.entity.end_date).format('YYYY-MM-DD');

    dashboardService.store(task)
        .then(response => {
            if (response.status === 'success') {
                commit(TYPES.ADD_NEW_TASK, response.data);
            }
        })
        .catch(error => {
            console.log('reason', error);
        });

    Promise.resolve(task) // keep promise chain
};

export const saveNewComment = ({commit, state}, data) => {
    // Commit the mutations
    let comment = data;
    dashboardService.store(comment)
        .then(response => {
            if (response.status === 'success') {
                commit(TYPES.ADD_NEW_COMMENT, response.data);
            }
        })
        .catch(error => {
            console.log('reason', error);
        });

    Promise.resolve(comment) // keep promise chain
};