// https://vuex.vuejs.org/en/mutations.html
import * as TYPES from './mutations-types'

/* eslint-disable no-param-reassign */
export default {
    [TYPES.SET_USER](state, user) {
        state.user = user
    },
    [TYPES.SET_TOKEN](state, token) {
        state.token = token
    },
    [TYPES.SET_TOKEN_TYPE](state, token_type) {
        state.token_type = token_type
    },
    [TYPES.SET_ROLES](state, roles) {
        console.log('setRoles', roles);
        state.roles = roles
    },
    [TYPES.SET_EXPIRES](state, expires) {
        state.expires_in = expires
    },
    [TYPES.SET_IS_LOGIN](state, isLogin) {
        state.is_login = isLogin
    }
}