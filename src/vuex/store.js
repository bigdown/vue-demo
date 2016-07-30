import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title:'首页',
  islogin:false,
  defaulttype:false
}

const mutations = { 
	MODIFYTITLE(state , strTitle){
		state.title = strTitle
	},
	YESTOLOGIN(state){
		state.islogin = true
	},
	YSETOOPEN(state){
		state.defaulttype = true
	},
	NOTOOPEN(state){
		state.defaulttype = false
	},
	TOOPLEOPEN(state){
		state.defaulttype = !state.defaulttype
	}
}

export default new Vuex.Store({
  state,
  mutations
})