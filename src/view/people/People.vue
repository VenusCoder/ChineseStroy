<template>
  <banner-sub />
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
        <el-col :span="3">
          <el-menu
            ref="menus"
           :default-openeds="poem.selectedIndexs"
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
                <span>故事中心</span>
              </template>
              <el-menu-item-group >
                <el-menu-item index="/poetry" >古诗词</el-menu-item>
                <el-menu-item index="/people">人物</el-menu-item>
                <el-menu-item index="/history">历史</el-menu-item>
                <el-menu-item index="/star">明星</el-menu-item>
                <el-menu-item index="/column">专栏</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main>
        <div class="r-list">
        <dl
          v-for="(item, index) in  poem.poemer"
          :key="index"
          @click="detailClick(item.id)"
        >
          <dt><img :src="item.img" alt="" /></dt>
          <dd>
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </dd>
        </dl>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import BannerSub from "../../components/common/bannersub/BannerSub.vue";
import Recommond from "../../components/common/recommond/Recommond.vue";
import { getPoetry } from "../../network/poetry";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
export default {
  components: {
    BannerSub,
    Recommond,

  },
  setup() {
    let poem = reactive({
      poemer: [],
      selectedIndexs:['1']
    });
    let menus = ref(null);
  const route = useRoute() // eslint-disable-line no-unused-vars
 const router = useRouter()
    getPoetry().then((res) => {
      console.log(res.data.data[0].poetry);
      poem.poemer = res.data.data[0].poetry;
    });

    const handleClose = (keyPath) => {
      menus.value.open(keyPath);
    };
 let detailClick=(id) =>{
     console.log(id)
      router.push( '/detail/'+id)
    }

    return {
      poem,
      menus,
      handleClose,
      detailClick,
      // tiaozhuan
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-sub-menu .el-menu-item {
  min-width: 0;
}
::v-deep .el-col-3 {
  max-width: 66.5%;
}




.r-list {
  font-family: "Noto Serif CJK SC", "Noto Serif CJK", "Source Han Serif SC",
    ‘Source Han Serif’, source-han-serif-sc, serif;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  dl {
    // background: url("../../") no-repeat;
    width: 420px;
    height: 400px;
    dt img {
      width: 410px;
      height: 270px;
      padding-top: 20px;
    }
    dd {
      h3 {
        text-align: left;
        white-space: nowrap; /*超出的空白区域不换行*/
        overflow: hidden; /*超出隐藏*/
        text-overflow: ellipsis; /*文本超出显示省略号*/

        font-size: 16px;
        font-weight: normal;
        &::after {
          content: "";
          width: 50px;
          height: 2px;
          background: #999;
          display: block;
          margin-top: 5px;
        }
      }
      p {
        font-size: 14px;
       margin-right: 20px;
        text-align: left;
              text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
