<template>
<div>

<!-- <button @click="showElement = !showElement">切换显示/隐藏</button> -->
<!-- <div class="bdtip"  style="font-size:80%;" v-show="isDivVisible"> -->
<!-- <div class="bdtip"  style="font-size:80%;" v-show="showElement">  -->
        <div class="bdtip" style="font-size: 80%; line-height:20px;">
          <button @click="toggleDiv" style="float: right;" class="niceButton">{{ buttonText }}</button>
        <p style="color: rgb(195, 0, 13);font-weight: bold;margin-top: 3px;">需知:</p>
	        <ul v-show="isDivVisible">
                <li>携程商旅问题找周冬丽</li>      
                <li>IT问题可优先企业微信联系IT Hotline反馈</li>        
                <li>王微雅：域账号/邮箱/加密软件/FTP/SVN问题</li>
                <li>徐玉峰：打印机/域名/服务器配置等</li>
                <li>龚丽：OA/企业微信，戴贤停：OA/PLM，张贞：K3</li>
                <li>WPS激活和软件授权问题联系肖金玲</li>
				        <li><a href="/guide/" style="color:blue;font-weight:bold;">常见问题</a></li>
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