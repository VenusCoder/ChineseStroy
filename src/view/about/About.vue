<template>
  <div class="explain">
    <h2>
      <img
        src="../../assets/img/content/标题左.png"
        alt="中国故事"
        title="中国故事"
      />关于我们<img
        src="../../assets/img/content/标题右.png"
        alt="中国故事"
        title="中国故事"
      /><em>about us</em>
    </h2>
  </div>
  <div class="about">
    <p>“人生如逆旅，我亦是行人”人生匆匆几十年，屈指可数，柳如丝、发如雪，苒苒时光滴滴答答穿梭而过，留下痕迹？飘过孤影？否也。最后只剩下回忆，无论成功，还是失败，亦或平凡碌碌无为一生，都不应成为过眼云烟。几十年光阴似箭，最宝贵的莫过于丰富的人生经验，而中华民族上下五千年的历史经验，更是整个民族宝贵的精神财富，不应只停留在口头，蹲歇在犄角旮旯，无人问津！</p>
  </div>
</template>

<script>
export default {

}
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
.about {
  text-align: center;
  height: 260px;
  background: url('../../assets/img/content/abou_bg.jpg') no-repeat;
  font-family: "Noto Serif CJK SC", "Noto Serif CJK", "Source Han Serif SC",
    ‘Source Han Serif’, source-han-serif-sc, serif;
    p{
      font-size: 16px;
    font-weight: normal;
    padding: 83px 200px;
    line-height: 30px;
    }
}
</style>>

