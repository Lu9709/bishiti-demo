<template>
    <div>
      <ul class="list-wrapper" >
        <li class="list-item" v-for="(item,index) in bgImgList" :key="index">
          <img :src="item" alt="">
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  data(){
    return {
      bgImgList: ["https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img1.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img2.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img3.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img4.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img5.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img6.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img7.png"],
    }
  },
  created() {

  }
}

</script>
<style lang="less" scoped>
.list-wrapper{
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  .list-item{
    padding: 4px 4px;
    img{
      vertical-align : bottom;
    }
  }
}
</style>
