import store from '../store'
import {http} from "../plugins/http";

const needAuth = auth => auth === true;

const beforeEach = (to, from, next) => {

    // store.commit('setLoading', true)

    const auth = to.meta.requiresAuth;
    if (to.name === 'login') {
        if (store.state.Auth.token) {
            http.defaults.headers.common.Authorization = 'Bearer ' + store.state.Auth.token;
            next({name: 'home'})
        } else {
            next()
        }
    }else if (needAuth(auth)) {
        if (store.state.Auth.token) {
            http.defaults.headers.common.Authorization = 'Bearer ' + store.state.Auth.token;
            next()
        }
        else {
            next({name: 'login'})
        }
    } else {
        next()
    }
};

export default beforeEach
