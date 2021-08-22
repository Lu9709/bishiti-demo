<template>
  <div class="list-wrapper">
    <ul class="leftList">
      <li class="list-item" v-for="item in LeftImgList" :key="item">
        <img :src="item" alt="">
      </li>
    </ul>
    <ul class="rightList">
      <Button type="add"><i class="iconfont icon-addPhoto" style="font-size: 20px"></i>自己传图</Button>
      <li class="list-item" v-for="item in RightImgList" :key="item">
        <img :src="item" alt="">
      </li>
      <Button type="more" @click.native="ToPhotoGallery">更多美图</Button>
    </ul>

  </div>
</template>
<script>
import Button from "../Button"
import {mapGetters} from "vuex"
export default {
  components: {Button},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['LeftImgList','RightImgList'])
  },
  methods:{
    ToPhotoGallery(){
      console.log('click')
      this.$router.push('/photo-gallery')
    }
  }
}

</script>
<style lang="less" scoped>

.list-wrapper {
  display: flex;
  justify-content: center;
  .leftList{
    display: flex;
    flex-direction: column;
  }
  .rightList{
    display: flex;
    flex-direction: column;
  }
  .list-item {
    padding: 4px 4px;
    img {
      vertical-align: bottom;
    }
  }
}
</style>
