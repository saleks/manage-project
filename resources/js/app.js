window.moment = require('moment');
window._ = require('lodash');

window.Vue = require('vue');

import router from './router';
import store from './store';
import httpPlugin from './plugins/http'

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
/**
 * Make $http avaible to all components
 * Send store and router to httpPlugin (injection)
 */
Vue.use(httpPlugin, {store, router});

Vue.config.productionTip = false;

Vue.component('app', require('./App/App'));

const app = new Vue({
    router,
    store,
    el: '#app'
});
