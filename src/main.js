import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition: true,
	transitionOnLoad: true
})

var content = Vue.extend({
    template: '<p>This is content!</p>'
})

var about = Vue.extend({
    template: '<p>This is about!</p>'
})

router.map({
	'/home':{
    	component: content
	},
    '/about':{
    	component: about
    }
})

// router.redirect({
//   '*': '/home'
// })

var InitApp = Vue.extend({})
router.start(App,'#app')

