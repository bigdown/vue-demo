<template>
	<header>
		<input class="input-default" type="text" placeholder="搜索话题、问题或人" />
	</header>
</template>

<script>
import store from '../vuex/store'
import { modifyTitle } from '../vuex/actions'	
export default {
	store,
	data(){
		return {

		}
	},
	vuex:{
		getters:{
			title:state => state.title
		},
		actions:{
			modifyTitle
		}
	}
}
</script>

<style scoped>
	html,body{
		margin: 0;
		padding: 0;
		width: 100%;
	}
	header{
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		/*width: 100%;*/
		height: 40px;
		/*text-align: center;*/
		padding: 5px;
		background: #1D8AE7;
	}
	input{
		margin: 0;
		padding: 0;
		text-indent: 40px;
		height: 40px;
		width: 100%;
		font-size: 20px;
		border: none;
	}
	.input-default{
		background: url(../assets/search.png) no-repeat #49A1EB;
		color: #6CAFE7;
		background-size: 40px 40px;
	}
</style>