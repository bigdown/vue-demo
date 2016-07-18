<template>
  <div class="">
	
  	<div>{{ message }}</div>
  	<div>{{ isshow }}</div>
  	<div v-on:click="yesToShow()">dianji</div>
	<router-view></router-view>
  </div>
</template>

<script>
import store from '../vuex/store'
import { yesToShow,noToShow } from '../vuex/actions'

export default {
  store,
  data () {
    return {
    	message: 'message'
    }
  },
  vuex:{
  	getters:{
  		isshow : state => state.isshow
  	},
  	actions:{
  		yesToShow,
  		noToShow
  	}
  }
}
</script>

<style app>
	html,body{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

</style>