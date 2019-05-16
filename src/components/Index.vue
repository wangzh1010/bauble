<template>
    <div class="main">
        <div class="left-nav">
            <ul>
                <li>
                    <router-link :to="{name:'Book'}">翻书效果</router-link>
                </li>
                <li>
                    <router-link :to="{name:'Drag'}">图片拖拽</router-link>
                </li>
                <li>
                    <router-link :to="{name:'Accordion'}">折叠面板</router-link>
                </li>
                <li>
                    <router-link :to="{name:'Zoom'}">放大镜</router-link>
                </li>
                <li>
                    <router-link :to="{name:'Flop'}">例子</router-link>
                </li>
            </ul>
        </div>
        <div class="right-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<style type="text/css">
    .left-nav{
        width: 200px;
        float: left;
        font-size: 14px;
        background-color: #ffffff;border: 1px solid #e6e6e6;
        margin-top: 20px;
    }
    .left-nav ul li{
        height: 40px;
        line-height: 40px;

    }
    .left-nav ul li a{
        display: block;
        padding-left: 50px;
    }
    .left-nav ul li .current{
        background-color: #3399ff;
        color: #ffffff;
    }
    .right-content{
        float: right;width: 973px;border: 1px solid #e6e6e6;
        background-color: #ffffff;
        margin-top: 20px;
        padding: 20px 30px;
    }
</style>
