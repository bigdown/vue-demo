<template>
<div>
  <div class="left-menu">
    <div id="menu-header" class="menu-header">
      <img src="./assets/logo.png" class="menu-img" />
      <img src="./assets/logo-d.png" class="menu-img-small" />
    </div>
    <div id="first-menu" class="first-menu">
      <ul>
        <li class="menu-active">
          <i class="icon-service icon-service-dashboard"></i>
          <span class="menu-title">用户统计数据</span>
        </li>
        <li>
          <i class="icon-service icon-service-cvm"></i>
          <span class="menu-title">用户详情</span>
        </li>
        <li>
          <i class="icon-service icon-service-domain"></i>
          <span class="menu-title">聊天</span>
        </li>
        <li>
          <i class="icon-service icon-service-jiechi"></i>
          <span class="menu-title">部落</span>
        </li>
        <li>
          <i class="icon-service icon-service-account"></i>
          <span class="menu-title">广场</span>
        </li>
      </ul>
    </div>
  </div>
  <div id="connent" class="connent">
    <div>
      <div class="top-bar">
        <i id="icon-mc-slider" class="icon-mc-slider"></i>
        <div class="link-wrap">
          问题反馈
        </div>
        <div class="link-wrap">
          帮助中心
        </div>
        <i class="seperate-line"></i>
        <div class="link-wrap">
          域名备案
        </div>
        <i class="seperate-line"></i>
        <div class="link-wrap">
          <em class="mails-number">0</em>
          <i class="icon-mc-mail"></i>
        </div>
        <i class="seperate-line"></i>
        <div class="link-wrap account">
          <span id="account-name" class="account-name">
            <span>1664378795@qq.com</span>
            <i class="icon-mc-arrow"></i>
          </span>
          <ul class="account-ops">
            <li>账户管理</li>
            <li class="switch-account">
              账户切换
            </li>
            <li>
              退出
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
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
  }
}
      // var menuheader = document.getElementById('menu-header');
      // var firstmenu = document.getElementById('first-menu');
      // var connent = document.getElementById('connent');
      // var isopen = true;
      // var slider = document.getElementById('icon-mc-slider');
      // slider.onclick = function(){
      //   if(isopen){
      //     menuheader.firstElementChild.style.display = "none";
      //     menuheader.lastElementChild.style.display = "block";
      //     menuheader.style.width = '60px';
      //     firstmenu.style.width = '60px';
      //     connent.style.left = '60px';
      //     isopen = false;
      //   }else{
      //     menuheader.firstElementChild.style.display = "block";
      //     menuheader.lastElementChild.style.display = "none";
      //     menuheader.style.width = '180px';
      //     firstmenu.style.width = '180px';
      //     connent.style.left = '180px';
      //     isopen = true;
      //   }
      // }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body,html{
  height: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  min-width: 1200px;
  font-family: "Hiragino Sans GB","Tahoma","microsoft yahei ui","microsoft yahei","simsun";
}
li{
  list-style: none;
}
.first-menu li{
  line-height: 40px;
  cursor: pointer;
  height: 40px;
  overflow: hidden;
}
.left-menu{
  zoom: 1;
  background: #363636;
  width: 180px;
  overflow-x: hidden;
  z-index: 2;
}
.menu-header{
  height: 50px;
  overflow: hidden;
}
.menu-img-small{
  display: none;
}
.menu-img{
  height: 22px;
  margin-top: 19px;
  margin-left: 20px;
}
.menu-img-small{
  margin: 20px 0 0 20px;
}
.first-menu{
  position: absolute;
  background: #363636;
  color: #FFF;
  left: 0;
  top: 50px;
  bottom: 0;
  width: 180px;
  overflow-y: auto;
  z-index: 1;
}
.first-menu span{
  /*display: none;*/
}
.icon-service {
    width: 18px;
    margin-top: 10px;
    height: 18px;
    float: left;
    margin-left: 20px;
}
.icon-service-dashboard{
  background-image: url(./assets/v2-framework-1457580542.png);
  background-position: -69px -51px;
}
.icon-service-jiechi{
  background-image: url(./assets/v2-framework-1457580542.png);
  background-position: -21px -72px;
}
.icon-service-domain {
    background-image: url(./assets/v2-framework-1457580542.png);
    background-position: -42px -72px;
}
.icon-service-cvm {
    background-image: url(./assets/v2-framework-1457580542.png);
    background-position: -84px -72px;
}
.icon-service-account {
    background-image: url(./assets/v2-framework-1457580542.png);
    background-position: -42px -93px;
}
.icon-mc-mail {
    display: block;
    background-image: url(./assets/v2-framework-1457580542.png);
    width: 26px;
    height: 20px;
    margin-top: 16px;
    background-position: 0px -51px;
}
.icon-mc-arrow {
    width: 10px;
    margin: 18px 20px 0 0;
    height: 6px;
    float: right;
    background-image: url(./assets/v2-framework-1457580542.png);
    background-position: -124px -104px;
}
.menu-title {
    padding-left: 10px;
}
li:hover,.menu-active{
  color: #22B5E5;
}
.connent{
  position: absolute;
  left: 180px;
  top: 0px;
  bottom: 0px;
  right: 0px;
    /*transition: all .3s ease-in;*/
}
.top-bar{
    background: #f7f7f7;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #d6d6d6;
}
.icon-mc-slider{
  display: block;
  background-image: url(./assets/v2-framework-1457580542.png);
  width: 20px;
  height: 14px;
  margin-top: 18px;
  background-position: -57px -114px;
  float: left;
  cursor: pointer;
}
.icon-mc-right {
    width: 6px;
    margin: 18px 20px 0 0;
    height: 10px;
    background-image: url(./assets/v2-framework-1457580542.png);
    position: absolute;
    right: -8px;
    top: 44px;
    background-position: -142px 0px;
}
.right{
  float: right;
}
.link-wrap{
    position: relative;
    float: right;
    height: 100%;
    padding: 0 18px;  
    font-size: 14px;
    color: #000;
    display: block;   
}
.account-name {
    text-align: right;
    font-size: 14px;
    padding-right: 20px;
    max-width: 120px;
    min-width: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 20px;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: sub;
    display: inline-block;
    cursor: pointer;
}
.account-name .icon-mc-arrow {
    position: absolute;
    top: 5px;
    right: -6px;
}
.mails-number {
    position: absolute;
    color: #fff;
    background: #ed711f;
    height: 16px;
    top: 26px;
    line-height: 16px;
    padding: 0 4px;
    font-size: 12px;
    left: 35px;
}
em, i, b {
    font-style: normal;
    font-weight: normal;
}
.seperate-line {
    float: right;
    border-right: 1px solid #ccc;
    height: 12px;
    margin-top: 20px;
    vertical-align: middle;
}
.account-ops {
    display: none;
    position: absolute;
    border: 1px solid #d9d9d9;
    border-top: none;
    background: #FFF;
    width: 100%;
    padding: 10px 0 12px 0;
    top: 50px;
    left: -1px;
    font-size: 14px;
    z-index: 1;
}
.account-ops li {
  padding-left: 10px;
    height: 38px;
    line-height: 38px;
}
.account:hover{
  background: #FFF;
  border-left: 1px solid #D9D9D9;
  border-right: 1px solid #D9D9D9;
}
.account:hover .account-ops{
  display: block;
}

</style>