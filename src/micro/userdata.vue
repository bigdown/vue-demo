<template>
<div>
  <input v-model="newTodo" v-on:keyup.enter="addTodo">
  <ul>
    <li v-for="todo in todos">
      <span>{{ todo.text }}</span>
      <button v-on:click="removeTodo($index)">X</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      todos:[
      	{text:"Add some todos"}
      ]
    }
  },
  ready:function(){
		this.$http.get('http://web.sns.movnow.com/brand_api/test.php',{},{
			headers:{
				"X-Requested-With": "XMLHttpRequest"
			}
		}).then(function(response){
			console.log(response.data)
			var obj = JSON.parse(response.data)
			this.todos = obj

		}, function(response){
			console.log("error")
		})
  },
  methods:{
  	addTodo(){
  		var text = this.newTodo.trim() 
  		if(text){
  			this.todos.push({text:text}) 
  			this.newTodo = ''
  		}
  	},
  	removeTodo(index){
  		this.todos.splice(index,1)
  	}
  }
}
</script>

<style>
	.message{
		color:red;
	}
</style>