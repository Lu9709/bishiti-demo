<template>
  <Layout>
    <Weather/>
    <SignInPage/>
    <Guide/>
    <AsideTitle text="精选图片"/>
    <ImgList/>
    <AsideTitle text="精选阅读"/>
    <ReadFrame/>
  </Layout>
</template>

<script>

import Nav from "../components/Home/Nav"
import Layout from "../components/Layout"
import Guide from "../components/Home/Guide"
import AsideTitle from "../components/Home/AsideTitle"
import ReadFrame from "../components/Home/ReadFrame"
import ImgList from "../components/Home/ImgList"
import Weather from "../components/Home/Weather"
import SignInPage from "../components/Home/SignInPage"
export default {
  data() {
    return {}
  },
  components: {
    SignInPage,
    ReadFrame,
    AsideTitle,
    Guide,
    Layout,
    Nav,
    ImgList,
    Weather
  },
}
</script>
<style scoped>

</style>
