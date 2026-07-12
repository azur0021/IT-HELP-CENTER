<template>
    <div>
    
    <!-- <button @click="showElement = !showElement">切换显示/隐藏</button> -->
    <!-- <div class="bdtip"  style="font-size:80%;" v-show="isDivVisible"> -->
    <!-- <div class="bdtip"  style="font-size:80%;" v-show="showElement">  -->
            <div class="bdtip" style="font-size: 80%; line-height:20px; width: 50%;">
              <p style="color: rgb(195, 0, 13);font-weight: bold;margin-top: 3px;">:: add-print-new.bat
                <button @click="toggleDiv" style="float: right;" class="niceButton">{{ buttonText }}</button>
             </p>
              <div v-show="isDivVisible">
                @echo off<br />
                cmdkey /add: 10.10.91.86 /user:ubt /pass:abc.123<br />
                net use \\10.10.91.86\ipc$ "abc.123" /user:"ubt"<br />
                rundll32 printui.dll,PrintUIEntry /in /u  /q /n "\\10.10.91.86\ZSPrinter"<br />
                rundll32 printui.dll,PrintUIEntry /y /n "\\10.10.91.86\ZSPrinter"<br />
                del addkey.bat<br />
              </div>
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
          isDivVisible: false,
          buttonText: '展开'
        };
      },
      methods: {
        toggleDiv() {
          this.isDivVisible = !this.isDivVisible;
          if(this.isDivVisible == true){
            this.buttonText = 'x';
          }else{
            this.buttonText = '展开';
          }
          
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
      .niceButton{
        display: inline-block;
        padding: 5px 10px;
        font-size: 12px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color:#fff;
        /* background-color: rgb(16, 185, 214); */
        /* background-color: #1795bb; */
        background-color: #666;
        border: none;
        border-radius: 10px;
        box-shadow: 0 4px #999;
    }
    .niceButton:hover{
    /* background-color: #1795bb; */
    background-color: #666;
    /* background-color: rgb(195, 0, 13); */
    }
    .niceButton:active{
        /* background-color: #1795bb; */
        background-color: #666;
        box-shadow: 0 7px #666;
        transform:translateY(7px);
    }
    
    
    
    </style>