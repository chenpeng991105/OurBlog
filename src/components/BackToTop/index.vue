<template>
  <div id="back-to-top" ref="backToTop" @click="backToTop">
    <div class="inner">
      <i class="iconfont icon-top"></i>
    </div>
  </div>
</template>

<script>
import scroll from "@/utils/scroll";
export default {
  mounted() {
    this.showBackToTop()
  },
  methods: {
    showBackToTop(){
      const backToTop = this.$refs.backToTop
      document.addEventListener('scroll', function (){
        let top = document.documentElement.scrollTop || document.body.scrollTop
        if(top > 500){
          backToTop.style.display = 'block'
        }else{
          backToTop.style.display = 'none'
        }
      })
    },
    backToTop(){
      scroll(0)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#back-to-top{
  display: none;
  .inner{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.09);
    color: #2d8cf0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 60px;
    right: 20px;
    cursor: pointer;
    transition: box-shadow .2s;
    .icon-top{
      font-size: 10px;
    }
  }
  .inner:hover{
    box-shadow: 0 0 10px 5px rgba(30,144,255, .1);
  }
}
@media screen and (max-width: 1024px) {
  #back-to-top{
    .inner{
      display: none;
    }
  }
}
</style>
