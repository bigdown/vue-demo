import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isshow:true,
  title:'首页',
  islogin:false
}

const mutations = { 
	YESTOSHOW(state){
		state.isshow = true
	},
	NOTOSHOW(state){
		state.isshow = false
	},
	MODIFYTITLE(state , strTitle){
		state.title = strTitle
	},
	YESTOLOGIN(state){
		state.islogin = true
	}
}

export default new Vuex.Store({
  state,
  mutations
})