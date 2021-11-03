<template>
  <banner-sub />
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
        <el-col :span="3">
          <el-menu
            :uniqueOpened="false"
            default-active="0"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#f30"
            text-color="#fff"
            active-text-color="#ffd04b"
            mode="vertical"
          >
            <el-sub-menu index="1">
              <template #title>
                <span>故事中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="0">古诗词</el-menu-item>
                <el-menu-item index="1">人物</el-menu-item>
                <el-menu-item index="2">历史</el-menu-item>
                <el-menu-item index="3">明星</el-menu-item>
                <el-menu-item index="4">专栏</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main> <recommond :story="story.poemer.pomerName"></recommond></el-main>
  </el-container>
</template>

<script>
import BannerSub from "../../components/common/bannersub/BannerSub.vue";
import Recommond from "../../components/common/recommond/Recommond.vue";
import { getStory } from "../../network/story";
import { reactive } from "vue";
export default {
  components: {
    BannerSub,
    Recommond,
  },
  setup() {
    let story = reactive({
      poemer: {
        pomerName: [],
      },
    });

    getStory().then((res) => {
      console.log(res.data.data[0]);
      story.poemer.pomerName = res.data.data[0].poetry;
    });

    return {
      story,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
</style>
