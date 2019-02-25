<template>
<div>
    <div class="spDetail">
        <div class="spImg">
            <i><img :src="ImgUrl" alt=""></i>
            <div class="spIfo">
                <em v-text="Title"></em>
                <span><b v-text="Price"></b>积分</span>
            </div>
        </div>

        <div class="spdetail">
            <div class="detailTlt"><span>商品详情</span></div>
            <div class="detailTxt">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed doLorem ipsum dolor si
                t amet, consectetur adipiscing elit, sed doLorem ipsum dolor s
                it amet, consectetur a elit, sed doLorem ipsum dolor sit amet, co
                nsectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur ad
                ipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, con
                sectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consecte
                tur adipiscing elit, sed do</div>
        </div>

        <div class="spinfoBox">
            <div class="infoNum">
                <em>兑换数量：</em>  
                <ul> 
                    <li>
                        <button @click="sub()" :class="{on:spCount<2}">-</button> 
                        <input  v-model="spCount" type="number">
                        <button @click="add()">+</button> 
                    </li>
                </ul>   
            </div>
 
            <div class="infoCode">
                <em>所需积分：</em>  
                <span v-text="TotalAll"></span>  
            </div>

            <div class="infoCash">
                <em>积分余额：<strong v-text="infoCash"></strong></em>  
                <span :class="{on:infoCash>TotalAll}">确认兑换</span>  
            </div>
        </div>
    </div>

    <home-mess></home-mess>
</div>
</template>
            
<script>  
import HomeMess from '@/components/messbox/messbox'
export default { 
    name: 'detail',
    components:{ 
        HomeMess
    },
    data() {
      return { 
        ImgUrl: "",
        Title: "",
        Price: "",
        Content:'',
        spCount: 1, 
        total:0,    
        infoCash: 50000,  
        spinfo: [{
          id: 1,
          imgUrl: "./images/sp1.jpg",
          title: "7日高清电影包",
          price: "28000",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        },
        {
          id: 2,
          imgUrl: "./images/sp2.jpg",
          title: "高清电影包",
          price: "30000",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        },
        {
          id: 3,
          imgUrl: "./images/sp1.jpg",
          title: "7日高清电影包",
          price: "28000",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        }],   
      }
    },  
    methods:{
        chooseData() {
            for (let i in this.spinfo) {
                if (this.spinfo[i].id == this.$route.params.id) {
                this.ImgUrl = this.spinfo[i].imgUrl;
                this.Title = this.spinfo[i].title;
                this.Price = this.spinfo[i].price;
                this.Content = this.spinfo[i].content;
                }
            }
        }, 
        //相减
        sub:function () {
            if (this.spCount > 1) {
                this.spCount--;
            }
        },
        //相加
        add:function () {
            this.spCount++; 
        } 
    }, 
    computed: {
        TotalAll() {
           return parseInt(this.spCount) > 0
            ? this.Price * parseInt(this.spCount)
            : this.Price;
        }
    },
    mounted(){
        this.chooseData();
    }
 } 
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>   
</style>