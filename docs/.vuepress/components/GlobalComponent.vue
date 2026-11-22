<template>
<div>

<!-- <button @click="showElement = !showElement">切换显示/隐藏</button> -->
<!-- <div class="bdtip"  style="font-size:80%;" v-show="isDivVisible"> -->
<!-- <div class="bdtip"  style="font-size:80%;" v-show="showElement">  -->
        <div class="bdtip" style="font-size: 80%; line-height:20px;">
          <button @click="toggleDiv" style="float: right;" class="niceButton">{{ buttonText }}</button>
        <p style="color: rgb(195, 0, 13);font-weight: bold;margin-top: 3px;">需知:</p>
            <p style="color: rgb(195, 0, 13);font-weight: bold;margin-top: 3px;">IT帮助使用指南</p>
                <ul v-show="isDivVisible">
                    <li>先了解规则，再使用工具</li>  
                    <li>本网站汇总IT日常工作中最常被咨询的四类信息：<b>软件合规 · 合规清单 · 电脑设置 · 系统联系人</b></li>      
                    <li>涵盖网络连接、账户与密码、打印机与外设、系统更新等常规操作，按步骤说明，可对照执行。</li>
                    <li>IT问题可优先企业微信联系IT Hotline反馈</li> 
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
      isDivVisible: true,
      buttonText: 'x'
    };
  },
  methods: {
    toggleDiv() {
      this.isDivVisible = !this.isDivVisible;
      if(this.isDivVisible == true){
        this.buttonText = 'x';
      }else{
        this.buttonText = '>';
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