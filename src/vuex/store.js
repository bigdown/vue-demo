import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isshow:false,
  title:'首页',
  menuitem : 0
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
	MODIFYMENU(state,item){
		state.menuitem = item
	}
}

export default new Vuex.Store({
  state,
  mutations
})