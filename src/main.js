import Vue from 'vue'
import App from './app.vue'
import Login from './login.vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import Home from './components/home.vue'
import VueResource from 'vue-resource'

import store from './vuex/store'
import { getLoginFlag } from './vuex/actions'


Vue.use(VueRouter)
Vue.use(VueTouch)
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
// Vue.http.headers.common['Authorization'] = 'TS';

var router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition: true,
	transitionOnLoad: true
})

var menu = Vue.extend({
    template: '<p>This is menu!</p>'
})

var clame = Vue.extend({
    template: '<p>This is clame!</p>'
})
var line = Vue.extend({
    template: '<p>This is line!</p>'
}) 
var message = Vue.extend({
    template: '<p>This is message!</p>'
})
router.map({
	'/login':{
    	component: Login
	},
    '/home':{
    	component: App,
        subRoutes:{
            '/menu':{
                component: menu
            },
            '/clame':{
                component: clame
            },
            '/line':{
                component: line
            }
        }
    }
})

router.redirect({
  '*': '/home'
})

if(this.getLoginFlag()){

}

var InitApp = Vue.extend({})
router.start(InitApp,'#app')
