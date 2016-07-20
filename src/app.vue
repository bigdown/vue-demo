<template>
  <div class="content">
  	<hea></hea>
    <router-view></router-view>
    <foo></foo>
  </div>
</template>

<script>
import Hea from './components/header_search.vue'
import Foo from './components/footer.vue'
import store from './vuex/store'
import { yesToShow,noToShow } from './vuex/actions'

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
  },
  components: {Hea, Foo}
}
</script>

<style scoped>
	html,body{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	} 
/*  .content{
    padding: 50px 0;
  }*/
</style>