<template>
<!-- <div class="home"> -->
<div v-bind:class="{ 'home-large' : !show }" class="home" v-touch:pan="onPan"
   		v-touch-options:pan="{threshold:10}">
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
	methods:{
		onTap:function(e){
			alert(e.type)
		},
		onPan:function(e){
			if(e.deltaY > 0 && e.distance > 50){
				// if(!this.show){
					this.yesToShow()
					document.body.scrollTop -= e.distance
					return true

				// }
			}else if(e.deltaY < 0 && e.distance > 50){
				// if(this.show){
					this.noToShow()
					document.body.scrollTop += e.distance
					return true
				// }
			}
			console.log('(' +e.deltaX + ',' + e.deltaY + ')')
			// e.target.parentNode.scrollTop = e.deltaY
			// console.log(e.target.parentNode.tagName.scrollTop = e.deltaY)
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
		/*-webkit-user-select: none;*/
		user-select: none;
		/*overflow-y: scroll;*/
		overflow: auto;
		/*-webkit-*/
		padding: 50px 0;
	}
	.home-large{
		padding: 0px;
	}
</style>