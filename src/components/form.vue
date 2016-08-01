<template>
<div>
	<div class="paging">
		<label class="btn left">刷新</label>
		<label class="btn left" @click="previous" v-show="currentpage>1">上一页</label>
		<div class="pagination left">
			<label class="page-node" v-for="page in pages" v-bind:class="{ 'selected':(page==currentpage-1) }" @click="gotopage($index)">{{ $index+1 }}</label>
		</div>
		<label class="btn left" @click="next" v-show="currentpage<pages">下一页</label>
	</div>
	<div>
		<div v-for="data in datas" v-show="($index >= (currentpage-1)*pagesize && $index < (currentpage)*pagesize)" class="item">
			<img class="header left" src="../assets/bear.png">
			<div class="user-info">
				<div class="nick"><span>{{ data.nick }}</span>(<span>200151</span>)</div>
				<div class="time"><span>{{ data.time }}</span></div>
				<div class="title">
					{{ data.title }}
				</div>
				<div class="title">
					{{ data.content }}
				</div>
			</div>			
		</div>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return {
			datas:[
				{
					nick:"昵称1",
					time:"2016-08-01 16:15:10",
					title:"标题",
					content:"正文"
				},{
					nick:"昵称2",
					time:"2016-08-01 16:15:10",
					title:"标题",
					content:"正文"
				},{
					nick:"昵称3",
					time:"2016-08-01 16:15:10",
					title:"标题",
					content:"正文"
				},{
					nick:"昵称4",
					time:"2016-08-01 16:15:10",
					title:"标题",
					content:"正文"
				},{
					nick:"昵称5",
					time:"2016-08-01 16:15:10",
					title:"标题",
					content:"正文"
				},{
					nick:"昵称6",
					time:"2016-08-01 16:15:10",
					title:"标题",
					content:"正文"
				},{
					nick:"昵称7",
					time:"2016-08-01 16:15:10",
					title:"标题",
					content:"正文"
				}
			],
			pages:0,
			currentpage:1,
			pagesize:2
		}
	},
	created: function () {

	},
	ready:function(){
		this.pages = Math.ceil(this.datas.length / this.pagesize)
	},
	methods:{
		previous(){
			this.currentpage--
		},
		next(){
			this.currentpage++
		},
		gotopage(page){
			this.currentpage = page+1
		}
	}
}

</script>
	
<style scoped>
	.paging{
		overflow: hidden;
	}
	.left{
		float: left;
	}
	.btn{
		display: block;
		width: 150px;
		height: 50px;
		line-height: 50px;
		background: #ddd;
		text-align: center;
	}
	.item{
		padding: 20px;
		border-bottom: 1px solid #DDD;
	}
	.header{
		width: 60px;
		height: 60px;
	}
	.user-info{
		margin-left: 80px;

	}
	.nick,.time{
		height: 30px;
		line-height: 30px;
	}
	.pagination{
		height: 50px;
		line-height: 50px;
	}
	.page-node{
		display: inline-block;
		width: 20px;
		line-height: 20px;
		margin-left: 10px;
		margin-right: 10px;
		text-align: center;
		/*background: #ddd;*/
	}
	.selected{
		background: #ddd;
	}
</style>