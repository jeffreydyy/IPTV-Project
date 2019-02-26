<template>
  <div id="content">
      <div class="openSuccess">
          <img src="@/../public/images/img_result_01.jpg">
          <h1>开通成功</h1>
          <router-link to="/">
            <span class="indexBack">返回首页</span>
          </router-link>
      </div>
      <div class="openFail">
          <img src="@/../public/images/img_result_02.jpg">
          <h1>开通失败</h1>
          <b>失败原因：***************</b>
          <i>所扣积分将按照原路径退回至账户中，积分退回完成将短信通知，请注意查收短信</i>
          <router-link to="/">
            <span class="indexBack">返回首页</span>
          </router-link>        
      </div>
      <div class="paySuccess">
          <img src="@/../public/images/img_result_01.jpg">
          <h1>支付成功</h1>
          <i>业务正在开通中，<br />开通成功将短信通知您，请注意查收短信。</i>
          <router-link to="/">
            <span class="indexBack">返回首页</span>
          </router-link>             
      </div>
  </div>
</template>



<script>
export default {
  name: "State",
  data() {
    return {
    };
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style scoped>
</style>
