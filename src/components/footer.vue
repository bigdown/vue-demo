<template>
	<footer v-if="show" transition="footershow">
		<ul>
			<li v-link="{ path: '/home' }" class="icon-home"></li>
			<li v-link="{ path: '/clame' }" class="icon-clame"></li>
			<li v-link="{ path: '/line' }" class="icon-line"></li>
			<li v-link="{ path: '/message' }" class="icon-message"></li>
			<li v-link="{ path: '/menu' }" class="icon-menu"></li>
		</ul>
<!-- 		<i v-on:click="addtype" class="add" v-bind:class="[clicktype?'add-hover':'add-default']"></i> -->
	</footer>
</template>

<script>
import store from '../vuex/store'
import { modifyTitle } from '../vuex/actions'	
export default {
	store,
	data(){
		return {
			clicktype:false
		}
	},
	methods:{
		addtype(){
			this.clicktype = !this.clicktype
		}
	},
	vuex:{
		getters:{
			title:state => state.title,
			show:state => state.isshow
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
		background: #FFF;
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
		-webkit-filter: grayscale(1);
		filter: grayscale(1);
	}
	.icon-clame{
		background: url(../assets/clame.png) center center no-repeat;
		background-size: 40px 40px;
		-webkit-filter: grayscale(1);
		filter: grayscale(1);
	}
	.icon-home{
		background: url(../assets/home.png) center center no-repeat;
		background-size: 40px 40px;
		-webkit-filter: grayscale(1);
		filter: grayscale(1);
	}
	.icon-line{
		background: url(../assets/line.png) center center no-repeat;
		background-size: 40px 40px;
		-webkit-filter: grayscale(1);
		filter: grayscale(1);
	}
	.icon-menu{
		background: url(../assets/menu.png) center center no-repeat;
		background-size: 40px 40px;
		-webkit-filter: grayscale(1);
		filter: grayscale(1);
	}
	.v-link-active{
		-webkit-filter: grayscale(0);
		filter: grayscale(0);
	}
	.footershow-transition {
		transition: all .3s ease;
	}
	.footershow-enter, .footershow-leave {
		height: 0;
		opacity: 0;
	}
	footer .add{
		position: fixed;
		right: 10px;
		bottom: 60px;
		width: 60px;
		height: 60px;
		background-size: 60px 60px;
		border-radius: 60px;
		display: inline-block;
	}
	.add-default{
		background: url(../assets/add.png) center center no-repeat;
	}
	.add-hover{
		background: url(../assets/add-hover.png) center center no-repeat;
	}
</style>