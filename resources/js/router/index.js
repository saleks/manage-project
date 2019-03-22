import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
import reloadBeforeEach from './reloadBeforeEach'
import {routes as app} from '../App'

Vue.use(Router);

const routes = [...app];

const router = new Router({
    routes,
    linkActiveClass: 'active',
    mode: 'history',
});

router.beforeEach(beforeEach);
router.beforeEach(reloadBeforeEach);

export default router