<template>
  <div class="tab">
     

  </div>
  <div class="bottom">
     
    <li > <router-link to="home">首页 </router-link>  </li>
     <li ><router-link to="home"> 明星 </router-link></li>
      <li > <router-link to="history">历史 </router-link>   </li>

       <li ><router-link to="story">故事</router-link> </li>
        <li ><router-link to="/"> 专栏</router-link></li>
   <p>Copyright ©2020-2021 中国故事网 版权所有 <span>备案号：1234567890</span></p>
  
  </div>
 
   
  
</template>

<script>
import NavBar from '../nav/NavBar.vue'
export default {


    components: {
       NavBar,
    },
  
 

}

</script>

<style lang="scss" scoped>
    .tab {
        height: 50px;
        background: url('../../../assets/img/content/底部花纹.png');
    }
    .bottom {
         display: flex;
            align-items:center;
         justify-content: space-evenly;
        width: 100%;
        background: #eee;
        height: 200px;
          ul {
      
       list-style: none;
       
      
         li {
             list-style: none;
             height: 80px;
          
         }
     }
    }

</style>>


  

