<template>
    <div>
        <div class="result" v-for="(item,index) in resultInfo" :key="index">
            <h5><img :src="item.resultImg" alt=""></h5>
            <div class="resultTitle" v-text="item.title"></div>
            <div class="resultText" v-text="item.text"></div>
            <div class="resultCont" v-text="item.content"></div>
            <div class="resultBtn"><span>返回首页</span></div>
        </div>
    </div>
</template>
            
<script>   
export default { 
    name: 'result',
    data() {
      return {   
        resultInfo: [{
          id: 1,
          resultImg: "./images/result.png",
          title: "支付成功",
          text: "",
          content:"业务正在开通中，开通成功将短信通知您，请注意查收短信。"
        },
        {
          id: 2,
          resultImg: "./images/result.png",
          title: "支付成功",
          text: "",
          content:""
        },
        {
          id: 3,
          resultImg: "./images/fail.png",
          title: "开通失败",
          text: "失败原因：***************",
          content:"所扣积分将按照原路径退回至账户中，积分退回完成将短信通知，请注意查收短信"
        }],   
      }
    },  
    methods:{
        
    }, 
    computed: {
        
    },
    mounted(){ 
    }
 } 
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>   
</style>