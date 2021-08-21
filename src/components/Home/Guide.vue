<template>
  <nav>
    <router-link to="/" active-class="selected">
      <Icon img-url="https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_guide1.png" text="换图"/>
    </router-link>
    <router-link to="/" active-class="selected">
      <Icon img-url="https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_guide2.png" text="提醒"/>
    </router-link>
    <router-link to="/" active-class="selected">
      <Icon img-url="https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_guide3.png" text="积分"/>
    </router-link>
    <router-link to="/" active-class="selected">
      <Icon img-url="https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_guide4.png" text="成就"/>
    </router-link>
  </nav>
</template>
<script>
import Icon from "../Icon"
export default {
  components: {Icon}
}
</script>
<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-around;
  font-size:12px;
}

</style>
