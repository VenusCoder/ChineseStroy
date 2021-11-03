<template>
  <div>
    <banner :banner="banners.banner.bannerName" />
    <explain />

    <div class="contented">
      <recommond :poems="poem.allData"  />
    </div>
    
    <news />
    <describe />
    
  </div>
</template>

<script>
// import NavBar from '../../components/common/nav/NavBar.vue'
import Banner from "../../components/common/banner/Banner.vue";
import Explain from "../../components/common/explain/Explain.vue";
import Recommond from "../../components/common/recommond/Recommond.vue";
import News from "../../components/content/news/News.vue";
import Describe from "../../components/content/describe/Describe.vue";

import { getBanner } from "../../network/home";
//  import { getPoetry } from "../../network/poetry";
import { getCenter } from "../../network/center";
import { reactive } from "vue";
import AuthorList from "../../components/content/AuthorList.vue";
export default {
  components: {
    AuthorList,
    //   NavBar,
    Banner,
    Explain,
    Recommond,
    News,
    Describe,
   
  },
  setup() {
    let banners = reactive({
      navData: {
        navName: [],
      },
      banner: {
        bannerName: [],
      },
    });
    let poem = reactive({
      
      allData:[]
        // idd:'',
      
    });
    

    

    //请求推荐数据
    let getConter = (type) => {
      getCenter(type, 2).then((res) => {
        
        console.log(res.data.data);
        poem.allData=res.data.data
      //   console.log(poem.allData)
      //  poem.poemer.pomerName = res.data.data;
      //   poem.poemer.pomerName = res.data.data;
        // poem.idd=res.data.data
      });
    };

     getConter("poetry");
    // getConter("story");
   
  

    // getCenter(type, 2).then((res) => {
    //   console.log(res);
    //   console.log(res.data.data);
    //   poem.poemer.pomerName = res.data.data;
    // });

    // const getData =() => {
    //       getBanner().then(res=>{
    //         console.log(res)
    //     //    banners.bannerData=res
    //     })
    // }
    //    getBanner().then(res=>{
    //         console.log(res.data.data[0])
    //        banners.navData=res.data.data[0]

    //     })

    // onMounted(()=> {
    //      getBanner().then(res=>{
    //         console.log(res.data.data)
    //     //    banners.bannerData=res
    //     })

    // })
    //获取主导航栏数据
    // getNavs().then(res=>{
    //     console.log(res.data)
    //     banners.navData= res.data.data[0]

    // })

    //获取banner数据
    getBanner().then((res) => {
      // console.log(res.data.data)
      banners.banner = res.data.data[0];
    });

    return {
      banners,
      poem,
      getConter,
      
      // tabclick,
     
   
      
    };
  },
};
</script>

<style lang="scss" scoped>
.contented {
  height: 500px;
  display: flex;
  flex-flow: nowrap row;
  overflow: hidden;
}
</style>