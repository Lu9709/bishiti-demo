<template>
  <div class="aside">
    <div class="left"></div>
    <div class="right"><p>{{ text }}</p></div>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
<style lang="less" scoped>
.aside {
  display: flex;
  align-items: center;
  margin: 10px 0;
  .left {
    width: 5px;
    height: 36px;
    background-color: #f3cf56;
    margin-right: 10px;
  }

  .right {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(252, 244, 215, 1) 0%, rgba(255, 255, 255, 1) 100%);
    p{
      padding: 10px;
      font-size: 20px;
      color:#525251;
      line-height: 20px;
    }
  }
}

</style>
