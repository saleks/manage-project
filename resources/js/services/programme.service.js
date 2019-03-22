import Http from './http'
import {ResponseWrapper, ErrorWrapper} from './util'
import $store from '../store'

import {API_URL} from '../config'

export function saveProject(data) {
    return new Promise((resolve, reject) => {
        new Http({auth: true}).post(`${API_URL}/dashboard`, data)
            .then(response => {
                _addNewProject(response.data.entity);
                return resolve(new ResponseWrapper(response, response.data))
            }).catch(error => reject(new ErrorWrapper(error)))
    })
}

function _addNewProject(data) {
    $store.commit('ADD_NEW_PROJECT', data);
}

export function saveTask(data) {
    return new Promise((resolve, reject) => {
        new Http({auth: true}).post(`${API_URL}/dashboard`, data)
            .then(response => {
                _addNewTask(response.data.entity);
                return resolve(new ResponseWrapper(response, response.data))
            }).catch(error => reject(new ErrorWrapper(error)))
    })
}

function _addNewTask(data) {
    $store.commit('ADD_NEW_TASK', data);
}

export function saveComment(data) {
    return new Promise((resolve, reject) => {
        new Http({auth: true}).post(`${API_URL}/dashboard`, data)
            .then(response => {
                _addNewComment(response.data.entity);
                return resolve(new ResponseWrapper(response, response.data))
            }).catch(error => reject(new ErrorWrapper(error)))
    })
}

function _addNewComment(data) {
    $store.commit('ADD_NEW_COMMENT', data);
}