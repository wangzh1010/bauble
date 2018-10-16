<template>
    <div id="app">
        <header>
            <span class="title" href="javascript:;">iView</span>
        </header>
        <nav>
            <div class="nav-bar">
                <ul>
                    <li>
                        <router-link :to="{name:'Index'}">Index</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'Foo'}">Foo</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'Case'}">Case</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style>
header {
    position: relative;
    width: 100%;
    height: 49px;
    line-height: 49px;
    padding: 0 10px;
    background-color: #3399ff;
}
header .title{
    display: block;
    color: #ffffff;
    margin: 0 30%;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
nav{
    width: 100%;
    margin: 0px auto;
    background-color: #f8f8f9;
    border-bottom: 1px solid #e6e6e6;
}
nav .nav-bar{
    width: 1190px;
    height: 48px;
    margin: 0px auto;
}
nav ul li{
    float: left;
    margin-left: 20px;
}
nav ul li a{
    display: block;
    min-width: 60px;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    text-align: center;
    color: #696969;
}
nav ul li a:hover{
    color: #3399ff;
    background-color: #e6e6e6;
    border-bottom: 1px solid #3399ff;
}
.main{
    width: 1190px;
    margin: 0px auto;
}
.main:after{
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
}
</style>
