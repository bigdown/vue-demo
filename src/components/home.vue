<template>
<div v-bind:class="{ 'home-large' : !show }" class="home" 
	v-touch:panstart="panstart"
	v-touch:panend="panend"
	v-touch:panup="panup"
	v-touch:pandown="pandown"
	>
   <p v-touch:tap="onTap">This is home!</p>
   <p>This is noToShow!</p>
   <p>This is yesToShow!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is home!</p>
   <p>This is end!</p>
</div>
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
		// this.$http.get('http://192.168.191.1/brand_api/query.php').then((response) => {
		// 	alert(response.data.error)
		// },(response) => {
		// 	alert('error')
		// })
	},
	methods:{
		onTap:function(e){
			alert(e.type)
		},
		panstart:function(e){
			this.top = document.body.scrollTop
		},
		panend:function(e){
			console.log(e.type)
		},
		panup:function(e){
			document.body.scrollTop = this.top - e.deltaY
				this.noToShow()
		},
		pandown:function(e){
			document.body.scrollTop = this.top - e.deltaY
				this.yesToShow()
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
	.home{
		user-select: none;
		overflow: auto;
		padding: 50px 0;
	}
	.home-large{
		padding: 0px;
	}	
</style>