// plugins is a alias. see client/build/webpack.base.conf.js
// import http client
import { http } from '../../plugins/http/index'
import { getData } from '../../utils/get'

/**
 * Send login data and retrive a new token
 *
 * @param payload
 * @returns {Promise<T>}
 */
export const login = (payload) =>
    http.post('/auth/login', payload)
        .then(getData); // .then(response => getData(response))

/**
 * Register a new user
 *
 * @param payload
 * @returns {Promise<T>}
 */
export const register = (payload) => http.post('/auth/register', payload).then(getData);

/**
 * Send reset link email
 *
 * @param payload
 * @returns {Promise<T>}
 */
export const sendResetLink = (payload) => http.post('/auth/password/email', payload).then(getData);

/**
 * Get current user
 */
export const loadUserData = () => http.post('/auth/user').then(getData);