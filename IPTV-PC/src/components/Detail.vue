<template>
  <div id="content">
    <div class="mask" v-show="maskShow">
      <div class="popup">
        <div class="popupInfo">
          <img src="@/../public/images/img_icon_05.png">
          <h1>兑换生效设备号</h1>
          <p v-text="this.$store.state.address" :title="this.$store.state.address"></p>
          <i>（可在首页更换兑换设备号）</i>
        </div>
        <div class="verification">
          <h1>短信支付验证</h1>
          <input type="text">
          <input
            type="button"
            v-model="verificationText"
            :class="{isAsh:isDisabled}"
            @click="countDown()"
          >
          <span v-show="verificationShow">验证码有误，请填写正确验证码。</span>
          <div class="exchangeBtm" :class="{exchangeBtmActive:exchangeBtmShow}">
            <a href="#">确定兑换</a>
          </div>
        </div>
      </div>
      <div class="popupClose" @click="handleClickPopupClose()">
        <img src="@/../public/images/img_icon_close.png">
      </div>
    </div>

    <div class="detailInfoHead">
      <div class="detailInfoHead-L">
        <img :src="ImgUrl">
      </div>
      <div class="detailInfoHead-R">
        <p class="detailInfoHeadTitle" v-text="Title"></p>
        <p class="detailInfoHeadPrice">
          <span v-text="Price"></span>
          <b>积分</b>
        </p>
        <div class="exchangeQuantity">
          <p class="exchangeQuantity-L">兑换数量:</p>
          <div class="exchangeQuantity-R">
            <span :class="{minLimit:exchangeNum==1}" @click="subNum()">-</span>
            <input v-model="exchangeNum" type="number" @input="changeNum">
            <span @click="addNum()">+</span>
          </div>
        </div>
        <div class="exchangeIntegral">
          <div class="exchangeIntegral-L">
            <p>
              <b>所需积分:</b>
              <span v-text="TotalAmount"></span>
            </p>
            <p>
              <b>当前余额:</b>
              <span v-text="userIntegral"></span>
            </p>
          </div>
          <div class="exchangeIntegral-R">
            <a :class="{isAsh:TotalAmount>userIntegral}" @click="exchangeIntegral()">确认兑换</a>
          </div>
        </div>
      </div>
    </div>
    <div class="detailInfoMain">
      <div class="detailMailTitle">
        <div class="detailMailTitleTop">
          <i class="triangle_border_right"></i>
          <p>商品详情</p>
        </div>
        <div class="detailMailTitleCenter">
          <p v-text="Content"></p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Detail",
  data() {
    return {
      ImgUrl: "",
      Title: "",
      Price: "",
      Content: "",
      exchangeNum: 1,
      userIntegral: 50000,
      goodsList: [
        {
          id: 1,
          imgUrl: "./images/img_goods_01.jpg",
          title: "7日高清电影包",
          price: "28000",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        },
        {
          id: 2,
          imgUrl: "./images/img_goods_02.jpg",
          title: "高清电影包",
          price: "30000",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        },
        {
          id: 3,
          imgUrl: "./images/img_goods_03.jpg",
          title: "7日高清电影包",
          price: "28000",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        }
      ],
      maskShow: false,
      verificationShow: true,
      verificationText: "获取",
      isDisabled: false,
      exchangeBtmShow: false
    };
  },
  methods: {
    chooseData() {
      for (let i in this.goodsList) {
        if (this.goodsList[i].id == this.$route.params.id) {
          this.ImgUrl = this.goodsList[i].imgUrl;
          this.Title = this.goodsList[i].title;
          this.Price = this.goodsList[i].price;
          this.Content = this.goodsList[i].content;
        }
      }
    },
    changeNum() {
      this.exchangeNum.length == 0 ||
      !parseInt(this.exchangeNum) ||
      this.exchangeNum <= 0
        ? (this.exchangeNum = 1)
        : "";
    },
    addNum() {
      this.exchangeNum++;
    },
    subNum: function() {
      if (this.exchangeNum > 1) {
        this.exchangeNum--;
      }
    },
    exchangeIntegral() {
      if (this.TotalAmount < this.userIntegral) {
        this.maskShow = true;
      }
    },
    countDown() {
      const TIME_COUNT = 60;
      if (!this.isDisabled) {
        this.isDisabled = !this.isDisabled;
        this.verificationText = TIME_COUNT + "s";
        var timer = setInterval(() => {
          this.verificationText = parseInt(this.verificationText);
          this.verificationText--;
          this.verificationText = this.verificationText + "s";
          if (this.verificationText <= 0) {
            clearInterval(timer);
            this.isDisabled = !this.isDisabled;
            this.verificationText = "获取";
          }
        }, 1000);
      }
    },
    handleClickPopupClose(){
        this.maskShow = !this.maskShow;
    }
  },
  computed: {
    TotalAmount() {
      return parseInt(this.exchangeNum) > 0
        ? this.Price * this.exchangeNum
        : this.Price;
    }
  },
  mounted() {
    this.chooseData();
  }
};
</script>

<style scoped>
</style>
