// http://vuex.vuejs.org/en/getters.html
import { isEmpty } from 'lodash'

// if has token, we assume that user is logged in our system
export const isLogged = ({ token }) => !isEmpty(token);
// export const isLogged = ({ token }) => true
// get current user data
export const currentUser = ({ user }) => user;
// get current user data
export const token = ({ token }) => token;
// export const token = ({ token }) => '241241'