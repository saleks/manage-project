window.Vue = require('vue');
window.Vuex = require('vuex');

window.moment = require('moment');
window._ = require('lodash');

import router from './router/index';
import store from './store';

import httpPlugin from './plugins/http'

/**
 * Make $http avaible to all components
 * Send store and router to httpPlugin (injection)
 */
Vue.use(httpPlugin, {store, router});
// import Cookies from 'js-cookie';
// window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('access_token');

const App = require('./App/App.vue');

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store
});
