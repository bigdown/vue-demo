import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import Home from './components/home.vue'
Vue.use(VueRouter)
Vue.use(VueTouch)

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
	'/home':{
    	component: Home
	},
    '/menu':{
    	component: menu
    },
    '/clame':{
        component: clame
    },
    '/line':{
        component: line
    },
    '/message':{
        component: message
    }
})

router.redirect({
  '*': '/home'
})

var InitApp = Vue.extend({})
router.start(App,'#app')

