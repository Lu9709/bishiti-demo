<template>
  <nav>
    <router-link to="/home" active-class="selected">
      <Icon img-url="https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_tabbar1.png" text="早安"/>
    </router-link>
    <router-link to="/rank" active-class="selected">
      <Icon img-url="https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_tabbar2.png" text="排名"/>
    </router-link>
    <router-link to="/statistic" active-class="selected">
      <Icon img-url="https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_tabbar3.png" text="统计"/>
    </router-link>
    <router-link to="/about" active-class="selected">
      <Icon img-url="https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_tabbar4.png" text="我的"/>
    </router-link>
  </nav>
</template>
<script>
import Icon from "./Icon"

export default {
  components: {Icon}
}
</script>
<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-around;
  font-size:12px;
  box-shadow:0 0 1px rgba(0,0,0,0.25);

  .selected{
    color:#f3cf56
  }
}
</style>
