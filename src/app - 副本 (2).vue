<template>
<div class="model">
	<div v-on:click="yesToShow()" class="model-switch">点击</div>
	<div v-on:click.self="noToShow()" v-if="isshow" transition="model-box" class="model-box">
	  <div class="model-message">
	  	{{ message }}
	  </div>
	</div>
</div>
	
</template>

<script>
import { yesToShow,noToShow } from '../vuex/actions'

export default {
  data () {
    return {
    	message: 'message'
    }
  },
  methods:{
  },
  vuex:{
  	getters:{
  		isshow:state => state.isshow,
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
	.model{
		width: 100%;
		height: 100%;
	}
	.model-switch{
		height: 50px;
		line-height: 50px;
		width: 120px;
		border: 1px solid red;
		text-align: center;
	}
	.model-box{
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		left: 0;
		background: #000;
		opacity: 0.5;
		z-index: 1;
	}
	.model-box-transition{
		transition: all .2s ease;
	}
	.model-box-enter,.model-box-leave{
		height: 0;
		padding: 0;
		opacity: 0;
	}
	.model-message{
		position: fixed;
		top: 50%;
		left: 50%;
		width: 400px;
		height: 300px;
		margin-top: -150px;
		margin-left: -200px;
		z-index: 2; 
		background: #FFF;
		color: blue;
		opacity: 1;
	}
</style>