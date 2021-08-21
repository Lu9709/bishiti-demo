<template>
  <div class="list-wrapper">
    <ul class="leftList">
      <li class="list-item" v-for="item in leftList" :key="item">
        <img :src="item" alt="">
      </li>
    </ul>
    <ul class="rightList">
      <Button type="add"><i class="iconfont icon-addPhoto" style="font-size: 20px"></i>自己传图</Button>
      <li class="list-item" v-for="item in rightList" :key="item">
        <img :src="item" alt="">
      </li>
      <Button type="more">更多美图</Button>
    </ul>

  </div>
</template>
<script>
import Button from "./Button"

export default {
  components: {Button},
  data() {
    return {
      bgImgList: ["https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img1.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img2.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img3.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img4.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img5.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img6.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img7.png"],
    }
  },
  computed: {
    leftList: function () {
      return this.bgImgList.slice(0, Math.ceil(this.bgImgList.length / 2))
    },
    rightList: function () {
      return this.bgImgList.slice(Math.ceil(this.bgImgList.length / 2))
    }
  },
}

</script>
<style lang="less" scoped>

.list-wrapper {
  display: flex;
  justify-content: center;
  .leftList{
    display: flex;
    flex-direction: column;
  }
  .rightList{
    display: flex;
    flex-direction: column;
  }
  .list-item {
    padding: 4px 4px;
    img {
      vertical-align: bottom;
    }
  }
}
</style>
