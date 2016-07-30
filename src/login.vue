<template>
<div>
	<div class="topbar">
		<div class="container">
			<img class="left brand" src="assets/logo-transtrat.png" />
			<div class="nav_string">登录</div>
		</div>
	</div>
	<div class="container login">
		<img class="left" src="assets/login-show.png" />
		<div class="login-form">
			<div class="login-form-header">
				使用小C帐号登录
			</div>
			<div class="login-content">
				<div class="login-info">
					帐号
				</div>
				<input type="text" v-model="account" class="" />
				<div class="login-info">
					密码
				</div>
				<input type="password" v-model="password" class="" />
				<div>
					<button class="btn" v-on:click="login">登录</button>
				</div>
			</div>
		</div>
	</div>
	<footer>
	    <p>2016 MicroChat, Inc. All rights reserved.</p>
	</footer>	
</div>
</template>

<script>
export default{
	data(){
		return {
			account:'',
			password:''
		}
	},
	created: function () {

	},
	ready:function(){

	},
	methods:{
		login:function(){
			if(this.checkparams()){
				this.$http.get('http://web.sns.movnow.com/brand_api/login_api.php?user='+this.account+'&pass='+this.password,{},{
					headers:{
						"X-Requested-With": "XMLHttpRequest"
					}
				}).then(function(response){
					console.log(response.data)
					var obj = JSON.parse(response.data)
					if(obj.error == 0){
						localStorage.setItem('token','123')
						this.$route.router.go('/home/userdata')
					}else{
						alert('帐号或者密码错误')
					}
				}, function(response){
					console.log("error")
				})
			}
			// localStorage.setItem('token','123')
			// this.$route.router.go('/home')
		},
		checkparams:function(){
			if(this.account.trim() == "" || this.account.trim().length <= 0){
				alert('帐号不能为空')
				return false
			}
			if(this.password.trim() == "" || this.password.trim().length <= 0){
				alert('密码不能为空')
				return false
			}
			return true
			// alert(this.account + '' + this.password)
		}
	}
}

</script>

<style scoped>
	html,body{
		margin: 0;
		padding: 0;
		width:100%;
	}
	.topbar{
		width:100%;
		background: #1C88D4;
		height: 50px;
		line-height: 50px;
	}
	.container{
		width: 90%;
		margin: 0 auto;
		max-width: 990px;
		min-width: 990px;
	}

	.left{
		float: left;
	}
	.nav_string{
		color: #FFF;
		margin-left: 140px;
	    font-size: 18px;
	}
	.brand{
		margin-top: 12px;
		height: 26px;
		width: 127px;
	}
	footer {
	    border-top: 1px solid #e7e8e9;
	    padding: 20px;
	}		
	footer p {
	    font-size: 12px;
	    color: #979797;
	    text-align: center;
	}	
	.login{
		margin-bottom: 80px;
		margin-top: 80px;
		zoom: 1;
		overflow: hidden;
	}
	.login-form{
		width: 430px;
	    border: 1px solid #ddd;
	    margin-left: 550px;
	}
	.login-form-header{
		height: 50px;
		line-height: 50px;
		text-align: center;
		border-bottom: 1px solid #DDD;
	}
	.login-content{
		position: relative;
		width: 335px;
		margin: 20px auto;
	}
	.login-info{
	    font-size: 16px;
	    color: #666;
	    text-align: left;
	    padding-top: 5px;
	    padding-bottom: 14px;
	}

	input{
		width: 317px;
		padding: 8px;	
		margin-bottom: 16px;
		outline: none;
	}
	.btn{
		outline: none;
		border: none;
		cursor: pointer;
		width: 135px;
		height: 50px;
		margin: 20px 100px 20px 100px;
	    background: #369f0e;
	    color: #FFF;
	}
</style>