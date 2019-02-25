<template>
  <div class="banner">   
    <img src="@/../public/images/banner.jpg">
    <div class="bannerSelect">
        <el-select v-model="city" size="mini" placeholder="上海">
            <el-option
            v-for="(item,index) in options"
            :key="index" 
            :value="item.label">
            </el-option>
        </el-select>
    </div>
  </div>
</template>

<script> 
export default {
    name: 'banner', 
    data() {
      return {
        options: [{ 
          label: '上海'
        }, { 
          label: '江苏'
        }, { 
          label: '北京'
        }, { 
          label: '南京'
        }, { 
          label: '苏州'
        }],
        city: ''
      }
    }

} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>   
</style>
