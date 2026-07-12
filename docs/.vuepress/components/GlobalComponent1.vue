<template>
    <div>
    
    <!-- <button @click="showElement = !showElement">切换显示/隐藏</button> -->
    <!-- <div class="bdtip"  style="font-size:80%;" v-show="isDivVisible"> -->
    <!-- <div class="bdtip"  style="font-size:80%;" v-show="showElement">  -->
            <div class="bdtip">
            <p style="color: rgb(195, 0, 13);font-weight: bold;margin-top: 3px;">需知</p>
                <ul v-show="isDivVisible">
                    <li>携程商旅问题找周冬丽</li>      
                    <li>IT问题可优先企业微信联系IT Hotline反馈</li>        
                    <li>王微雅：域账号/邮箱/加密软件/FTP/SVN问题</li>
                    <li>徐玉峰：打印机/域名/服务器配置等</li>
                    <li>龚丽：OA/企业微信，戴贤停：OA/PLM，张贞：K3</li>
                    <li>WPS激活和软件授权问题联系肖金玲</li>
                    <li>C1-8F、9F、19F、22F、24F、25F都可用以下WIFI账号密码</li>
                       <li style="margin-left:30px">账号：UBT        密码：U2024zynet!#</li>
                       <li style="margin-left:30px">账号：UBT-Robot  密码：U2024zynet!#</li>
                       <li style="margin-left:30px">账号：UBT-Guest  密码：U2024zynet!#</li>
                       <li style="margin-left:30px">账号：UBT-Users  密码：U2024zynet!#</li>
                       <li style="margin-left:30px">账号：UBT-Mobile 密码：U2024zynet!#</li>
                    <li><a href="/guide/" style="color:blue">常见问题</a></li>
              </ul>
                </div>
        </div>
    <!-- </div> -->
    
    </template>
    
    <script>
      export default {
      // data() {
      //   return {
      //     showElement: true // 控制元素显示和隐藏的初始值
      //   };
      // }
    
        data() {
        return {
          isDivVisible: true
        };
      },
      methods: {
        toggleDiv() {
          this.isDivVisible = !this.isDivVisible;
        }
      }
    
    
    }
    </script>
    
    <style>
        .bdtip{
            /* border-left: 5px #86cc67 solid; */
        border-left: 5px rgb(195, 0, 13) solid;
          /* border-left: 5px #1795bb solid; */
            padding-left: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
            background-color: #F4F4F3;
        }

    
    
    
    </style>