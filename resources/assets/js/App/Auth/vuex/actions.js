import * as TYPES from './mutations-types'
import * as userService from '../service'
import {http} from "../../../plugins/http"
import localforage from 'localforage'
import {isEmpty} from 'lodash'


/**
 * User Login
 *
 * @param dispatch
 * @param payload
 */
export const login = ({dispatch}, payload) =>
    userService.login(payload)
        .then(response => {
            if(response.token) {
                dispatch('setToken', response.token);
                const auth = JSON.parse(localStorage.getItem('vuex'));

                if(auth.Auth.token){
                    http.defaults.headers.common.Authorization = 'Bearer ' + response.token
                }
                dispatch('loadUser');
            }
            return response;
        });
/**
 * User register
 *
 * @param dispatch
 * @param payload
 * @param user
 */
export const register = ({dispatch}, payload) =>
    userService.register(payload)
        .then(response => {
            dispatch('setToken', '');

            return response
        });

/**
 * User Logout
 *
 * @param dispatch
 * @returns {Promise.<*[]>}
 */
export const logout = ({dispatch}) => {
    //userService.revokeToken()
    // call actions
    return Promise.all([
        dispatch('setToken', ''),
        dispatch('setUser', {})
    ])
}

/**
 * Set user in Vuex
 *
 * @param commit
 * @param user
 */
export const setUser = ({commit}, user) => {
    // Commit the mutations
    commit(TYPES.SET_USER, user);

    Promise.resolve(user) // keep promise chain
};

/**
 * Set token into storage
 *
 * @param commit
 * @param payload
 * @returns {Promise.<T>}
 */
export const setToken = ({commit}, payload) => {
    // prevent if payload is a object
    const token = (isEmpty(payload)) ? null : payload.token || payload;

    // Commit the mutations
    commit(TYPES.SET_TOKEN, token);

    return Promise.resolve(token) // keep promise chain
};

/**
 * Check user token
 *
 * @param dispatch
 * @param state
 * @returns {Promise.<T>}
 */
export const checkUserToken = ({dispatch, state}) => {
    // If the token exists then all validation has already been done
    if (!isEmpty(state.token)) {
        return Promise.resolve(state.token)
    }

    /**
     * Token does not exist yet
     * - Recover it from localstorage
     * - Recover also the user, validating the token also
     */
    return localforage.getItem(userTokenStorageKey)
        .then((token) => {
            if (isEmpty(token)) {
                // Token is not saved in localstorage
                return Promise.reject('NO_TOKEN') // Reject promise
            }
            // Put the token in the vuex store
            return dispatch('setToken', token) // keep promise chain
        })
        // With the token in hand, retrieves the user's data, validating the token
        .then((token) => {
            dispatch('loadUser');
            return token
        })
};

/**
 * Retrieves updated user information
 * If something goes wrong, the user's token is probably invalid
 */
export const loadUser = ({dispatch}) => userService.loadUserData()
// store user's data
    .then(response => {
        dispatch('setUser', response.data)
    })
    .catch(() => {
        console.log('setUser reason');
        // Process failure, delete the token
        dispatch('setToken', '');
        return Promise.reject('FAIL_IN_LOAD_USER') // keep promise chain
    });
