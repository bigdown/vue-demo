import Vue from 'vue'
import App from './app.vue'
import Header from './components/header.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition: true,
	transitionOnLoad: true
})

router.map({
	'/home':{
    	component: Header
	},
    '/header':{
    	component: function(resolve){
    		require(['./components/header.vue'],resolve)
    	}
    }
})

router.redirect({
  '*': '/home'
})

// var InitApp = Vue.extend({})
router.start(App,'#app')

