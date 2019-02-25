<template>
    <div class="userinfo">   
        <ul class="infoLi">
            <li><router-link to="www.baidu.com">
                <i><img src="@/../public/images/icon3.png"></i>
                <em><span>181****4441</span></em>
            </router-link></li>

           <li><router-link to="www.baidu.com">
                <i><img src="@/../public/images/icon1.png"></i>
                <em><span>1441</span>积分</em> 
            </router-link></li>
        </ul>

        <div class="userAddress">
            <el-select v-model="userInfo">
                <el-option
                v-for="item in cities"
                :key="item.value" 
                :value="item.value"> 
                </el-option>
            </el-select> 
        </div>
 

        
    </div> 
</template>

<script> 
export default {
    name: 'userinfo',  
    data() {
      return {
        cities: [{
          value: '建业小区 1-2-404 smd213546418111111111111111111111111111213', 
        }, {
          value: '建业小区 2-2-304建业小建业小建业小建业小建业小建业小建业小建业小建业小smd213546418', 
        }, {
          value: '建业小区 3-2-204 smd213546418', 
        }, {
          value: '建业小区 4-2-104 smd213546418', 
        }],
        userInfo: ''
      }
    },
    mounted() {
        this.userInfo = this.cities[0].value
    }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>   
</style>
