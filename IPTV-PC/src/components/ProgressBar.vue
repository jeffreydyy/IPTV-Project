<template>
  <div id="content">
    <div class="progressBar">
      <img src="@/../public/images/img_animate.jpg" :style="{left:progressLeft}">
      <b class="progress" :style="{width:progressWidth}"></b>
    </div>
    <div class="progressBarText">
      <p v-text="progressWidth"></p>
      <span>业务开通中，请稍候<b v-text="time"></b>s’... ...</span>
    </div>
    
  </div>
</template>



<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      time: 8,
      count: 0,
      progressLeft: "",
      progressWidth: ""
    };
  },
  methods: {
    loading() {
      var timer = setInterval(() => {
        this.count++;
        this.progressWidth = this.count + "%";
        this.progressLeft = this.count + "%";
        if (parseInt(this.progressWidth) == 100) {
          clearInterval(timer);
        }
      }, 80);
    },
    timeDown(){
      var timer2 = setInterval(()=>{
          this.time--;
          if(this.time==0){
            clearInterval(timer2);
          }
      },1000)
    }
  },
  computed: {},
  mounted() {
    this.loading();
    this.timeDown();
  }
};
</script>

<style scoped>
</style>
