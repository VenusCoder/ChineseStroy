<template>
  <div class="explain">
    <h2>
      <img
        src="../../assets/img/content/标题左.png"
        alt="中国故事"
        title="中国故事"
      />联系我们<img
        src="../../assets/img/content/标题右.png"
        alt="中国故事"
        title="中国故事"
      /><em>contact us</em>
    </h2>
  </div>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple"><p><img src="../../assets/img/content/QQ.png" alt=""></p><p>qq</p><h3>2549751987</h3></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"><p><img src="../../assets/img/content/QQ.png" alt=""></p><p>qq</p><h3>2549751987</h3></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"><p><img src="../../assets/img/content/QQ.png" alt=""></p><p>qq</p><h3>2549751987</h3></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"><p><img src="../../assets/img/content/QQ.png" alt=""></p><p>qq</p><h3>2549751987</h3></div></el-col>
  </el-row>
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
.el-row {
  margin-bottom: 20px;
  text-align: center;
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
  border-radius: 4px;
  min-height: 36px;
  img {
    width: 80px;
    height: 80px;
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>>

