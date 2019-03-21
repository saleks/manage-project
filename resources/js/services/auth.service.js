import axios from 'axios'
import Http from './http'
import {ResponseWrapper, ErrorWrapper} from './util'
import $store from '../store'
import $router from '../router'

import {API_URL} from '../config'

/**
 ******************************
 * @API
 ******************************
 */

export function makeLogin({email, password}) {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/auth/login`, {email, password})
            .then(response => {
                console.log('makeLogin response', response );
                _setAuthData(response);
                $router.push({name: 'dashboard'});
                return resolve(new ResponseWrapper(response, response.data))
            }).catch(error => reject(new ErrorWrapper(error)))
    })
}

export function makeLogout() {
    return new Promise((resolve, reject) => {
        new Http({auth: true}).post(`${API_URL}/auth/logout`)
            .then(response => {
                _resetAuthData();
                $router.push({name:'auth'});
                return resolve(new ResponseWrapper(response, response.data))
            }).catch(error => {
            _resetAuthData();
            reject(new ErrorWrapper(error))
        })
    })
}

export function refreshTokens() {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/auth/refresh`, '', {
                headers: {Authorization: "Bearer " + $store.state.Auth.token}
            }
        )
            .then(response => {
                _setAuthData(response);
                return resolve(new ResponseWrapper(response, response))
            })
            .catch(error => {
                _resetAuthData();
                return reject(new ErrorWrapper(error))
            })
    })
}

/**
 ******************************
 * @methods
 ******************************
 */

export function isAccessTokenExpired() {
    const accessTokenExpDate = $store.state.Auth.expires_in - 1;
    const nowTime = Math.floor(new Date().getTime() / 1000);
    return accessTokenExpDate <= nowTime;
}

export function resetMessageData() {
    $store.commit('SET_EXPIRES', null);
}

export function getAccessToken() {
    return $store.state.Auth.token_type + ' ' + $store.state.Auth.token;
}

function _resetAuthData() {
    // reset userData in store
    $store.commit('SET_USER', {});
    $store.commit('SET_TOKEN', '');
    $store.commit('SET_EXPIRES', null);
    $store.commit('SET_IS_LOGIN', false);
    $store.commit('CLEAR_DASHBOARD_DATA', false);
}

function _setAuthData(response) {
    console.log('_setAuthData response', response);
    const nowTime = Math.floor(new Date().getTime() / 1000);
    $store.commit('SET_TOKEN', response.data.token);
    $store.commit('SET_EXPIRES', nowTime + parseInt(response.data.expires_in));
    $store.commit('SET_IS_LOGIN', true);
}
