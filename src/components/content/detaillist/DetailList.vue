<template>
  <div class="contented" v-for="(item,index) in detailcontent" :key="index"> 
      <h2>{{item.title}}</h2>
      <p v-html="item.content"></p>
      <p  v-html="item.zhushi"></p>
       <p  v-html="item.jieshi"></p>
  </div>

</template>

<script>
export default {
    props: {
        detailcontent: Array,
    }

}
</script>

<style>

</style>