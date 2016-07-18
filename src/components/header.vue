<template>
	<header>
		<span class="icon left icon-home"></span>
		<span class="icon right "></span>
		<div>首页</div>
	</header>
</template>

<script>
import store from '../vuex/store'
import { modifyTitle } from '../vuex/actions'	
export default {
	data(){
		store
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

<style header>
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
		line-height: 40px;
		text-align: center;
		border-bottom: 1px solid #DDD;
		padding: 5px;
	}
	.icon{
		height: 40px;
		width: 40px;
		display: block;
	}
	.icon-home{
		background: url(../assets/bear.png) no-repeat;
		background-size: contain;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
</style>