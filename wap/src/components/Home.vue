  <template>
    <div>
        <home-banner></home-banner> 
        <!-- <home-login></home-login> -->
        <home-info></home-info>
        <home-list></home-list>
        <home-mess></home-mess>

        <div style="color: #ccc;">——  哟！触底了  ——</div>
    </div>
  </template>

<script>
import HomeBanner from '@/components/banner/banner' 
import HomeLogin from '@/components/login/login'
import HomeInfo from '@/components/login/userinfo'
import HomeList from '@/components/splist/splist'
import HomeMess from '@/components/messbox/messbox'
export default {
  name: 'Home',
  components:{
    HomeBanner, 
    HomeLogin,
    HomeInfo,
    HomeList,
    HomeMess
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
</style>
