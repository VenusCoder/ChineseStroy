<template>
<div class="culture">
  <div class="explain">
    <h2>
      <img
        src="../../../assets/img/content/标题左.png"
        alt="中国故事"
        title="中国故事"
      />关于我们<img
        src="../../../assets/img/content/标题右.png"
        alt="中国故事"
        title="中国故事"
      /><em>chinese story</em>
    </h2>
  </div>
  <div class="explore">
      <h3>仰之弥高 钻之弥坚</h3>
      <p>中华文化经历五千年的风风雨雨，历久弥新，从官方史学二十四史，经历千年的沧桑巨变，梳理出每个历史时期的脉络，用一段段沧桑文字传递出历史变迁，再到民间文学、野史，补充官方文学的严肃。</p>
      <p>在浩如烟海的经史典籍中，透视历史背后隐藏的道理，以飨今人，汲取古人智慧，启迪思考，为未来点亮前进道路的明灯，在孑孓独行的旅程中有文字有故事相伴，你并不孤单。</p>
      <span>Chinese culture has experienced five thousand years of ups and downs and has been renewed for a long time. From the Twenty-Four Histories of official history to the great changes of thousands of years, it combs out the context of each historical period, conveys the historical changes with vicissitudes, and then to folk literature and unofficial history to supplement the seriousness of official literature.</span>
        <span>In the vast number of classics and historical books, you can see through the hidden truth behind history for today's people, absorb the wisdom of the ancients, enlighten thinking, and light up the bright light of the way forward for the future. You are not alone with words and stories in your lonely journey.</span>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.culture {
     font-family: "Noto Serif CJK SC", "Noto Serif CJK", "Source Han Serif SC",
    ‘Source Han Serif’, source-han-serif-sc, serif;
    text-align: center;
    height: 480px;
    background: url('../../../assets/img/content/花纹.jpg');
.explain {
 
  text-align: center;
  height: 160px;
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
.explore{
    span{
  font: italic  Georgia, serif;
  display: block;
  color: #999;
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
    }
  
}
}
</style>