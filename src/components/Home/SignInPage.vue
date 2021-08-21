<template>
  <div class="SignInPage-wrapper">
    <img class="log_pic" :src="log_pic_url" alt=""/>
    <p>距离打卡结束倒计时 02:02:02</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      log_pic_url: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/log_pic.png?1=1",
      //todo:html中需要的变量，请在此处定义
    }
  }
}
</script>
<style lang="less" scoped>
/*打卡海报图样式*/
.SignInPage-wrapper{
  display: flex;
  padding: 0 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .log_pic {
    width: 100%;
  }
  p{
    padding: 5px 0;
  }
}


/* todo:在这里往下继续编写css */
</style>
