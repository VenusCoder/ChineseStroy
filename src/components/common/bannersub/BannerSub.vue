<template>
 <div class="demo-image__placeholder">
    <div class="block">
     
      <el-image :src="bannersubs.bannersub" alt=""></el-image>
    </div>
    
  </div>
 
</template>

<script>
  import {getbannersub} from '../../../network/poetry'
  import {reactive} from 'vue'
export default {

setup() {
  let bannersubs= reactive({
    bannersub:''
     
  },

  getbannersub().then(res=> {
  console.log(res.data.data[0].bannersubName[0])
    bannersubs.bannersub=res.data.data[0].bannersubName[0]
      
  }))

  return {
    bannersubs,
  }

}
}
</script>

<style>

</style>