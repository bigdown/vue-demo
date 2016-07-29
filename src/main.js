import Vue from 'vue'
import App from './app.vue'
import Login from './login.vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import Home from './components/home.vue'
import VueResource from 'vue-resource'
import Userdata from './micro/userdata.vue'

Vue.use(VueRouter)
Vue.use(VueTouch)
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true


var router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition: true,
	transitionOnLoad: true
})

router.beforeEach((transition) => {
    // console.log(transition.to.auth)
    if (transition.to.auth) {
        transition.next()
    } else {
        if(localStorage.getItem('token') == '123'){
            transition.next()
        }else{
            router.go('/login')
        }
    }
})

var userinfo = Vue.extend({
    template: '<p>用户详情</p>'
})
var chat = Vue.extend({
    template: '<p>聊天</p>'
}) 
var bl = Vue.extend({
    template: '<p>部落</p>'
})
var square = Vue.extend({
    template: '<p>广场</p>'
})
router.map({
	'/login':{
    	component: Login,
        auth:true
	},
    '/home':{
    	component: App,
        auth: false,
        subRoutes:{
            '/userdata':{
                component: Userdata
            },
            '/userinfo':{
                component: userinfo
            },
            '/chat':{
                component: chat
            },
            '/bl':{
                component: bl
            },
            '/square':{
                component: square
            }
        }
    }
})
router.redirect({
  '*': '/home/userdata'
})

// router.beforeEach(({to,from,next}) => {
//     var to = to.path
//     var from = from.path
//     console.log(to+">>>"+from)
//     console.log(getLoginFlag())
//     next()
// })

var InitApp = Vue.extend({
})

router.start(InitApp,'#app')
