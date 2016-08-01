import Vue from 'vue'
import App from './app.vue'
import Login from './login.vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import Home from './components/home.vue'
import VueResource from 'vue-resource'
import Userdata from './micro/userdata.vue'
import Form from './components/form.vue'

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
        Vue.http.get('http://web.sns.movnow.com/brand_api/check.php',{},{
            headers:{
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function(response){
            console.log(response.data)
            var obj = JSON.parse(response.data)
            if(obj.error == 0){
                transition.next()
            }else{
                router.go('/login')
            }
        }, function(response){
            console.log("error")
            router.go('/login')
        })
        // if(localStorage.getItem('token') == '123'){
        //     transition.next()
        // }else{
        //     router.go('/login')
        // }
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
        auth: true,
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
            },
            '/formdemo':{
                component: Form
            }
        }
    }
})
router.redirect({
  '*': '/home/userdata'
})

var InitApp = Vue.extend({
})

// router.start(Vue.extend(App), '#app');
router.start(InitApp,'#app')
