<template>
	<footer>
		<ul>
			<li v-link="{ path: '/home' }" @click="clickmenu(0)" class="icon-home"></li>
			<li v-link="{ path: '/clame' }" @click="clickmenu(1)" class="icon-clame"></li>
			<li v-link="{ path: '/line' }" @click="clickmenu(2)" class="icon-line"></li>
			<li v-link="{ path: '/message' }" @click="clickmenu(3)" class="icon-message"></li>
			<li v-link="{ path: '/menu' }" @click="clickmenu(4)" class="icon-menu"></li>
		</ul>
	</footer>
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
	methods:{
		clickmenu:function(index){
			alert(index)
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
	footer{
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-top: 1px solid #DDD;
		padding: 5px;
	}
	ul{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	li{
		/*display: inline-block;*/
		width:20%;
		float: left;
		list-style: none;
		height: 40px;
	}
	
	li:before{
		content: '';
	}
	.icon-message{
		background: url(../assets/message.png) center center no-repeat;
		background-size: 40px 40px;
	}
	.icon-clame{
		background: url(../assets/clame.png) center center no-repeat;
		background-size: 40px 40px;
	}
	.icon-home{
		background: url(../assets/home.png) center center no-repeat;
		background-size: 40px 40px;
	}
	.icon-line{
		background: url(../assets/line.png) center center no-repeat;
		background-size: 40px 40px;
	}
	.icon-menu{
		background: url(../assets/menu.png) center center no-repeat;
		background-size: 40px 40px;
	}

</style>