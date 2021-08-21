<template>
  <div class="icon">
    <img :src="imgUrl" alt="">
    <span>{{text}}</span>
  </div>
</template>
<script>
export default {
  name:'Icon',
  props:['imgUrl','text']
}
</script>
<style lang="less" scoped>
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  fill:currentColor;
  padding: 8px 0;
  img {
    width: 24px;
    height: 24px;
  }
  span{
    color:#aaaaaa;
    white-space: nowrap;
  }
}

</style>
