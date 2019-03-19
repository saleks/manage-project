// plugins is a alias. see client/build/webpack.base.conf.js
// import http client
import { http } from '../../plugins/http/index'
import { getData } from '../../utils/get'

/**
 * Get current user
 */
export const loadDashboardData = () => http.get('/dashboard').then(getData);