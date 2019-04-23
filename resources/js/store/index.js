import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

import state from './state'
import {vuex as app} from '../App'

Vue.use(Vuex);
console.log('store index ...app', app);
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        ...app.modules
    },
    plugins: [createPersistedState()]
});

// Vue.use(store);

export default store