<template>
  <banner-sub />
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
        <el-col :span="3">
          <el-menu
            ref="menus"
           :default-openeds="details.selectedIndexs"
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#f3f3f3"
            text-color="#333"
            active-text-color="#ffd04b"
            mode="vertical"
            @close="handleClose"
            router
          >
          <el-sub-menu index="1">
              <template #title>
                <span>资讯中心</span>
              </template>
              <el-menu-item-group >
                <el-menu-item index="/newslist" >新闻资讯</el-menu-item>
                <el-menu-item index="/problem">常见问题</el-menu-item>
               
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
   <div class="container">
       
    <!-- <el-main> <recommond :poems="poem.poemer.pomerName"></recommond></el-main> -->
    <el-main>
      <detail-list :detailcontent="details.poemer" />
    </el-main>
   </div>
  </el-container>
</template>

<script>
import BannerSub from "../../components/common/bannersub/BannerSub.vue";
import DetailList from "../../components/content/detaillist/DetailList.vue"
import { getDetail } from "../../network/detail";
import { reactive, ref } from "vue";
import { useRouter,} from 'vue-router'
export default {
  components: {
    BannerSub,
    // Recommond,
    DetailList,
  },
  setup() {
    let details = reactive({
      poemer: [],
       selectedIndexs:['1'],
      id:''
    });

let menus = ref(null);
    const router = useRouter()
      const handleClose = (keyPath) => {
      menus.value.open(keyPath);
    };
		//使用
		//router.push..... 等等方法
		
		// route响应式对象，监控变化，传值
		// const route = useRoute    
		//获取 处理route.query 等等

      // console.log(router.currentRoute.value.path) 
   details.id= router.currentRoute.value.params.id
    // console.log(router.currentRoute.value.params.id)
    getDetail(details.id).then((res) => {
      console.log(res)
      console.log(res.data);
      details.poemer = res.data.detail[0].detail
    });

    return {
        details,
        menus,
        handleClose,
    };
  },
  
};
</script>

<style lang="scss" scoped>
::v-deep .el-container {
    margin-top:60px;
    
}
::v-deep .el-sub-menu .el-menu-item {
  min-width: 0;
}
::v-deep .el-col-3 {
  max-width: 66.5%;
}

.container {
    display: flex;
    flex-flow: column;
    ::v-deep .el-main {
   
    width: 100%;
    background: url('../../assets/img/bg/详情页背景.jpg');
}
}
</style>
