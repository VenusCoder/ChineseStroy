<template>
<div id="app">
   <nav-bar />
 <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
<tabbar />
</div>
 
</template>

<script>
import NavBar from './components/common/nav/NavBar.vue'
import Tabbar from "./components/common/tabbar/Tabbar.vue";


export default {
  name: 'App',
  components: {
   NavBar,
 Tabbar
    }
}
</script>

<style>

</style>
