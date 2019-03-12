import {isFunction} from 'lodash'
import {vuex as Auth} from './Auth'
// import { vuex as Dashboard } from './dashboard'

// start extraction data from vuex modules
const vuex = {Auth};
const keys = Object.keys(vuex);
const modules = keys.reduce((acc, key) => ({...acc, [key]: vuex[key].module}), {});
const plugins = keys.reduce((acc, key) => [...acc, vuex[key].plugin], []).filter(isFunction);

// Shorthand for ‘modules: modules’
export default {modules, plugins}