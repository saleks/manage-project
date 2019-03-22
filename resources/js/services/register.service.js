import Http from './http'
import {ResponseWrapper, ErrorWrapper} from './util'
import $store from '../store'

import {API_URL} from '../config'


export function make(payload) {
    return new Promise((resolve, reject) => {
        new Http({auth: false}).post(`${API_URL}/auth/register`, payload)
            .then(response => {
                return resolve(new ResponseWrapper(response, response.data))
            }).catch(error => reject(new ErrorWrapper(error)))
    })
}