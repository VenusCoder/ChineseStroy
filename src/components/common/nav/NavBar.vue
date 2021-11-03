<template>
  <div class="nav">
    <div class="nav-img">
      <span><img src="../../../assets/img/icon/logo.png" alt="" /></span>
    </div>
    <div class="nav-tab">
      <ul>
        <li
          v-for="(item, index) in banners.navData.navName"
          :key="index"
          @click="tiaozhuan(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
  <!-- <el-row >

    <span>22</span>
    <el-col :span="2" v-for="(item,index) in navbar" :key="index">
      <div class="grid-content bg-purple-dark" >{{item}}</div>
    </el-col>
  </el-row> -->
</template>

<script>
import { getNavs } from "../../../network/home";
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  // props: {
  //   navbar: {
  //     type:Array
  //   }
  // },
  setup() {
    let banners = reactive({
      navData: {
        navName: [],
      },
      banner: {
        bannerName: [],
      },
    })

    //获取主导航栏数据
    getNavs().then((res) => {
      console.log(res.data.data[0]);
      banners.navData = res.data.data[0];
    })
 //实例化路由
    const router = useRouter();
    const tiaozhuan = (index)=> {
      
      switch(index) {
        case 0:
        router.push('/home')
        break;
        case 1:
            router.push('/poetry')
      }
      

    }
    

    return {
      banners,
      tiaozhuan,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-flow: row nowrap;
  background: url("../../../assets/img/bg/bg.png");
  // justify-content: start;
  .nav-img {
    flex: 1;
  }
  .nav-tab {
    flex: 7;

    ul {
      display: flex;
      list-style: none;
      justify-content: space-evenly;
      li {
        flex: 1;
      }
    }
  }
}
</style>