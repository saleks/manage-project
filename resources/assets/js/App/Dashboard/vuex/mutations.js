// https://vuex.vuejs.org/en/mutations.html
import * as TYPES from './mutations-types'

/* eslint-disable no-param-reassign */
export default {
    [TYPES.ADD_NEW_PROGRAMME] (state, programme) {
        state.programmesList.push(programme);
    },
    [TYPES.ADD_NEW_PROJECT] (state, project) {
        state.projectList.push(project);
    },
    [TYPES.ADD_NEW_TASK] (state, task) {
        state.tasksList.push(task);
    },
    [TYPES.ADD_NEW_COMMENT] (state, comment) {
        state.commentsList.push(comment);
    },
}