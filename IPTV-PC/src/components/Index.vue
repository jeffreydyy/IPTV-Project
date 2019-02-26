<template>
  <div id="content">
    <div class="banner">
      <img src="@/../public/images/img_banner.jpg">
      <div class="citySelectBox">
        <div class="citySelect" @click="handleClickSelect">
          <input type="text" v-model="selectCity" readonly>
          <span class="selectArrow">
            <img src="@/../public/images/img_icon_arrow.png">
          </span>
        </div>

        <ul class="citySelectDown" v-show="showSelcet">
          <li
            v-for="(item,index) in cities"
            :key="index"
            v-text="item"
            :class="{active:isCityActive==index}"
            @click="handleClickSelectDown(item,index)"
          ></li>
        </ul>
      </div>
    </div>

    <div class="indexLogin">
      <img src="@/../public/images/img_icon_01.png">
      <a href="https://www.baidu.com/" target="_blank">登录</a>
    </div>

    <div class="hasLogin">
      <div class="userTele">
        <img src="@/../public/images/img_icon_01.png">
        <span v-text="userTele"></span>
      </div>

      <div class="userIntegral">
        <img src="@/../public/images/img_icon_02.png">
        <span v-text="userIntegral"></span>
        <b>积分</b>
      </div>

      <div class="userAddress">
        <div class="addressSelect" @click="handleAddressSelect">
          <i>
            <img src="@/../public/images/img_icon_04.png">
          </i>
          <input type="text" v-model="selectAddress" readonly disabled :title="selectAddress">
          <span class="selectArrow">
            <img src="@/../public/images/img_icon_arrow.png">
          </span>
        </div>
        <ul class="addressSelectDown" v-show="showAddressSelcet">
          <li
            v-for="(item,index) in addresses"
            :key="index"
            :title="item"
            v-text="item"
            :class="{active:isAddressActive==index}"
            @click="handleClickSelectAddressDown(item,index)"
          ></li>
        </ul>
      </div>
    </div>

    <div class="goodsList">
      <ul>
        <router-link tag="li" v-for="item in goodsList" :key="item.id" :to="'detail/'+item.id">
          <img :src="item.imgUrl">
          <div class="goodsInfo">
            <div class="goods-L">
              <p class="goodsTitle" v-text="item.title"></p>
              <p class="goodsPrice">
                <span v-text="item.price"></span>
                <b>积分</b>
              </p>
            </div>
            <div class="goods-R">
              <span>立即兑换</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>

    <div class="btmBar">—— 哟！触底了 ——</div>
  </div>
</template>



<script>
export default {
  name: "Index",
  data() {
    return {
      selectCity: "",
      showSelcet: false,
      isCityActive: 0,
      cities: [
        "江苏",
        "上海",
        "北京",
        "江苏",
        "上海",
        "北京",
        "江苏",
        "上海",
        "北京"
      ],
      userTele: "181****6546",
      userIntegral: 5000,
      selectAddress: '',
      showAddressSelcet: false,
      isAddressActive: '',
      addresses: [
        "建业小区 1-2-304  smd213546418smd213546418",
        "建业小区 1-2-304  smd213546419",
        "建业小区 1-2-304  smd213546420",
        "建业小区 1-2-304  smd213546421"
      ],
      goodsList: [
        {
          id: 1,
          imgUrl: "./images/img_goods_01.jpg",
          title: "7日高清电影包",
          price: "28000"
        },
        {
          id: 2,
          imgUrl: "./images/img_goods_02.jpg",
          title: "高清电影包",
          price: "30000"
        },
        {
          id: 3,
          imgUrl: "./images/img_goods_03.jpg",
          title: "7日高清电影包",
          price: "28000"
        }
      ],
      Items:'',
      Items2:''
    };
  },
  methods: {
    handleClickSelect() {
      this.showSelcet = !this.showSelcet;
    },
    handleClickSelectDown(item, index) {
      this.isCityActive = index;
      this.selectCity = item;
      this.showSelcet = !this.showSelcet;
      this.Items = {item,index};
      this.$store.commit("changeCites", this.Items);      
    },
    handleAddressSelect() {
      this.showAddressSelcet = !this.showAddressSelcet;
    },
    handleClickSelectAddressDown(item, index) {
      this.isAddressActive = index;
      this.selectAddress = item;
      this.showAddressSelcet = !this.showAddressSelcet;
      this.Items2 = {item,index};
      this.$store.commit("changeAddress", this.Items2);
    }
  },
  mounted() {
    if(localStorage.city) {
      this.selectCity = localStorage.city;
      this.isCityActive = localStorage.cityIndex;
    }else{
      this.selectCity = this.cities[0];
      this.isCityActive = 0;
      this.$store.commit("initCity",this.cities[0]);   
    }
    if(localStorage.address) {
      this.selectAddress = localStorage.address;
      this.isAddressActive = localStorage.addressIndex;
    }else{
      this.selectAddress = this.addresses[0];
      this.addressIndex = 0;
      this.$store.commit("initAddress",this.addresses[0]);   
    }
  }
};
</script>

<style scoped>
</style>
