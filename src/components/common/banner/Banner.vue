<template>
<el-carousel  height="700px">
    <el-carousel-item v-for="(item,index) in banner" :key="index">
     <img :src="item" alt="" srcset="">
    </el-carousel-item>
  </el-carousel>

<!-- 
 <el-carousel :interval="4000" type="card" height="700px">
    <el-carousel-item v-for="(item,index) in banner" :key="index">
    
      <img :src="item" alt="" srcset="">
    </el-carousel-item>
  </el-carousel> -->

  
 

<!-- <el-row >

    <span>22</span>
    <el-col :span="2" v-for="(item,index) in navbar" :key="index">
      <div class="grid-content bg-purple-dark" >{{item}}</div>
    </el-col>
  </el-row> -->
 
</template>

<script>
export default {
  props: {
    navbar: {
      type:Array
    },
    banner: {
      type: Array
    }
  }

};
</script>

<style lang="scss" scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>