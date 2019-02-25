<template>
    <transition name="fade">
        <!-- <div class="homeDialog" v-if="!messShow">
            <div class="messBox" v-for="(item,index) in messInfo" :key="index" >
                <i class="messImg"><img :src="messInfo[0].messImg" alt=""></i>
                <h5 v-text="messInfo[0].messTlt"></h5>
                <span v-text="messInfo[0].messText"></span>
                <div @click="messShow = !messShow" class="messClose">×</div> 
            </div>
        </div>   -->
        <div class="homeDialog" v-if="messShow">
            <div class="messDetil" v-for="(item,index) in messInfo" :key="index" >
                <i class="messDetilImg"><img :src="messInfo[2].messImg" alt=""></i>
                <h5>兑换生效设备号</h5>
                <span v-text="messInfo[2].messText"></span>
                <q>（可在首页更换兑换设备号）</q>
                <h5>短信支付验证</h5>
                <div class="smsDetail">
                    <input v-model="btnShowOn" type="tel" maxlength="6" placeholder="请输入验证码"> 
                    <button @click="countDown" :class="{on: !smsCanClick}">{{smsCont}}</button>
                </div>
                <div v-show="btnDetailOn" class="smsTips">验证码有误，请填写正确验证码。</div>

                <div class="btnDetail">
                    <span :class="{on: btnDetailOn}">确定兑换</span>
                </div>
 
                <div @click="messShow = !messShow" class="messClose">×</div> 
            </div>
        </div> 
    </transition>
</template>

<script>  
export default { 
    name: 'messbox',
    data() {
      return { 
        messInfo: [{
            id: '10001', 
            messImg: './images/icon4.png',
            messTlt: '无绑定设备号',
            messText: '手机号未查询到绑定的IPTV设备号， 请拨打10000号绑定IPTV设备号。', 
            },{
                id: '10002', 
                messImg: './images/icon5.png',
                messTlt: '无关联账号查询错误',
                messText: '手机号未查询到绑定的IPTV设备号， 请拨打10000号绑定IPTV设备号。', 
            },{
                id: '10002', 
                messImg: './images/icon6.png',
                messTlt: '无关联账号查询错误',
                messText: '建业小区 1-2-304  smd213546418', 
        }],  
        btnShowOn : '',
        btnDetailOn: false,
        messShow: true,
        smsCanClick: true, 
        smsCont: '获 取',
        smsTime: 60,
      }
    },
    methods: {
        countDown () {
            if (!this.smsCanClick) return   
                this.smsCanClick = false
                this.smsCont = this.smsTime + 's'
                let clock = window.setInterval(() => {
                    this.smsTime--
                    this.smsCont = this.smsTime + 's'
                    if (this.smsTime < 0) {
                        window.clearInterval(clock)
                        this.smsCont = '再获取'
                        this.smsTime = 60
                        this.smsCanClick = true  
                    }
                },1000)
        }, 
    },
    watch: {
      btnShowOn(val) {
          val.length > 0 ? this.btnDetailOn = true : this.btnDetailOn = false; 
      }
    }
    
}
 
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>   
</style>