<template>
  
  <div class="news">
    <div class="explain">
    <h2>
      <img
        src="../../../assets/img/content/标题左.png"
        alt="中国故事"
        title="中国故事"
      />新闻资讯<img
        src="../../../assets/img/content/标题右.png"
        alt="中国故事"
        title="中国故事"
      /><em>chinese story</em>
    </h2>
  </div>
    <div class="news-con">
      <dl
       v-for="(item, index) in  poem.newsList"
          :key="index"
          @click="detailClick(item.id)"
      >
        <dt><img :src="item.img" alt="" /></dt>
        <dd>
          <h3>{{item.title}}</h3>
          <p v-html="item.content"></p>
        </dd>
      </dl>
     
    </div>
  </div>
</template>

<script>
import { getNews } from "../../../network/news";
import { reactive } from "vue";
import { useRouter } from 'vue-router'
export default {
  setup() {
    let poem = reactive({
      newsList: [],
     
      id:''
    });

    //请求推荐数据
    
      getNews().then((res) => {
        // console.log(res);
        console.log(res.data.news[0].news);
         poem.newsList = res.data.news[0].news
       
      });
    
    

    
     const router = useRouter()
     

    let detailClick=(id) =>{
     console.log(id)
      router.push( '/newsdetail/'+id)
    }
     

    return {
      poem,
     
      
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
    padding: 100px 0 0 0;
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
.news {
 
 font-family: "Noto Serif CJK SC", "Noto Serif CJK", "Source Han Serif SC",
    ‘Source Han Serif’, source-han-serif-sc, serif;
 background: url("../../../assets/img/content/背景.png") no-repeat;
  text-align: center;
 
  height: 700px;
 
 
  .news-con {
   width: 1200px;
     flex-flow: row wrap;
 display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
 padding-top: 70px;

  dl {
       display: flex;
    border:1px solid #ddd;
    width: 545px;
    height: 120px;
    
    margin: 0 0 60px 50px;
    dt img {
      // padding-top: 20px;
      width: 150px;
    }
    dd {
      
      h3 {
        text-align: left;

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
        font-weight: bold;
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
  } }
}
</style>