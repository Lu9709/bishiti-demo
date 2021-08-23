<template>
  <div class="list-wrapper">
    <ul class="leftList">
      <li class="list-item" v-for="item in LeftImgList" :key="item">
        <img :src="item" alt="">
      </li>
    </ul>
    <ul class="rightList">
      <Button type="add">
        <label>
        <span> <i class="iconfont icon-addPhoto" style="font-size: 20px"></i>
        自己传图</span>
          <input type="file" id="inputFile" @change="photoUpload">
        </label>
      </Button>
      <li class="list-item" v-for="item in RightImgList" :key="item">
        <img :src="item" alt="">
      </li>
      <Button type="more" @click.native="toPhotoGallery">更多美图</Button>
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
    ...mapGetters(['LeftImgList', 'RightImgList'])
  },
  methods: {
    toPhotoGallery() {
      this.$router.push('/photo-gallery')
    },
    photoUpload(event) {
      const h = this.$createElement;
      let file = event.target.files[0]
      let suffixName = file.name.substring(file.name.lastIndexOf('.') + 1)
      if (suffixName !== 'jpg' && suffixName !== 'png') {
        this.$notify({
          title: '警告',
          message: h('i', {style: 'color: teal'}, '图片格式不正确')
        });
      }
      let limitSize = file / 1024 / 1024 < 2
      if (!limitSize) {
        this.$notify({
          title: '警告',
          message: h('i', {style: 'color: teal'}, '上传文件不能超过2MB！')
        });
      }
      let formData = new FormData();
      formData.append('photoName',file)
      this.$notify({
        title: '警告',
        message: h('i', {style: 'color: teal'}, '目前无上传接口！')
      });
    }
  }
}

</script>
<style lang="less" scoped>

.list-wrapper {
  display: flex;
  justify-content: center;

  .leftList {
    display: flex;
    flex-direction: column;
  }

  .rightList {
    display: flex;
    flex-direction: column;
  }

  #inputFile {
    display: none;
  }

  .list-item {
    padding: 4px 4px;

    img {
      vertical-align: bottom;
    }
  }
}
</style>
