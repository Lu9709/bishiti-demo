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
      //精刚导航栏数据
      guide: [
        {icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_guide1.png", txt: "换图"},
        {icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_guide2.png", txt: "提醒"},
        {icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_guide3.png", txt: "积分"},
        {icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_guide4.png", txt: "成就"},
      ],

      //精选图片数据
      bgImgList: ["https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img1.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img2.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img3.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img4.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img5.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img6.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img7.png"],

      //精选阅读数据
      readData: [
        {
          icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/read_pic1.png",
          title: "好的界面设计并不始于图片，而是始于对人的理解",
          date: "2021-06-12"
        },
        {
          icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/read_pic2.png",
          title: "将已知的事物陌生化，更是一种创造",
          date: "2021-06-10"
        },
        {
          icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/read_pic2.png",
          title: "不要在你家里放一件你不知其用，或你认为不美的东西",
          date: "2021-06-08"
        },
      ],

      //底部导航栏数据
      tabbar: [
        {icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_tabbar1.png", txt: "早安"},
        {icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_tabbar2.png", txt: "排名"},
        {icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_tabbar3.png", txt: "统计"},
        {icon: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/icon_tabbar4.png", txt: "我的"},
      ],

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
