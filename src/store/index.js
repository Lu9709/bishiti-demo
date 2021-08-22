import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    allArticle: [
      {
        imgUrl: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/read_pic1.png",
        text: "好的界面设计并不始于图片，而是始于对人的理解",
        date: "2021-06-12"
      },
      {
        imgUrl: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/read_pic2.png",
        text: "将已知的事物陌生化，更是一种创造",
        date: "2021-06-10"
      },
      {
        imgUrl: "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/read_pic3.png",
        text: "不要在你家里放一件你不知其用，或你认为不美的东西",
        date: "2021-06-08"
      },
    ]
  },
})
