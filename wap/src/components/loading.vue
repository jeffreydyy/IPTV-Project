<template>
    <div>
      <div class="loadingBox">
        <div class="progress">
					<div class="progress-bar">
						<span></span>
					</div>
          <div class="progress-parcent"><i v-text="parpcent"></i>%</div>
          <div class="parcent-Time">业务开通中，请稍后...</div> 
				</div>  
      </div>
    </div>
    
</template>
            
<script>   
export default { 
    name: 'loading', 
    data() {
      return{
        parpcent:'0',
      }
    },
    methods: {
      loadingDo(){ 
          this.parpcent++; 
          if(this.parpcent<100){          
            setTimeout(() => {
              this.loadingDo() 
            }, 70);
          }           
      }
    },
    mounted() {
      this.loadingDo();
    }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>   
</style>