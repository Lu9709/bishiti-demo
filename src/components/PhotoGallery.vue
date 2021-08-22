<template>
  <div class="content-wrapper">
    <h3>更多图片</h3>
    <ul class="list-wrapper">
      <li class="list-item" v-for="item in AllImgList" :key="item">
        <img :src="item" alt="">
      </li>
    </ul>
    <el-button round @click="ToHome" class="back">返回</el-button>
  </div>
</template>
<script>
import {mapGetters} from "vuex"

export default {
  computed: {
    ...mapGetters(['AllImgList'])
  },
  methods: {
    ToHome() {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="less" scoped>
.content-wrapper {
  position: relative;
  h3 {
    padding: 10px 0;
    text-align: center;
  }

  .list-wrapper {
    padding: 0 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .list-item {
      padding: 4px 4px;

      img {
        vertical-align: bottom;
      }
    }
  }
  .back{
    position: fixed;
    right:15px;
    bottom: 20px;
  }
}
</style>
