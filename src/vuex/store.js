import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isshow:false,
  title:'首页'
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
	}
}

export default new Vuex.Store({
  state,
  mutations
})