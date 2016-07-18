import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isshow:false
}

const mutations = { 
	YESTOSHOW(state){
		state.isshow = true
	},
	NOTOSHOW(state){
		state.isshow = false
	}
}

export default new Vuex.Store({
  state,
  mutations
})