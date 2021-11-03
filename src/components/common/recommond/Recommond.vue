<template>


  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="古诗词" name="first">
      <div class="r-list">
        <dl
          v-for="(item, index) in  poem.pomerName"
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
    </el-tab-pane>
    <el-tab-pane label="人物" name="second">
      <div class="r-list">
        <dl v-for="(item, index) in poem.storyName" :key="index" @click="detailClick(item.id)">
          <dt><img :src="item.img" alt="" /></dt>
          <dd>
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </dd>
        </dl>
      </div>
     
    </el-tab-pane>
    <el-tab-pane label="历史" name="third">历史</el-tab-pane>
    <el-tab-pane label="明星" name="fourth">明星</el-tab-pane>
    <el-tab-pane label="专栏" name="fifth">专栏</el-tab-pane>
  </el-tabs>
</template>

<script>
import { getCenter } from "../../../network/center";
import { reactive } from "vue";
import { useRouter } from 'vue-router'
export default {
  props: {
    poems: {type:Array},
    //  storys: {type:Array},
    //  id:''
  },
  setup() {
    let poem = reactive({
      pomerName: [],
      storyName: [],
      id:''
    });

    //请求推荐数据
    let getConter = (type) => {
      getCenter(type, 2).then((res) => {
        // console.log(res);
        console.log(res.data);
        poem.pomerName = res.data.poetry;
        poem.storyName = res.data.story;
      });
    };
     getConter("poetry");

    let handleClick = (targetName) => {
      //alert(targetName.paneName)
      //first//second//third
      if (targetName.paneName == "first") {
       getConter("poetry");
      } else if (targetName.paneName == "second") {
        getConter("story");
      } else if (targetName.paneName == "third") {
        alert(3); //此处写逻辑
      }
    };
     const router = useRouter()
     

    let detailClick=(id) =>{
     console.log(id)
      router.push( '/detail/'+id)
    }
     

    return {
      poem,
      getConter,
      handleClick,
      detailClick,
     
    };
  },
  data() {
    return {
      activeName: "first",
    };
  },
};
</script>

<style lang="scss" scoped>
.explain {
  font-family: "Noto Serif CJK SC", "Noto Serif CJK", "Source Han Serif SC",
    ‘Source Han Serif’, source-han-serif-sc, serif;
  text-align: center;
  height: 188px;
  font-size: 16px;
  h2 {
    font-size: 29px;
    font-weight: bold;
    margin: 0;
    padding: 70px 0 0 0;
    em {
      display: block;
      font-style: normal;
      font-size: 13px;
      color: #aaa;
      text-transform: uppercase;
      letter-spacing: 4px;
    }
  }
}

.r-list {
  font-family: "Noto Serif CJK SC", "Noto Serif CJK", "Source Han Serif SC",
    ‘Source Han Serif’, source-han-serif-sc, serif;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  dl {
    background: url("../../../assets/img/content/边框.png") no-repeat;
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