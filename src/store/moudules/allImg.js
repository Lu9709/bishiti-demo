const state = {
  allImg: ["https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img1.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img2.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img3.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img4.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img5.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img6.png", "https://xunmi-fe-test.oss-cn-shanghai.aliyuncs.com/img/bg_img7.png"],
}
const getters = {
  LeftImgList: state => state.allImg.slice(0, Math.ceil(state.allImg.length / 2)),
  RightImgList: state => state.allImg.slice(Math.ceil(state.allImg.length / 2)),
  AllImgList: state => state.allImg
}
export default {
  state,
  getters
}
