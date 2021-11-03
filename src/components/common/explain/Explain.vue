<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <div class="explain">
          <h2>
            <img
              src="../../../assets/img/content/标题左.png"
              alt="中国故事"
              title="中国故事"
            />故事中国<img
              src="../../../assets/img/content/标题右.png"
              alt="中国故事"
              title="中国故事"
            /><em>chinese story</em>
          </h2>
          <h3>万千世界 讲好中国故事</h3>
          <p>
            中国故事，博大精深；中国道理包罗万象。中华民族用上下五千年的奋斗历程盘拼搏出震铄古今、灿烂辉煌的中华文化，并成为滋润一代代中华儿女茁壮成长的充足“营养液”
          </p>
          <p>
            我们通过讲述中国故事，不限于诗词、成语、歇后语、英雄人物、重要历史事件、传统习俗、传统节日、历史传记等优秀中华文化，向读者传达中华民族不屈不挠、艰苦奋斗、同甘共苦、努力拼搏的精神
          </p>
          <p>
            希望读者铭记历史，不忘初心、牢记使命，在在新的历史征程中，为中华民族伟大复兴不懈努力，为我们国家光明的未来贡献力量。
          </p>
          <p>中国加油！未来可期！</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div></div
    ></el-col>
  </el-row>
</template>
<script>
export default {};
</script>

<style  lang="scss" scoped>
.el-row {
  font-family: "Source Han Sans CN";
  
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  font-family: "Noto Serif CJK SC", "Noto Serif CJK", "Source Han Serif SC",
    ‘Source Han Serif’, source-han-serif-sc, serif;
  //   font-family: 'Noto', 'Noto Sans CJK SC', 'Noto Sans CJK', 'Source Han Sans', source-han-sans-simplified-c, sans-serif;
  background: url("../../../assets/img/content/背景1.jpg");
  border-radius: 4px;
  min-height: 36px;
  .explain {
    text-align: center;
    height: 436px;
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
    h3 {
      font-size: 18px;
      font-weight: bold;
      padding: 20px;
    }
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>