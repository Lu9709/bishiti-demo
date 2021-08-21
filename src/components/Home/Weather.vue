<template>
  <div id="main-body">
    <img class="weather_icon" :src="weather_icon" alt/>
    <span class="weather-text">{{ weather_text }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weather_icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_weather.png",
      weather_text: "",
    }
  },
  created: function () {
    //获取天气文本
    this.getWeatherText();
  },
  methods: {
    getWeatherText() {
      this.weather_text = "江干区，小雨，气温24～31℃"
    },
    //todo:如有需要，你可以在这里编写method，实现交互或者对变量赋值
  }
}
</script>
<style lang="less" scoped>
#main-body {
  margin-left: 15px;
  margin-right: 15px;
  left: 0;
  padding: 5px 0;
  /* 天气预报样式 */
  .weather_icon {
    width: 16px;
    height: 16px;
    vertical-align: -2px;
  }

  .weather-text {
    font-size: 14px;
    font-weight: 400;
    color: #4F4F4F;
    line-height: 20px;
  }
}


</style>
