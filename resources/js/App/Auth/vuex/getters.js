// http://vuex.vuejs.org/en/getters.html
// import { isEmpty } from 'lodash'

// old version
// if has token, we assume that user is logged in our system
// export const isLogged = ({ token }) => !isEmpty(token);
// export const isLogged = ({ token }) => true
// get current user data
// export const currentUser = ({ user }) => user;
// get current user data
// export const token = ({ token }) => token;
// export const token = ({ token }) => '241241'

export const token = state => state.token;
export const tokenType = state => state.token_type;
export const expires = state => state.expires_in;
export const is_login = state => state.is_login;
export const roles = state => state.roles;
export const user = state => state.user;