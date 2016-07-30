<template>
	<div>form组件{{ show }}</div>
</template>
<script>
import store from '../vuex/store'
import { toopleOpen } from '../vuex/actions'	
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
			show:state => state.defaulttype
		},
		actions:{
			toopleOpen
		}
	}
}

</script>
	
<style>

</style>