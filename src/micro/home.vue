<template>
<div></div>
</template>

<script>
import store from '../vuex/store'
import { yesToShow,noToShow } from '../vuex/actions'	
export default{
	store,
	data(){
		return {
			top : 0
		}
	},
	created: function () {

	},
	ready:function(){

	},
	methods:{
		onTap:function(e){
			
		}
	},
	vuex:{
		getters:{
			show:state => state.isshow
		},
		actions:{
			yesToShow,noToShow
		}
	}
}

</script>
	
<style>

</style>