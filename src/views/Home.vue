<template>
  <Layout>
    <div id="main-body">
      <img class="weather_icon" :src="weather_icon" alt/>
      <span class="weather-text">{{weather_text}}</span>
    </div>
    <img class="log_pic" :src="log_pic_url" alt=""/>
    <Guide/>
    <AsideTitle text="精选图片"/>
    <ImgList/>
    <AsideTitle text="精选阅读"/>
    <ReadFrame/>
  </Layout>
</template>

<script>

import Nav from "../components/Nav"
import Layout from "../components/Layout"
import Guide from "../components/Guide"
import AsideTitle from "../components/AsideTitle"
import ReadFrame from "../components/ReadFrame"
import ImgList from "../components/ImgList"
export default {
  data() {
    return {
      weather_icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_weather.png",
      weather_text: "",
      log_pic_url: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/log_pic.png?1=1",
      //todo:html中需要的变量，请在此处定义
    }

  },
  components: {ReadFrame, AsideTitle, Guide, Layout, Nav,ImgList},
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

<style scoped>

#main-body {
  margin-left: 5px;
  margin-right: 5px;
  left: 0;
}

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

/*打卡海报图样式*/

.log_pic {
  width: 100%;
}

/* todo:在这里往下继续编写css */
</style>
