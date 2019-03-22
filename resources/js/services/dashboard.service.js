import Http from './http'
import {ResponseWrapper, ErrorWrapper} from './util'
import $store from '../store'

import {API_URL} from '../config'

export function loadData() {
    return new Promise((resolve, reject) => {
        new Http({auth: true}).get(`${API_URL}/dashboard`)
            .then(response => {
                _setDashboardData(response.data);
                return resolve(new ResponseWrapper(response, response.data))
            }).catch(error => reject(new ErrorWrapper(error)))
    })
}
function _setDashboardData(data) {
    $store.commit('SET_DASHBOARD_DATA', data);
}

export function saveProgramme(data) {
    return new Promise((resolve, reject) => {
        new Http({auth: true}).post(`${API_URL}/dashboard`, data)
            .then(response => {
                _addNewProgramme(response.data.entity);
                return resolve(new ResponseWrapper(response, response.data))
            }).catch(error => reject(new ErrorWrapper(error)))
    })
}

function _addNewProgramme(data) {
    $store.commit('ADD_NEW_PROGRAMME', data);
}